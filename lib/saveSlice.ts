import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./apiSlice";

export interface SavedItem {
  product: Product;
  savedAt: string;
}

interface SaveState {
  items: SavedItem[];
}

const initialState: SaveState = {
  items: [],
};

const saveSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    addToSave: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push({
          product: action.payload,
          savedAt: new Date().toISOString(),
        });
      }
    },
    removeFromSave: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
    },
    clearSave: (state) => {
      state.items = [];
    },
  },
});

export const { addToSave, removeFromSave, clearSave } = saveSlice.actions;
export default saveSlice.reducer;
