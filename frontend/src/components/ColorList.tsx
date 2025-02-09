import { useEffect, useState } from "react";
import ColorItem from "./ColorItem";
import ColorModal from "./ColorModal";
import { Color } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchColors, deleteColor } from "../redux/slices/colorSlice";

const ColorList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { colors, loading, error } = useSelector(
    (state: RootState) => state.colors
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);

  //   const fetchColors = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/colors");
  //       const data = await response.json();
  //       setColors(data);
  //     } catch (error) {}
  //   };

  //   const deleteColor = async (id: string) => {
  //     try {
  //       await fetch(`http://localhost:5000/api/colors/${id}`, {
  //         method: "DELETE",
  //       });
  //       setColors(colors.filter((color) => color.id !== id));
  //       setIsModalOpen(false);
  //       setSelectedColor(null);
  //     } catch (error) {}
  //   };

  useEffect(() => {
    dispatch(fetchColors());
  }, [dispatch]);

  const handleDeleteColor = (id: string) => {
    dispatch(deleteColor(id));
  };

  return (
    <div className="flex flex-wrap justify-start gap-4 p-4 max-w-[1280px]">
      {loading && <p>Loading colors...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading &&
        colors.map((color) => (
          <ColorItem
            key={color.id}
            color={color}
            setIsModalOpen={setIsModalOpen}
            setSelectedColor={setSelectedColor}
            onDelete={handleDeleteColor}
          />
        ))}

      <ColorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedColor={selectedColor}
      />
    </div>
  );
};

export default ColorList;
