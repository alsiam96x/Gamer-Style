import React, { useState, useEffect, useRef } from "react";
import data from "../jsonapi/1000_gaming_bios.json";
import Creator from "../myself/Creator";
import Imgs from "../C-Files/Imgs";
import symbols from "../jsonapi/symbols.json";

const FFBIOS = () => {
  const [ffBios, setFfBios] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBio, setCurrentBio] = useState("");
  const textareaRef = useRef(null);
 const [parsedBio, setParsedBio] = useState([]);

 
 
  useEffect(() => {
    setFfBios(data);
  }, []);

  const handleEdit = (bio) => {
    setIsEditing(true);
    setCurrentBio(bio);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentBio).then(() => {
      alert("Bio Copied!");
    });
  };

  // Insert symbol at cursor position
  const handleSymbolClick = (symbol) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const newValue =
      currentBio.substring(0, start) + symbol + currentBio.substring(end);

    setCurrentBio(newValue);

    // Move cursor after inserted symbol and keep focus
    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + symbol.length;
      textarea.focus();
    }, 0);
  };




  return (
    <div className="container mx-auto p-4 sm:p-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between bg-[#0000002f] p-4 sm:p-6 rounded-lg mb-12 gap-4 w-full">
        <Creator />
        <h1 className="rowdies-regular text-lg sm:text-xl text-left sm:text-right w-full sm:w-auto">
          <span className="text-red-700">#</span> Free Fire Bios ({ffBios.length - 1}+)
        </h1>
      </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {ffBios.map((bio, index) => {
    // Parse the bio here (inside render is okay for small data)
    const regex = /\[([0-9A-Fa-f]{1,6}|[ABC])\](.*?)(?=(\[[0-9A-Fa-f]{1,6}|[ABC]\])|$)/gs;
    const styleMap = { B: { fontWeight: "bold" }, C: { fontWeight: "bold" }, A: { fontWeight: "bold" } };
    
    const parsed = [];
    let match;
    while ((match = regex.exec(bio)) !== null) {
      const code = match[1];
      const style = styleMap[code] || (/^[0-9A-Fa-f]{1,6}$/.test(code) ? { color: `#${code}` } : {});
      parsed.push({ text: match[2], style });
    }

    return (
      <div
        key={index}
        className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition flex flex-col justify-between"
      >
        {/* Render parsed bio with styles */}
        <div className="text-sm sm:text-base whitespace-pre-wrap h-30 flex justify-center items-center rounded-2xl bg-gradient-to-r from-black/55 via-black/45 to-black/40 shadow-lg p-4">
  <div className="text-white">
    {parsed.length > 0
      ? parsed.map((item, idx) => (
          <span key={idx} style={item.style}>
            {item.text}
          </span>
        ))
      : bio /* fallback if no styles */}
  </div>
</div>

         <div className="text-sm sm:text-base whitespace-pre-wrap mt-2">
          {bio}
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2">
          <button
            onClick={() => navigator.clipboard.writeText(bio).then(() => alert("Copied"))}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:scale-105 transition"
          >
            📋 Copy
          </button>

          <button
            onClick={() => handleEdit(bio)}
            className="border px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-gray-100 hover:scale-105 transition"
          >
            ✎ Edit
          </button>
        </div>
      </div>
    );
  })}
</div>



      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white p-5 sm:p-6 rounded-xl w-full max-w-lg shadow-lg">
            <h2 className="font-semibold mb-3 text-lg sm:text-xl">Edit Bio</h2>

            <textarea
              ref={textareaRef}
              value={currentBio}
              onChange={(e) => setCurrentBio(e.target.value)}
              className="w-full border rounded-lg p-3 text-sm sm:text-base h-32 focus:outline-none"
            />

            {/* Symbols */}
            <div className="mt-4">
              <h2 className="font-semibold mb-1 text-lg sm:text-xl italic">Symbols...</h2>
              <div className="w-full bg-black/10 mb-2 h-1" />
              <div className="h-48 overflow-y-scroll flex flex-wrap gap-3 text-justify justify-between">
                {symbols.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => handleSymbolClick(item)}
                    className="w-10 h-10 flex justify-center items-center bg-black/5 rounded-lg cursor-pointer hover:bg-black/10 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="w-full bg-black/10 my-2 h-1" />
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-lg border text-sm sm:text-base"
              >
                Cancel
              </button>

              <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm sm:text-base"
              >
                Copy Edited Bio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Banner part */}
      <Imgs />

    </div>
  );
};

export default FFBIOS;
