const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const colorsFilePath = "./colors.json";

const loadColors = () => {
  const colorsData = fs.readFileSync(colorsFilePath);
  return JSON.parse(colorsData);
};
const saveColors = (colors) => {
  fs.writeFileSync(colorsFilePath, JSON.stringify(colors, null, 2));
};

app.get("/api/colors", (req, res) => {
  const colors = loadColors();
  if (!colors || colors.length === 0) {
    return res.status(404).send({ message: "No colors found." });
  }
  res.status(200).send(colors);
});

// Add new color route
app.post("/api/colors", (req, res) => {
  const { id, colorName, hexCode } = req.body;
  if (!id || !colorName || !hexCode) {
    res.status(400).send({ message: "Missing color name or hex code." });
    return;
  }

  const newColor = {
    id,
    colorName,
    hexCode,
  };

  const colors = loadColors();
  colors.push(newColor);
  saveColors(colors);

  res.status(201).send(newColor);
});

// Delete color route
app.delete("/api/colors/:id", (req, res) => {
  const colors = loadColors();
  const updatedColors = colors.filter((color) => color.id !== req.params.id);

  if (colors.length === updatedColors.length) {
    return res.status(404).send({ message: "Color not found." });
  }
  saveColors(updatedColors);

  res.status(200).send({ message: "Color deleted" });
});

// Update color route
app.put("/api/colors/:id", (req, res) => {
  const { colorName, hexCode } = req.body;
  if (!colorName || !hexCode) {
    res.status(400).send({ message: "Missing color name or hex code." });
    return;
  }

  const colors = loadColors();

  let updatedColor = null;
  const updatedColors = colors.map((color) =>
    color.id === req.params.id
      ? (updatedColor = { ...color, colorName, hexCode })
      : color
  );

  saveColors(updatedColors);
  console.log(updatedColor);
  res.status(200).send(updatedColor);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
