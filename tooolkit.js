import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");

// const initialState = {
//     cart: [],
// };

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
        // state.cart = [...state.cart, action.payload];
    });
});

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = action.payload.status;
        // state = true;
    });
});

const store = configureStore({
    // ini 1 reduce
    // reducer: cartReducer

    reducer: {
        login: loginReducer,
        cart: cartReducer,
    },
});

console.log("ON CREATE STORE TOOLKIT : ", store.getState());

store.subscribe(() => {
    console.log("STORE CHANGE TOOLKIT : ", store.getState());
});

// const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 5 } };
store.dispatch(addToCart({ id: 2, qty: 5 }));

store.dispatch(login({ status: true }));
