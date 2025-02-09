import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { Color } from "../types";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { addColor, updateColor } from "../redux/thunks/colorThunks";

type ColorModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedColor?: Color | null;
};

const ColorModal = ({ isOpen, onClose, selectedColor }: ColorModalProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.colors);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    watch,
  } = useForm<Color>();

  const hexCodeValue = watch("hexCode", selectedColor?.hexCode || "#000000");

  useEffect(() => {
    reset({
      colorName: selectedColor?.colorName || "",
      hexCode: selectedColor?.hexCode || "",
    });
  }, [selectedColor, reset]);

  const onSubmit: SubmitHandler<Color> = async (data) => {
    const { colorName, hexCode } = data;
    if (selectedColor) {
      dispatch(updateColor({ id: selectedColor.id, colorName, hexCode }));
      onClose();
    } else {
      dispatch(addColor({ id: uuidv4(), colorName, hexCode }));
      onClose();
    }
    reset({ colorName: "", hexCode: "" });
  };

  const handleCloseModal = () => {
    onClose();
    reset();
  };

  const inputStyle =
    "w-full border border-blue-500  rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-700 transition-all";

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-20 bg-blue-900/50 backdrop-blur-md flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-2xl w-96 max-w-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1, transition: { duration: 0.3 } }}
        exit={{ scale: 0.8, transition: { duration: 0.3 } }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl text-gray-600 mb-4 text-center">
            {selectedColor ? "Edit Color" : "Add New Color"}
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
                placeholder="Color Name"
                className={inputStyle}
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
                placeholder="Color Hex"
                className={inputStyle}
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
                value={hexCodeValue}
                onChange={(e) => setValue("hexCode", e.target.value.trim())}
                className="w-full h-12 border-2 rounded-full shadow-sm cursor-pointer"
                aria-label="Click to choose color"
              />
              <p className="text-center text-sm text-gray-500 mt-1">
                Click here to choose color
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300"
              >
                Save Color
              </button>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-red-600 text-sm font-semibold transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ColorModal;
