import { Fragment, useContext, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
    // useEffect UNTUK memanimulasi Component
    const [products, setProducts] = useState([]);
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const username = useLogin();

    // GET API AXIOS
    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);

    // // componentDidMount , params ke 2 [] itu depedencylist
    // useEffect(() => {
    //     setCart(JSON.parse(localStorage.getItem("cart")) || []);
    // }, []);

    return (
        <Fragment>
            <Navbar />
            <div className={`${isDarkMode && "bg-slate-900"}`}>
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
                                            <CardProduct.Body
                                                title={product.title}
                                            >
                                                {product.description}
                                            </CardProduct.Body>
                                            <CardProduct.Footer
                                                price={product.price}
                                                id={product.id}
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
            </div>
            {/* <div className="flex justify-center items-center mt-5">
                <Counter />
            </div> */}
        </Fragment>
    );
};

export default ProductsPage;
