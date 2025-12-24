import React, { useState, useEffect, useRef } from "react";
import names from "../jsonapi/gaming_name.json";
import Creator from "../myself/Creator";
import Imgs from "../C-Files/Imgs";
import symbols from "../jsonapi/symbols.json";

const FFNAMES = () => {
  const [ffNames, setFfNames] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentName, setCurrentName] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    setFfNames(names);
  }, []);

  const handleEdit = (name) => {
    setIsEditing(true);
    setCurrentName(name);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentName).then(() => {
      alert("Name Copied!");
    });
  };

  // Insert symbol at cursor position
  const handleSymbolClick = (symbol) => {
    const textarea = textareaRef.current;
    
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const newValue =
      currentName.substring(0, start) + symbol + currentName.substring(end);

    setCurrentName(newValue);

    // Move cursor after inserted symbol
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
          <span className="text-red-700">#</span> Free Fire Names ({ffNames.length}+)
        </h1>
      </div>

      {/* Names Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ffNames.map((name, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition flex flex-col justify-between"
          >
            <pre className="whitespace-pre-wrap text-sm sm:text-base">{name}</pre>

            <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2">
              <button
                onClick={() => navigator.clipboard.writeText(name).then(() => alert("Copied"))}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:scale-105 transition"
              >
                📋 Copy
              </button>

              <button
                onClick={() => handleEdit(name)}
                className="border px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-gray-100 hover:scale-105 transition"
              >
                ✎ Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white p-5 sm:p-6 rounded-xl w-full max-w-lg shadow-lg">
            <h2 className="font-semibold mb-3 text-lg sm:text-xl">Edit Name</h2>

            <textarea
              ref={textareaRef}
              value={currentName}
              onChange={(e) => setCurrentName(e.target.value)}
              className="w-full border rounded-lg p-3 text-sm sm:text-base h-24 focus:outline-none"
            />

            <div className="mt-4">
              <h2 className="font-semibold mb-1 text-lg sm:text-xl italic">Symbols...</h2>
              <div className="w-full bg-black/10 mb-2 h-1"/>
              <div className="h-60 overflow-y-scroll flex flex-wrap gap-3 text-justify justify-between">
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
              <div className="w-full bg-black/10 my-2 h-1"/>
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
                Copy Edited Name
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Banner part */}
      <Imgs/>

    </div>
  );
};

export default FFNAMES;
