import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
    return (
        <AuthLayouts
            subtitle="Welcome, Please enter your details"
            title="Login"
            type="login"
        >
            <FormLogin />
            
        </AuthLayouts>
    );
};

export default LoginPage;
