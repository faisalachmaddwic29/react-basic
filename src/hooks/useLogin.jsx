import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";
import { Navigate } from "react-router-dom";

// username: "johnd",
// password: "m38rmF$",
export const useLogin = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token) {
            window.location.href = "/login";
        }

        const username = getUsername(token).user;
        setUsername(username);
    }, []);

    return username;
};
