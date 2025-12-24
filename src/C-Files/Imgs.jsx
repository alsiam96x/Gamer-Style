import React from "react";
import imgSrc from "../../public/image.png"; // Import the image

const Imgs = () => {
  return (
    <div className="container mx-auto pt-4 sm:pt-6">
      <div className="imgBox p-2 bg-[gray]/20 rounded-3xl">
        <img
          className="rounded-3xl border-2 border-white"
          src={imgSrc}
          alt="img1"
        />
      </div>
    </div>
  );
};

export default Imgs;
