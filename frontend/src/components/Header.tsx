import { HiOutlinePaintBrush } from "react-icons/hi2";
const Header = () => {
  return (
    <div className="pt-10 md:pt-20 pb-10 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-6xl text-red uppercase font-audiowide md:mb-12">
        Color Manager
        <HiOutlinePaintBrush className="inline-block sm:text-6xl ml-3 text-gray-500" />
      </h1>
    </div>
  );
};

export default Header;
