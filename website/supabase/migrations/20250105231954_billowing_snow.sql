/*
  # Initial Schema Setup for E-Scooter Tuning Portal

  1. New Tables
    - scripts
      - id: UUID primary key
      - title: Text, name of the script
      - description: Text, details about the script
      - content: Text, the LISP script content
      - created_at: Timestamp
      - updated_at: Timestamp
    
    - guides
      - id: UUID primary key
      - title: Text
      - content: Text, markdown content
      - created_at: Timestamp
      - updated_at: Timestamp

  2. Security
    - Enable RLS on all tables
    - Public read access for authenticated users
    - Write access only for admin users
*/

-- Create scripts table
CREATE TABLE scripts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create guides table
CREATE TABLE guides (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE scripts ENABLE ROW LEVEL SECURITY;
ALTER TABLE guides ENABLE ROW LEVEL SECURITY;

-- Create policies for scripts
CREATE POLICY "Allow public read access to scripts"
    ON scripts
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Allow admin write access to scripts"
    ON scripts
    FOR ALL
    TO authenticated
    USING (auth.jwt() ->> 'role' = 'admin');

-- Create policies for guides
CREATE POLICY "Allow public read access to guides"
    ON guides
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Allow admin write access to guides"
    ON guides
    FOR ALL
    TO authenticated
    USING (auth.jwt() ->> 'role' = 'admin');