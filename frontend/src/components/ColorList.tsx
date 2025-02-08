import ColorItem from "./ColorItem";

const ColorList = () => {
  return (
    <div className="flex flex-wrap justify-start gap-4 p-4 max-w-[1280px]">
      <ColorItem colorHex="#ff0000" />
      <ColorItem colorHex="#00ff00" />
      <ColorItem colorHex="#0000ff" />
      <ColorItem colorHex="#ff0000" />
      <ColorItem colorHex="#00ff00" />
      <ColorItem colorHex="#0000ff" />
      <ColorItem colorHex="#ff0000" />
      <ColorItem colorHex="#00ff00" />
      <ColorItem colorHex="#0000ff" />
    </div>
  );
};

export default ColorList;
