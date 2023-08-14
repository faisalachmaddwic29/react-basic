import { createSlice } from "@reduxjs/toolkit";

// const handleAddToCart = (id) => {
//     const existingItem = cart.find((item) => item.id === id);
//     if (existingItem) {
//         // Jika produk sudah ada, tingkatkan kuantitasnya
//         const updatedCart = cart.map((item) =>
//             item.id === id ? { ...item, qty: item.qty + 1 } : item
//         );
//         setCart(updatedCart);
//     } else {
//         // Jika produk belum ada, tambahkan dengan kuantitas 1
//         const updatedCart = [...cart, { id: id, qty: 1 }];
//         setCart(updatedCart);
//     }
// };
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: JSON.parse(localStorage.getItem("cart")) || [],
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find(
                (item) => item.id == action.payload.id
            );

            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.cart.push(action.payload);
            }
        },
        addTotalPrice: (state, action) => {
            const { products } = action.payload;
            const cart = state.cart;
            if (products.length > 0 && cart.length > 0) {
                const sum = cart.reduce((acc, item) => {
                    const product = products.find(
                        (product) => product.id == item.id
                    );
                    return acc + product.price * item.qty;
                }, 0);
                state.totalPrice = sum;
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        },
    },
});

export const { addToCart, addTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;
