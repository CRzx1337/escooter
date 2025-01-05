import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Script {
  id: string;
  title: string;
  description: string;
  content: string;
}

export default function Scripts() {
  const [scripts, setScripts] = useState<Script[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadScripts() {
      const { data, error } = await supabase
        .from('scripts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading scripts:', error);
        return;
      }

      setScripts(data || []);
      setLoading(false);
    }

    loadScripts();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading scripts...</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">LISP Tuning Scripts</h1>
      
      <div className="grid gap-6">
        {scripts.map((script) => (
          <div key={script.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{script.title}</h2>
            <p className="text-gray-600 mb-4">{script.description}</p>
            <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto">
              <code>{script.content}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}