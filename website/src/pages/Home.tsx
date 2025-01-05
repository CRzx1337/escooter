import React from 'react';
import { Calculator, FileCode, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../components/FeatureCard';

export default function Home() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">E-Scooter Tuning Portal</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Professional tools and resources for e-scooter enthusiasts
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <Link to="/calculator">
          <FeatureCard
            icon={<Calculator />}
            title="Power Calculator"
            description="Calculate optimal power settings and range estimates for your e-scooter"
          />
        </Link>
        <Link to="/scripts">
          <FeatureCard
            icon={<FileCode />}
            title="LISP Scripts"
            description="Download verified tuning scripts for various e-scooter models"
          />
        </Link>
        <Link to="/guides">
          <FeatureCard
            icon={<Book />}
            title="Tuning Guides"
            description="Step-by-step guides for safe and effective e-scooter tuning"
          />
        </Link>
      </div>
    </div>
  );
}