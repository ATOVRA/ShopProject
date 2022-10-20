import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { total: 0, basket: [] },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.basket[itemIndex].counter += 1;
      } else {
        console.log(action);
        const AddToCart = { ...action.payload };
        state.basket.push(AddToCart);
      }
      // total: action.payload.price * action.payload.counter,
    },
  },
});

export const { addToCart } = cartSlice.actions;


export default cartSlice.reducer;
