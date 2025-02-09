import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/slices/colorSlice";
import { IoMdSearch } from "react-icons/io";

const ColorFilter = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };
  return (
    <div className="relative">
      <input
        type="text"
        onChange={handleSearchChange}
        placeholder="Search by Name or Hex"
        className="border-2 border-blue-500 rounded-full px-4 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-700 transition-all"
      />
      <div className="absolute top-4.5 -right-2 flex items-center pr-4 text-gray-500">
        <IoMdSearch fontSize={26} className="text-blue-400" />
      </div>
    </div>
  );
};

export default ColorFilter;
