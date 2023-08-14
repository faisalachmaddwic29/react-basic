import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App-tidak dipakai karena sudah react router dom.jsx";
import "./index.css";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import ProductsPage from "./pages/products.jsx";
import { Test } from "./pages/test.jsx";
import ProfilePage from "./pages/profile.jsx";
import DetailProductPage from "./pages/detailProduct.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Navbar from "./components/Layouts/Navbar.jsx";
import DarkModeContextProvider from "./context/DarkMode.jsx";
import { TotalPriceProvider } from "./context/TotalPriceContext.jsx";

// const ProtectRoute = ({ children }) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//         return <Navigate to="/login" />;
//     }

//     return children;
// };

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello World</div>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/test",
        element: <Test />,
    },
    {
        path: "/products",
        element: <ProductsPage />,
    },
    {
        path: "/profile",
        element: <ProfilePage />,
    },
    {
        path: "/products/:id",
        element: <DetailProductPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    //
    <React.StrictMode>
        <Provider store={store}>
            <DarkModeContextProvider>
                <TotalPriceProvider>
                    <RouterProvider router={router}></RouterProvider>
                </TotalPriceProvider>
            </DarkModeContextProvider>
        </Provider>
    </React.StrictMode>
);
