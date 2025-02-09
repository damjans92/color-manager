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

        {/* Dropdown for Color Groups */}
        {/* <select
          value={colorGroup}
          onChange={(e) => setColorGroup(e.target.value)}
          className="border-2 border-gray-300 rounded px-4 py-2"
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
        </select> */}
      </div>

      {/* Form for Adding Color */}

      <ColorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ColorAddNew;
