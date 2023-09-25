import {createSlice} from '@reduxjs/toolkit';
import Snackbar from 'react-native-snackbar';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingItem = state.products.find(
        item => item.id === action.payload.id,
      );
      if (!existingItem) {
        state.products.push(action.payload);
      } else {
        // If product is added then update product quantity
        existingItem.quantity += action.payload.quantity;
        Snackbar.show({
          text: `added 1 more ${action.payload.title} to cart `,
          backgroundColor: 'green'
      });
      }

      state.total =
        state.total * 1 + action.payload.price * action.payload.quantity;
    },
    addProductDetail: (state, action) => {
      const existingItem = state.products.find(
        item => item.id === action.payload.id,
      );
      if (!existingItem) {
        state.products.push(action.payload);
        Snackbar.show({
          text: `added ${action.payload.title} to cart `,
          backgroundColor: 'green'
      });
      }

      state.total =
        state.total * 1 + action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const existingItem = state.products.find(
        item => item.id === action.payload.id,
      );

      const itemsToRemove = state.products.filter(
        item => item.id !== action.payload.id,
      );
      state.products = itemsToRemove;

      state.total =
        state.total * 1 - existingItem.price * existingItem.quantity;
    },
    increaseCart: (state, action) => {
      console.log(action.payload)
      const increaseItem = state.products.find(
        item => item.id === action.payload.id,
      );

      if (increaseItem.quantity >= 1) {
        increaseItem.quantity += 1;

        state.total = state.total * 1 + action.payload.price;
      }
    },
    decreaseCart: (state, action) => {
      const increaseItem = state.products.find(
        item => item.id === action.payload.id,
      );

      if (increaseItem.quantity > 1) {
        increaseItem.quantity -= 1;

        state.total = state.total * 1 - action.payload.price;
      }
    },
    increaseQuantity: (state, action) => {
      const increaseItem = state.products.find(
        item => item.id === action.payload.data.id,
      );

      if (increaseItem.quantity >= 1) {
        increaseItem.quantity += action.payload.count
        Snackbar.show({
          text: `${action.payload.count} more ${action.payload.data.title} added to cart`,
          backgroundColor: 'green'
      });

        state.total = state.total * action.payload.count + action.payload.price;
      }
    },
  },
});

export const {addProduct, removeProduct, increaseCart, decreaseCart, increaseQuantity, addProductDetail} =
  cartSlice.actions;
export default cartSlice.reducer;
