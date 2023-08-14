import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
    const { children, subtitle, title, type } = props;
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

    console.log("ini dark mode : ", isDarkMode);

    return (
        <div
            className={`flex justify-center min-h-screen items-center ${
                isDarkMode && "bg-slate-900"
            }`}
        >
            <div className="w-full max-w-xs">
                <button
                    className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                >
                    {isDarkMode ? "Light" : "Dark"}
                </button>
                <h1 className="text-3xl font-bold mb-2 text-primary">
                    {title}
                </h1>
                <p className="font-medium text-slate-500 mb-8">{subtitle}</p>
                {children}

                {navigation(type)}
                {/* <p className="text-center text-sm mt-5 text-slate-500">
                    {type === "login"
                        ? "Don't Have an account? "
                        : "Already have an Account? "}

                    {type === "login" && (
                        <Link to="/register" className="text-primary font-bold">
                            Register
                        </Link>
                    )}

                    {type === "register" && (
                        <Link to="/login" className="text-primary font-bold">
                            Login
                        </Link>
                    )}
                </p> */}
            </div>
        </div>
    );
};

const navigation = (type) => {
    if (type === "login") {
        return (
            <p className="text-center text-sm mt-5 text-slate-500">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary font-bold">
                    Register
                </Link>
            </p>
        );
    } else {
        return (
            <p className="text-center text-sm mt-5 text-slate-500">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-bold">
                    Login
                </Link>
            </p>
        );
    }
};

export default AuthLayouts;
