import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-900 p-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center text-white">
      <h1 className="text-2xl font-bold">PromptlyAI</h1>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-blue-300">Home</Link>
        <Link to="/about" className="hover:text-blue-300">About</Link>
        <Link to="/contact" className="hover:text-blue-300">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
