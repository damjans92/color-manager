import { createAsyncThunk } from "@reduxjs/toolkit";
import { Color } from "../../types";
import { v4 as uuidv4 } from "uuid";

export const fetchColors = createAsyncThunk("colors/fetchColors", async () => {
  try {
    const response = await fetch("http://localhost:5000/api/colors");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error occurred while fetching colors");
  }
});

export const addColor = createAsyncThunk(
  "colors/addColor",
  async (color: Color) => {
    try {
      const response = await fetch(`http://localhost:5000/api/colors`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: uuidv4(),
          colorName: color.colorName,
          hexCode: color.hexCode,
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error occurred while adding a color");
    }
  }
);

export const deleteColor = createAsyncThunk(
  "colors/deleteColor",
  async (id: string) => {
    try {
      await fetch(`http://localhost:5000/api/colors/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      throw new Error("Error occurred while deleting a color");
    }
  }
);

export const updateColor = createAsyncThunk(
  "colors/updateColor",
  async (color: Color) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/colors/${color.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            colorName: color.colorName,
            hexCode: color.hexCode,
          }),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error occurred while updating a color");
    }
  }
);
