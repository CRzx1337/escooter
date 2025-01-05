import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} E-Scooter Tuning Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}