import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    const { type, name, placeholder, value="" } = props;
    const autoComplete = type == "password" ? "autoComplete: true" : "";
    return (
        <input
            type={type}
            name={name}
            id={name}
            ref={ref}
            className="text-sm border rounded w-full py-2 px-3 text-slate-700"
            placeholder={placeholder}
            autoComplete={autoComplete}
            defaultValue={value}
        />
    );
});

export default Input;
