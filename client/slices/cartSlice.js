import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect';

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.items]
      let itemIndex = state.items.findIndex((item)=>item.id==action.payload.id)
      if(itemIndex>=0) {
        newCart.splice(itemIndex,1)
      } else {
        console.log("Cannot remove item");        
      }
      state.items = newCart
    },
    emptyCart: (state, action) => {
      state.items = initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItem = state => state.cart.items;

// export const selectCartItemsByID = (state, id) => state.cart.items.filter(item=>item.id==id);
export const selectCartItemsByID = createSelector(
  [selectCartItem, (_, id) => id],
  (items, id) => items.filter(item => item.id === id)
);

export const selectCartTotal = state => state.cart.items.reduce((total, item)=>total=total+item.price, 0);

export default cartSlice.reducer