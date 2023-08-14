import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
    const username = useLogin();
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const [totalCart, setTotalCart] = useState(0);
    const { cart } = useSelector((state) => state.cart);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);

        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("cart");

        // return <Navigate to="/login" replace={true} />;
        window.location.href = "/login";
    };

    return (
        <div className="flex justify-end h-20 bg-primary text-white items-center px-5 capitalize">
            {username ?? ""}
            <Button classname="ml-5 bg-black" onClick={handleLogout}>
                Logout
            </Button>
            <Button
                classname="bg-black text-white rounded px-10 mx-5 "
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                {isDarkMode ? "Light" : "Dark"}
            </Button>

            <div className="flex bg-gray-800 p-2 rounded-xs ml-5">
                {totalCart}
            </div>
        </div>
    );
};

export default Navbar;
