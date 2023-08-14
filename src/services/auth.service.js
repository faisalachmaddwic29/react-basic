import axios from "axios";
import jwtDecode from "jwt-decode";

export const loginService = async (data, callback) => {
    await axios
        .post("https://fakestoreapi.com/auth/login", data)
        .then((res) => {
            callback(true, res);
        })
        .catch((error) => {
            callback(false, error);
        });
};

export const getUsername = (token) => {
    const decoded = jwtDecode(token);
    return decoded;
};
