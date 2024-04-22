import React, { useRef } from "react";
import { AiOutlineCloseCircle, AiOutlineUpload } from "react-icons/ai";

function CanvasEdit({ onUpdateCanvas, onImageUpload }) {
  const fileInputRef = useRef(null);

  const handleAdContentChange = (e) => {
    onUpdateCanvas({ adContent: e.target.value });
  };

  const handleCtaTextChange = (e) => {
    onUpdateCanvas({ ctaText: e.target.value });
  };

  const handleBgColorChange = (e) => {
    onUpdateCanvas({ bgColor: e.target.value });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target.result;
        console.log(imageData)
        onImageUpload(file, imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSpanClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-1/2 h-screen bg-gray-100 p-8">
      <AiOutlineCloseCircle
        size={24}
        className="absolute top-4 right-4 cursor-pointer"
      />
      <div className="flex flex-col justify-center items-center my-8">
        <h1 className="text-2xl font-bold">Ad customization</h1>
        <p className="text-gray-600">
          Customize your ad and get the templates accordingly
        </p>
      </div>
      <div className="flex items-center mt-4">
        <AiOutlineUpload size={24} className="mr-2" />
        <p className="text-sm text-gray-700">
          Change the ad creative image{" "}
          <span
            onClick={handleSpanClick}
            className="cursor-pointer hover:underline text-blue-500"
          >
            Select file
          </span>
        </p>
        <input
          id="imgInput"
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="ml-2 hidden"
          onChange={handleFileInputChange} 
        />
      </div>
      <div className="my-8 flex items-center">
        <hr className="flex-grow border-t border-gray-300 mr-4" />
        <p className="text-lg font-semibold">Edit contents</p>
        <hr className="flex-grow border-t border-gray-300 ml-4" />
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Ad Content"
          onChange={handleAdContentChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-6 focus:outline-none focus:border-blue-500"
        />
        <br />
        <input
          type="text"
          placeholder="CTA"
          onChange={handleCtaTextChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex items-center">
        <p className="text-gray-400 my-6 mr-6">Choose your color</p>
        <input
          placeholder="Choose your color"
          type="color"
          onChange={handleBgColorChange}
          className={`w-8 h-8 rounded-full`}
        />
      </div>
    </div>
  );
}

export default CanvasEdit;
