import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTotalPrice } from "../../redux/slices/cartSlice";
import { DarkMode } from "../../context/DarkMode";
import {
    useTotalPrice,
    useTotalPriceDispatch,
} from "../../context/TotalPriceContext";

const TableCart = (props) => {
    const { products } = props;
    const { cart, totalPrice } = useSelector((state) => state.cart);
    const { isDarkMode, setDarkMode } = useContext(DarkMode);
    const dispatch = useDispatch();
    const dispatchContext = useTotalPriceDispatch();
    const { total } = useTotalPrice();

    // const [totalPrice, setTotalPrice] = useState(0);

    // componentDidUpdate
    useEffect(() => {
        // dispatch(addTotalPrice({ products: products }));

        const sum = cart.reduce((acc, item) => {
            if (products.length > 0) {
                const product = products.find((data) => data.id == item.id);
                return acc + product.price * item.qty;
            } else {
                return 0;
            }
            // console.log(product);
        }, 0);
        dispatchContext({
            type: "UPDATE",
            payload: {
                total: sum,
            },
        });
    }, [cart, products]);

    const totalPriceRef = useRef(null);
    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);

    return (
        <table
            className={`table-auto text-left border-collapse border-spacing-x-5 w-full border mt-4 ${
                isDarkMode && "text-white"
            }`}
        >
            <thead>
                <tr>
                    <th
                        className={`border px-1 py-1 text-center font-bold ${
                            isDarkMode ? "border-gray-50" : "border-gray-700"
                        }`}
                    >
                        Product
                    </th>
                    <th
                        className={`border px-1 py-1 text-center font-bold ${
                            isDarkMode ? "border-gray-50" : "border-gray-700"
                        }`}
                    >
                        Price
                    </th>
                    <th
                        className={`border px-1 py-1 text-center font-bold ${
                            isDarkMode ? "border-gray-50" : "border-gray-700"
                        }`}
                    >
                        Quantity
                    </th>
                    <th
                        className={`border px-1 py-1 text-center font-bold ${
                            isDarkMode ? "border-gray-50" : "border-gray-700"
                        }`}
                    >
                        Total
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 &&
                    cart.map((item) => {
                        const product = products.find(
                            (product) => product.id === item.id
                        );

                        return (
                            <tr key={item.id}>
                                <td
                                    className={`border px-1 py-1 ${
                                        isDarkMode
                                            ? "border-gray-50"
                                            : "border-gray-700"
                                    }`}
                                >
                                    {product.title.substring(0, 10)}
                                </td>
                                <td
                                    className={`border px-1 py-1 text-right ${
                                        isDarkMode
                                            ? "border-gray-50"
                                            : "border-gray-700"
                                    }`}
                                >
                                    ${" "}
                                    {product.price.toLocaleString("en-EN", {
                                        styles: "currency",
                                        currency: "USD",
                                    })}
                                </td>
                                <td
                                    className={`border px-1 py-1 text-center ${
                                        isDarkMode
                                            ? "border-gray-50"
                                            : "border-gray-700"
                                    } `}
                                >
                                    {item.qty}
                                </td>
                                <td
                                    className={`border px-1 py-1 text-right ${
                                        isDarkMode
                                            ? "border-gray-50"
                                            : "border-gray-700"
                                    }`}
                                >
                                    $
                                    {(item.qty * product.price).toLocaleString(
                                        "en-EN",
                                        {
                                            styles: "currency",
                                            currency: "USD",
                                        }
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                <tr ref={totalPriceRef}>
                    <td
                        className={`border px-1 py-1 text-center ${
                            isDarkMode ? "border-gray-50" : "border-gray-700"
                        }`}
                        colSpan={3}
                    >
                        <b>Total Price</b>
                    </td>
                    <td
                        className={`border px-1 py-1 text-center ${
                            isDarkMode ? "border-gray-50" : "border-gray-700"
                        }`}
                    >
                        <b>
                            ${" "}
                            {total.toLocaleString("en-EN", {
                                styles: "currency",
                                currency: "USD",
                            })}
                        </b>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableCart;
