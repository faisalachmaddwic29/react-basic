import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
console.log("ON CREATE STORE : ", store.getState());

// subscription atau UI = untuk melihat data baru
store.subscribe(() => {
    console.log("STORE change : ", store.getState());
});

export default store;
