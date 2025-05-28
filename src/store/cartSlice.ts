import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// this state will handle all the app cart state changes

// initially we have 0 items in cart
const initialState = {
  items: {},
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add single product to cart
    addItem: (
      state: any, action: PayloadAction<{ product: Product, quantity?: number }>
    ) => {
      const { product, quantity = 1 } = action.payload;
      const id = product.productId;
      if (state.items[id]) {
        state.items[id].quantity += quantity;
      } else {
        state.items[id] = { product, quantity };
      }
    },
    // increment the count of specific product
    incrementItem: (state: any, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      }
    },
    // decrement the count of specific product
    decrementItem: (state: any, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity -= 1
        if (state.items[id].quantity <= 0) {
          delete state.items[id]
        }
      }
    },
    // remove the speciic item from cart
    removeItem: (state: any, action: PayloadAction<string>) => {
      const id = action.payload
      if (state.items[id]) {
        delete state.items[id]
      }
    },
    // delete everything from cart
    clearCart: (state) => {
      state.items = {};
    }
  }
});

// we could have a separate value inside the iniitlaState for the count. but this is a little better than the latter. because if we would have added count to initial state then we wuld need to update it in every reducer. which is ot good.
export const selectedCartItemsCount = (state: { cart: any }) => Object.values(state.cart.items).reduce((sum, item: any) => sum + item.quantity, 0);

// this will give us an array of the objects like this [{product:{}, quantity: 2,},....]
export const selectedCartItems = (state: { cart: any }) => Object.values(state.cart.items);

export const { addItem, incrementItem, decrementItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;