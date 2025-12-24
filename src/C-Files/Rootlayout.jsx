import React from "react";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-lg">
        <div className="w-full pr-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="bg-black/80 px-6 py-2 h-full items-center flex  rounded-r-2xl shadow-md">
              <h1 className="text-xl md:text-2xl text-white font-bold tracking-widest lobster-regular">
                Gamer-Style
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex gap-8 text-white font-medium">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative hover:text-yellow-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 hover:after:w-full after:transition-all"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile indicator */}
            <span className="md:hidden text-white text-sm opacity-80">
              MENU
            </span>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16"></div>

      {/* Main */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-10 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Gamer-Style. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-red-500 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Rootlayout;
