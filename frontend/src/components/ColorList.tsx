import { useEffect, useState } from "react";
import ColorItem from "./ColorItem";
import ColorModal from "./ColorModal";
import { Color } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { deleteColor, fetchColors } from "../redux/thunks/colorThunks";

const ColorList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { colors, loading, error, searchQuery } = useSelector(
    (state: RootState) => state.colors
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);

  const filteredColors = colors
    .filter(
      (colors) =>
        colors.colorName
          .toLowerCase()
          .includes((searchQuery ?? "").toLowerCase()) ||
        colors.hexCode.toLowerCase().includes((searchQuery ?? "").toLowerCase())
    )
    .reverse();

  useEffect(() => {
    dispatch(fetchColors());
  }, [dispatch]);

  const handleDeleteColor = (id: string) => {
    dispatch(deleteColor(id));
  };

  if (error) {
    toast.error(error);
  }

  return (
    <div className="sm:min-w-[500px]  max-h-[500px] w-full overflow-y-scroll mx-auto p-6 border border-gray-300 rounded-lg inset-shadow">
      <div className="flex flex-wrap justify-start gap-4">
        {loading && (
          <div className="flex justify-center w-full">
            <svg
              className="w-32 h-32 text-blue-600 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
        {!loading &&
          filteredColors.map((color) => (
            <motion.div
              key={color.id}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                  },
                },
              }}
            >
              <ColorItem
                color={color}
                setIsModalOpen={setIsModalOpen}
                setSelectedColor={setSelectedColor}
                onDelete={handleDeleteColor}
              />
            </motion.div>
          ))}
        {!loading && filteredColors?.length === 0 && (
          <p className="text-center w-full text-2xl text-gray-600">
            No colors found
          </p>
        )}
        <ColorModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};

export default ColorList;
