import { createContext, useState, useEffect } from "react";

const API_URL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_zMpqvDwiLVfraaI8mLEhnuq2EvisS49fBAsBFdUU`;

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("INR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetch exchange rates from the API
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const exchangeRates = data.data;
        setRates(exchangeRates);
        calculateConversion(exchangeRates);
      })
      .catch((error) => {
        console.error("Error fetching exchange rates:", error);
      });
  }, [baseCurrency, targetCurrency, amount]);

  // Function to calculate the converted amount
  const calculateConversion = (rates) => {
    if (rates[targetCurrency]) {
      setConvertedAmount(amount * rates[targetCurrency].value);
    }
  };

  return (
    <CurrencyContext.Provider
      value={{
        rates,
        baseCurrency,
        setBaseCurrency,
        targetCurrency,
        setTargetCurrency,
        amount,
        setAmount,
        convertedAmount,
        calculateConversion,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext;
