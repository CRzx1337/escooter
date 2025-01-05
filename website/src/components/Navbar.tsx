import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Calculator, FileCode, Book, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="w-8 h-8" />
            <span className="font-bold text-xl">E-Scooter Tuning</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/calculator" className="flex items-center space-x-1 hover:text-indigo-200">
              <Calculator className="w-4 h-4" />
              <span>Calculator</span>
            </Link>
            <Link to="/scripts" className="flex items-center space-x-1 hover:text-indigo-200">
              <FileCode className="w-4 h-4" />
              <span>Scripts</span>
            </Link>
            <Link to="/guides" className="flex items-center space-x-1 hover:text-indigo-200">
              <Book className="w-4 h-4" />
              <span>Guides</span>
            </Link>
            <Link to="/admin" className="flex items-center space-x-1 hover:text-indigo-200">
              <User className="w-4 h-4" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}