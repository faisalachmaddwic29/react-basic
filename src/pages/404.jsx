import { Link, useRouteError } from "react-router-dom";
import Button from "../components/Elements/Button";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold">Opps !</h1>
            <p className="my-5 text-xl">
                Sorry, an unexpected error has occured
            </p>
            <p className="text-md mb-5">{error.statusText || error.message}</p>
            <Link className="py-3 px-6 bg-black font-semibold rounded-md text-white" to="/">
                Back To Home
            </Link>
        </div>
    );
};

export default ErrorPage;
