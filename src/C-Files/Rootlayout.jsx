import React from 'react';
import { Outlet } from 'react-router-dom';

const Rootlayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600/80 shadow-lg z-50">
        <div className="flex items-center">
          <div className="py-4 px-8 rounded-r-4xl bg-black/80">
            <h1 className="text-2xl text-white font-bold tracking-widest lobster-regular">
              Gamer-Style
            </h1>
          </div>
          <nav className="ml-auto flex gap-6 text-white font-medium">
            <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Services</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 mt-20 px-6 md:px-12">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
          <div className="flex gap-6 text-gray-300">
            <a href="#" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#" className="hover:text-red-500 transition-colors">About</a>
            <a href="#" className="hover:text-red-500 transition-colors">Services</a>
            <a href="#" className="hover:text-red-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Rootlayout;
