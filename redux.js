import { legacy_createStore } from "redux";

// reducer
const cartReducer = (state = { cart: [{ id: 1, qty: 1 }] }, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default:
            return state;
    }
};

// store = atau wadah untuk menyimpan redux

const store = legacy_createStore(cartReducer);
console.log("on create store : ", store.getState());
console.table(store.getState());

// subscription atau UI = untuk melihat data baru
store.subscribe(() => {
    console.log("STORE change : ", store.getState());
});

// dispatch ini sama dengan add kalau di flutter bloc
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 5 } };
store.dispatch(action1);

const action2 = { type: "ADD_TO_CART", payload: { id: 10, qty: 5 } };
store.dispatch(action2);
