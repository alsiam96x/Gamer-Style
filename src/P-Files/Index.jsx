import React from "react";
import { Link } from "react-router-dom";

// Import images from public folder (use root-relative paths)
const images = [
  "/unnamed.webp",
  "/unnamed (1).webp",
  "/unnamed (2).webp",
  "/unnamed (3).webp",
  "/unnamed (4).webp",
  "/unnamed (5).webp",
  "/unnamed (6).webp",

];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn-gop.garenanow.com/webmain/static/payment_center/common/garena-logo.png"
            alt="Garena Logo"
            className="h-10"
          />
          <h1 className="text-2xl font-bold text-gray-900">Free Fire Tools</h1>
        </div>
        <p className="text-gray-500 text-sm">Dashboard</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-8 py-10">
        {/* Intro Section */}
        <section className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Welcome to Free Fire Tools
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl">
            Browse thousands of Free Fire Bios and Names. Copy, edit, and personalize them with symbols easily.
          </p>
        </section>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* FF Bios Card */}
          <Link
            to="/ffbios"
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">FF Bios</h3>
            <p className="text-gray-600 text-sm mb-4 flex-1">
              Browse and edit unique Free Fire bios. Add symbols and personalize quickly.
            </p>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium transition">
              Go to Bios
            </button>
          </Link>

          {/* FF Names Card */}
          <Link
            to="/ffnames"
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <h3 className="text-2xl font-semibold text-green-600 mb-3">FF Names</h3>
            <p className="text-gray-600 text-sm mb-4 flex-1">
              Explore creative Free Fire names. Copy directly or edit with symbols for uniqueness.
            </p>
            <button className="mt-auto bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium transition">
              Go to Names
            </button>
          </Link>
        </section>

 {/* Advanced Image Gallery */}
<section className="mb-12">
  <h3 className="text-3xl font-bold tracking-widest text-gray-900 mb-8 text-center uppercase">
    Gallery
  </h3>

  {/* Grid layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {images.map((img, index) => (
      <div
        key={index}
        className={index === 0 ? "col-span-1 md:col-span-3" : "col-span-1"}
      >
        <img
          src={img}
          alt={`Gallery ${index + 1}`}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
    ))}
  </div>
</section>


      </main>
    </div>
  );
};

export default Index;
