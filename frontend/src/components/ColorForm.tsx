import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Color } from "../types";
import { SubmitHandler, useForm } from "react-hook-form";

const ColorForm = () => {
  const [hex, setHex] = useState("#000000");
  const [name, setName] = useState("");
  const [showColorForm, setShowColorForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Color>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHex(e.target.value);
  };

  const onSubmit: SubmitHandler<Color> = (data) => {
    console.log(data);
    const color = {
      id: uuidv4(),
      name,
      hex,
    };
    console.log(color);
    setName("");
    setHex("#000000");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 mb-4 ">
        <div className="flex gap-4 items-center">
          <div>
            <input
              type="color"
              value={hex}
              onChange={handleChange}
              className="w-[100px] h-[100px] rounded-xl "
            />
          </div>

          <div className="flex flex-col space-y-4">
            <div>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Color name is required",
                })}
                value={name}
                onChange={(e) => setName(e.target.value.trim())}
                placeholder="Color Name"
                className="border border-gray-300 rounded px-3 py-2 shadow-sm"
              />
              <br />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                id="hex"
                {...register("hex", { required: "Hex code is required" })}
                value={hex}
                onChange={(e) => setHex(e.target.value.trim())}
                placeholder="Color Hex"
                className="border border-gray-300 rounded px-3 py-2 shadow-sm"
              />
              <br />
              {errors.hex && (
                <p className="text-red-500">{errors.hex.message}</p>
              )}
            </div>
          </div>
        </div>
        <button className="text-white uppercase font-audiowide bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:scale-105 rounded-lg text-lg px-5 py-2.5 text-center transition duration-200">
          Add
          <br />+
        </button>
      </form>
    </div>
  );
};

export default ColorForm;
