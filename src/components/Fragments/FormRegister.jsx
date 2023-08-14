import Button from "../Elements/Button";
import InputFrom from "../Elements/Input";

const FormRegister = () => {
    return (
        <form action="">
            <div className="mb-6">
                <InputFrom
                    label="Fullname"
                    name="fullename"
                    type="text"
                    placeholder="Faisal Achmad Dwi C"
                />
            </div>
            <div className="mb-6">
                <InputFrom
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="faisal@gmail.com"
                />
            </div>
            <div className="mb-6">
                <InputFrom
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="***"
                />
            </div>
            <div className="mb-6">
                <InputFrom
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="***"
                />
            </div>
            <Button classname="bg-primary w-full text-white">Register</Button>
        </form>
    );
};

export default FormRegister;
