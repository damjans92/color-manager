import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { Color } from "../../types";

interface ColorState {
  colors: Color[];
  loading: boolean;
  error: string | null;
}

const initialState: ColorState = {
  colors: [],
  loading: false,
  error: null,
};

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

const colorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all colors
      .addCase(fetchColors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.colors = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchColors.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch colors";
      })

      // Add new color
      .addCase(addColor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addColor.fulfilled, (state, action) => {
        state.colors.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(addColor.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to add color";
      })

      // Update color
      .addCase(updateColor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateColor.fulfilled, (state, action) => {
        console.log("Updating color:", action.payload);
        const index = state.colors.findIndex(
          (color) => color.id === action.payload.id
        );
        if (index !== -1) {
          state.colors[index] = action.payload;
        }
        state.loading = false;
      })
      .addCase(updateColor.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to update color";
      })

      // Delete color
      .addCase(deleteColor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteColor.fulfilled, (state, action) => {
        state.colors = state.colors.filter(
          (color) => color.id !== action.payload
        );
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteColor.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to delete color";
      });
  },
});

export default colorSlice.reducer;
