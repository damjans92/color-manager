import { MdModeEdit } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { Color } from "../types";

type ColorItemProps = {
  color: Color;
  setIsModalOpen: (isOpen: boolean) => void;
  setSelectedColor: (color: Color) => void;
  onDelete: (id: string) => void;
};

const ColorItem = ({
  color,
  setIsModalOpen,
  setSelectedColor,
  onDelete,
}: ColorItemProps) => {
  return (
    <div
      style={{ backgroundColor: color.hexCode }}
      className={`group relative z-10 w-24 h-24 sm:w-30 sm:h-30  rounded-xl shadow-md hover:shadow-xl hover:shadow-gray-300 hover:scale-110 transition duration-300 cursor-pointer`}
    >
      {/* Delete Button */}
      <div
        onClick={() => onDelete(color.id)}
        className="absolute flex items-center justify-center w-6 h-6 bg-red-700 rounded-full text-white right-1 top-1 opacity-0 group-hover:opacity-100 transition duration-300 shadow-sm shadow-gray-700"
      >
        <MdClose fontSize={20} />
      </div>

      {/* Edit Button */}
      <div
        onClick={() => {
          setIsModalOpen(true);
          setSelectedColor(color);
        }}
        className="absolute flex items-center justify-center w-6 h-6 bg-green-700 rounded-full text-white right-1 top-8 opacity-0 group-hover:opacity-100 transition duration-300 shadow-sm shadow-gray-700"
      >
        <MdModeEdit />
      </div>

      {/* Name and Hex Code */}
      <div
        className="absolute bottom-0 left-0 w-full rounded-b-xl bg-white/40 text-black text-xs p-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          fontSize: "12px",
          lineHeight: "1.1",
          textAlign: "center",
        }}
      >
        {color.colorName} <br />
        <span className="text-gray-700">{color.hexCode}</span>
      </div>
    </div>
  );
};

export default ColorItem;
