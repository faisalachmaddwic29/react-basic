import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";
const InputFrom = forwardRef((props, ref) => {
    const { label, type, name, placeholder, value } = props;

    return (
        <>
            <Label htmlFor={name}>{label}</Label>
            <Input
                ref={ref}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
            />
        </>
    );
});

export default InputFrom;
