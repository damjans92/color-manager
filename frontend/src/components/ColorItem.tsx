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
      className={`group relative w-32 h-32 rounded-xl shadow-md hover:shadow-xl hover:scale-110 transition duration-300 cursor-pointer`}
    >
      <div
        onClick={() => onDelete(color.id)}
        className="absolute flex items-center justify-center w-6 h-6 bg-red-700 rounded-full text-white right-1 top-1 opacity-0 group-hover:opacity-100 transition duration-300 shadow-sm shadow-gray-700"
      >
        <MdClose fontSize={20} />
      </div>
      <div
        onClick={() => {
          setIsModalOpen(true);
          setSelectedColor(color);
        }}
        className="absolute flex items-center justify-center w-6 h-6 bg-green-700 rounded-full text-white right-1 bottom-1 opacity-0 group-hover:opacity-100 transition duration-300 shadow-sm shadow-gray-700"
      >
        <MdModeEdit />
      </div>
    </div>
  );
};

export default ColorItem;
