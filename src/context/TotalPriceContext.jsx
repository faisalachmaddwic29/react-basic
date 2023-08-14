import { createContext, useContext, useReducer } from "react";

// untuk menyimpan state
const TotalPriceContext = createContext(null);

// untuk menyimpan action
const TotalPriceDispactContext = createContext(null);

const totalPriceReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE": {
            return {
                total: action.payload.total,
            };
        }
        default: {
            throw Error("Unknown Action : " + action.type);
        }
    }
};

export function TotalPriceProvider({ children }) {
    const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });

    return (
        <TotalPriceContext.Provider value={totalPrice}>
            <TotalPriceDispactContext.Provider value={dispatch}>
                {children}
            </TotalPriceDispactContext.Provider>
        </TotalPriceContext.Provider>
    );
}

export function useTotalPrice() {
    return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
    return useContext(TotalPriceDispactContext);
}
