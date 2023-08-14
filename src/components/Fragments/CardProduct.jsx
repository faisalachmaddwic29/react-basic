import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
    const { children, id } = props;
    return (
        <div className="w-full md:w-6/12 lg:w-4/12 px-1 py-1">
            <div className="flex flex-col border m-3 border-gray-700 rounded-lg shadow p-4 bg-gray-700">
                {children}
            </div>
        </div>
    );
};

const Header = (props) => {
    const { image, id } = props;
    return (
        <Link to={`/products/` + id}>
            <div className="block max-w-full">
                <img
                    src={image}
                    alt="product"
                    className="rounded-lg pb-5 object-cover h-60 w-full "
                />
            </div>
        </Link>
    );
};

const Body = (props) => {
    const { title, children } = props;
    return (
        <div className="pb-5 h-full">
            <h5 className="text-xl font-semibold text-white tracking-wide text-ellipsis overflow-hidden line-clamp-1">
                {title.substring(0, 20)}
            </h5>
            <p className="text-md text-white mt-4 break-all text-ellipsis overflow-hidden line-clamp-3">
                {children}
            </p>
        </div>
    );
};

const Footer = (props) => {
    const { price, id } = props;
    const dispatch = useDispatch();
    return (
        <div className="flex items-center justify-between pb-5">
            {/* <span className="text-xl font-bold text-white">{price}</span> */}
            <span className="text-xl font-bold text-white">
                ${" "}
                {price.toLocaleString("en-EN", {
                    styles: "currency",
                    currency: "USD",
                })}
            </span>
            <Button onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
                Add To Cart
            </Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
