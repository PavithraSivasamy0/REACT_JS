import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // big reducer containing small reducers like cart
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;

/* install dependencies
build a Store
connect the store with the app
build a slice
add the slice to the store (from line: 5)
dispatch a action
call the reducer function
use selector to update 
 */
