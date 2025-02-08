import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { SubmitHandler, useForm } from "react-hook-form";
import { Color } from "../types";

const ColorManager = () => {
  const [showColorForm, setShowColorForm] = useState(false);
  const [colorName, setColorName] = useState("");
  const [hexCode, setHexCode] = useState("");
  const [colorGroup, setColorGroup] = useState("blue");
  const [colors, setColors] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Color>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHexCode(e.target.value);
  };

  const onSubmit: SubmitHandler<Color> = (data) => {
    console.log(data);
    const color = {
      id: uuidv4(),
      colorName,
      hexCode,
    };
    console.log(color);
    setColorName("");
    setHexCode("#000000");
  };

  return (
    <div className="pb-6">
      {/* Add Color Button and Color Group Dropdown */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setShowColorForm(true)}
          className="relative inline-flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-full cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105 focus:outline-none"
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
      {showColorForm && (
        <div className="fixed inset-0 z-20 bg-blue-900/50 backdrop-blur-md flex justify-center items-center">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-96 max-w-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Add a New Color
              </h2>

              <div className="space-y-4">
                {/* Color Name Input */}
                <div>
                  <input
                    type="text"
                    id="name"
                    {...register("colorName", {
                      required: "Color name is required",
                    })}
                    value={colorName}
                    onChange={(e) => setColorName(e.target.value.trim())}
                    placeholder="Color Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.colorName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.colorName.message}
                    </p>
                  )}
                </div>

                {/* Hex Code Input */}
                <div>
                  <input
                    type="text"
                    id="hex"
                    {...register("hexCode", {
                      required: "Hex code is required",
                      pattern: {
                        value: /^#([0-9A-Fa-f]{6})$/,
                        message: "Invalid hex code (must be #RRGGBB format)",
                      },
                    })}
                    value={hexCode}
                    onChange={(e) => setHexCode(e.target.value.trim())}
                    placeholder="Color Hex"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.hexCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.hexCode.message}
                    </p>
                  )}
                </div>

                {/* Color Picker */}
                <div>
                  <input
                    type="color"
                    value={hexCode}
                    onChange={(e) => setHexCode(e.target.value.trim())}
                    className="w-full h-12 border-2 border-gray-300 rounded-md shadow-sm cursor-pointer"
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-6">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                  >
                    Save Color
                  </button>
                  <button
                    onClick={() => setShowColorForm(false)}
                    className="text-gray-500 hover:text-red-600 text-sm font-semibold transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorManager;
