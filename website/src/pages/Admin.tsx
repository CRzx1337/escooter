import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FileCode, Book, BarChart } from 'lucide-react';

export default function Admin() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <AdminCard
          icon={<FileCode />}
          title="Manage Scripts"
          description="Add, edit, or remove LISP tuning scripts"
          link="/admin/scripts"
        />
        <AdminCard
          icon={<Book />}
          title="Manage Guides"
          description="Create and edit tuning guides"
          link="/admin/guides"
        />
        <AdminCard
          icon={<BarChart />}
          title="Analytics"
          description="View usage statistics and downloads"
          link="/admin/analytics"
        />
      </div>

      <Routes>
        <Route path="/scripts" element={<div>Script Management</div>} />
        <Route path="/guides" element={<div>Guide Management</div>} />
        <Route path="/analytics" element={<div>Analytics Dashboard</div>} />
      </Routes>
    </div>
  );
}

function AdminCard({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link to={link} className="block">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
          {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6 text-indigo-600' })}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}