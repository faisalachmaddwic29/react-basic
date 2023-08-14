const Button = (props) => {
    const {
        classname = "bg-primary hover:bg-purple-700 text-white",
        children = "No Title",
        onClick = () => {},
        type = "button",
        isDisabled = false,
    } = props;

    return (
        <button
            className={`h-10 shadow-xs cursor-pointer px-6 font-semibold rounded-md ${classname} animation duration-300`}
            type={type}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
};

export default Button;
