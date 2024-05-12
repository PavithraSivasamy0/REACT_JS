import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      //mutating the state
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items.pop();
    },
    emptyCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
