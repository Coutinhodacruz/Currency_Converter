import React from "react";
import { createContext, useState } from "react";
export const CurrencyContext = createContext();

const CurrencyProvider = ({children}) => {
    const [fromCurrency, setFromCurrency] = useState("USD - United State");
    const [toCurrency, setToCurrency] = useState("EUR - Portugal");
    const [fisrtAmount, setFirstAmount] = useState(0);

    const value ={
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        fisrtAmount,
        setFirstAmount
    };
    return(
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    )
}
export default CurrencyProvider