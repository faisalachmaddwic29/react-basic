import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
    return (
        <AuthLayouts
            subtitle="Welcome, Please enter your details"
            title="Register"
            type="register"
        >
            <FormRegister />
        </AuthLayouts>
    );
};

export default RegisterPage;
