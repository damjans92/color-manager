import { MdModeEdit } from "react-icons/md";
import { MdClose } from "react-icons/md";

type ColorItemProps = {
  colorHex: string;
};
const ColorItem = ({ colorHex }: ColorItemProps) => {
  return (
    <div
      style={{ backgroundColor: colorHex }}
      className={`group relative w-32 h-32 rounded-xl shadow-md hover:shadow-xl hover:scale-110 transition duration-300 cursor-pointer`}
    >
      <div className="absolute flex items-center justify-center w-6 h-6 bg-red-700 rounded-full text-white right-1 top-1 opacity-0 group-hover:opacity-100 transition duration-300 shadow-sm shadow-gray-700">
        <MdClose fontSize={20} />
      </div>
      <div className="absolute flex items-center justify-center w-6 h-6 bg-green-700 rounded-full text-white right-1 bottom-1 opacity-0 group-hover:opacity-100 transition duration-300 shadow-sm shadow-gray-700">
        <MdModeEdit />
      </div>
    </div>
  );
};

export default ColorItem;
