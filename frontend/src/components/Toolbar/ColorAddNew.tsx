import { useState } from "react";
import ColorModal from "../ColorModal";

const ColorAddNew = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pb-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative inline-flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-full cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
        >
          <span className="text-2xl mr-2">+</span> Add Color
          <span className="absolute inset-0 bg-white opacity-20 rounded-full transition-all duration-300 scale-0 group-hover:scale-100"></span>
        </button>
      </div>

      <ColorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed z-20 bottom-8 right-8 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-blue-700 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-xl flex items-center justify-center text-2xl  transform hover:scale-105 transition-all"
      >
        <div className="text-5xl mb-2">+</div>
      </button>
    </div>
  );
};

export default ColorAddNew;
