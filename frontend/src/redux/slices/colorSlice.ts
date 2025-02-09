import { createSlice } from "@reduxjs/toolkit";

import { Color } from "../../types";
import { toast } from "react-toastify";
import {
  addColor,
  deleteColor,
  fetchColors,
  updateColor,
} from "../thunks/colorThunks";

interface ColorState {
  colors: Color[];
  loading: boolean;
  error: string | null;
  searchQuery: string | null;
}

const initialState: ColorState = {
  colors: [],
  loading: false,
  error: null,
  searchQuery: "",
};

const colorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
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
        toast.error(state.error);
      })

      // Add new color
      .addCase(addColor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addColor.fulfilled, (state, action) => {
        state.colors.push(action.payload);
        state.loading = false;
        toast.success("Color added successfully!");
      })
      .addCase(addColor.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to add color";
        toast.error(state.error);
      })

      // Update color
      .addCase(updateColor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateColor.fulfilled, (state, action) => {
        const index = state.colors.findIndex(
          (color) => color.id === action.payload.id
        );
        if (index !== -1) {
          state.colors[index] = action.payload;
        }
        state.loading = false;
        toast.success("Color updated successfully!");
      })
      .addCase(updateColor.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to update color";
        toast.error(state.error);
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
        toast.success("Color deleted successfully!");
      })
      .addCase(deleteColor.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to delete color";
        toast.error(state.error);
      });
  },
});

export const { setSearchQuery } = colorSlice.actions;
export default colorSlice.reducer;
