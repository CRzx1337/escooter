import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Guide {
  id: string;
  title: string;
  content: string;
}

export default function Guides() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGuides() {
      const { data, error } = await supabase
        .from('guides')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading guides:', error);
        return;
      }

      setGuides(data || []);
      setLoading(false);
    }

    loadGuides();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading guides...</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Tuning Guides</h1>
      
      <div className="grid gap-6">
        {guides.map((guide) => (
          <article key={guide.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{guide.title}</h2>
            <div className="prose max-w-none">{guide.content}</div>
          </article>
        ))}
      </div>
    </div>
  );
}