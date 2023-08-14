import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },
    },
});

const loginSlice = createSlice({
    name: "login",
    initialState: { status: false },
    reducers: {
        login(state, action) {
            state.status = action.payload.status;
        },
    },
});

const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        cart: cartSlice.reducer,
    },
});

console.log("ON CREATE STORE TOOLKIT : ", store.getState());

store.subscribe(() => {
    console.log("STORE CHANGE TOOLKIT : ", store.getState());
});

// const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 5 } };
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 5 }));

store.dispatch(loginSlice.actions.login({ status: true }));
