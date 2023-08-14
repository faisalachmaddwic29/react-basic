import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputFrom from "../Elements/Input";
import { loginService } from "../../services/auth.service";
import { Navigate } from "react-router-dom";

const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (event) => {
        setLoginFailed("");
        setLoading(true);
        event.preventDefault();

        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };
        // localStorage.setItem("user", JSON.stringify(data));

        // window.location.href = "/products ";
        await loginService(data, (status, res) => {
            if (status) {
                setLoginFailed("");
                localStorage.setItem("token", res.data.token);
                // return <Navigate to="/products" />
                window.location.href = "/products ";
            } else {
                setLoginFailed(res.response.data);

                setTimeout(() => {
                    setLoginFailed("");
                }, 5000);
            }
        });
        setLoading(false);
    };

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleLogin}>
            <p
                className={`text-red-600 mb-5 bg-red-200 text-center capitalize py-3 px-2 rounded-md transition duration-300 ${
                    loginFailed ? "opacity-100" : "opacity-0 "
                }`}
            >
                {loginFailed}
            </p>
            <div className="mb-6">
                <InputFrom
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="faisalachmaddwic"
                    ref={usernameRef}
                    value="johnd"
                />
            </div>
            <div className="mb-6">
                <InputFrom
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="***"
                    ref={passwordRef}
                    value="m38rmF$"
                />
            </div>
            <Button
                classname={`${
                    loading
                        ? "bg-gray-500 text-black cursor-default"
                        : "bg-primary text-white"
                } w-full`}
                isDisabled={loading}
                type="submit"
            >
                {loading ? "Loading . . ." : "Login"}
            </Button>
        </form>
    );
};

export default FormLogin;
