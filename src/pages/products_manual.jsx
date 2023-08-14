import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import TableCart from "../components/Fragments/TableCart";
// import Counter from "../components/Fragments/Counter";
// import Counter from "../components/Fragments/Counter";

// const products = [
//     {
//         id: 1,
//         name: "Macbook Pro",
//         price: 1000000,
//         image: "https://source.unsplash.com/random/400x400/?user",
//         desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Quasi, at. Maxime tempora facere natus illo ipsum harum
//         distinctio nam aliquam quae excepturi nemo, officia impedit
//         beatae. Ab labore eveniet aliquam.`,
//     },

//     {
//         id: 2,
//         name: "Keyboard",
//         price: 500000,
//         image: "https://source.unsplash.com/random/400x400/?keyboard",
//         desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Quasi, at.`,
//     },

//     {
//         id: 3,
//         name: "Food",
//         price: 500000,
//         image: "https://source.unsplash.com/random/400x400/?food",
//         desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Quasi, at. asdo ajoidj sijdaj oidjasoijd ajsiojd ajsoidjais jojsaoid jasidj
//         `,
//     },
// ];

// let email = "";
// const user = localStorage.getItem("user");
// if (user !== null) {
//     const data = JSON.parse(user);
//     email = data.email;
// }
const ProductsPage = () => {
    // useEffect UNTUK memanimulasi Component
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const username = useLogin();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("cart");

        // return <Navigate to="/login" replace={true} />;
        window.location.href = "/login";
    };

    // CONSTRUCTOR
    // const [cart, setCart] = useState([
    //     {
    //         id: 1,
    //         name: "Keyboard",
    //         qty: 1,
    //     },
    // ]);

    // GET API AXIOS
    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);

    // componentDidMount , params ke 2 [] itu depedencylist
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    // componentDidUpdate
    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                // console.log(item, acc);
                const product = products.find(
                    (product) => product.id === item.id
                );
                // console.log(product);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products]);

    const handleAddToCart = (id) => {
        const existingItem = cart.find((item) => item.id === id);
        if (existingItem) {
            // Jika produk sudah ada, tingkatkan kuantitasnya
            const updatedCart = cart.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            );
            setCart(updatedCart);
        } else {
            // Jika produk belum ada, tambahkan dengan kuantitas 1
            const updatedCart = [...cart, { id: id, qty: 1 }];
            setCart(updatedCart);
        }
    };

    // useRef
    const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

    const handleAddToCartRef = (id) => {
        cartRef.current = [...cartRef.current, { id, qty: 1 }];
        localStorage.setItem("cart", JSON.stringify(cartRef.current));
    };

    const totalPriceRef = useRef(null);
    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-primary text-white items-center px-5 capitalize">
                {username ?? ""}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="container mx-auto">
                <div className="flex -mx-4 justify-center py-5 gap-2 ">
                    <div className="w-9/12 px-4">
                        <div className="flex flex-wrap -mx-4">
                            {products.length > 0 &&
                                products.map((product) => (
                                    <CardProduct
                                        key={product.id}
                                        id={product.id}
                                    >
                                        <CardProduct.Header
                                            image={product.image}
                                            id={product.id}
                                        ></CardProduct.Header>
                                        <CardProduct.Body title={product.title}>
                                            {product.description}
                                        </CardProduct.Body>
                                        <CardProduct.Footer
                                            price={product.price}
                                            id={product.id}
                                            handleAddToCart={handleAddToCart}
                                        ></CardProduct.Footer>
                                        {/* <CardProduct.Body>test</CardProduct.Body> */}
                                    </CardProduct>
                                ))}
                        </div>
                    </div>
                    <div className="w-3/12 px-4">
                        <h1 className="text-3xl font-bold text-blue-600">
                            Cart
                        </h1>
                        {/* <ul>
                        {cart.map((item) => (
                            <p key={item.id}>{item.id}</p>
                        ))}
                    </ul> */}
                        <TableCart products={products} />
                    </div>
                </div>
            </div>
            {/* <div className="flex justify-center items-center mt-5">
                <Counter />
            </div> */}
        </Fragment>
    );
};

export default ProductsPage;
