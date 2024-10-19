import React, { createContext, useState, useEffect } from 'react';

const API_URL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_zMpqvDwiLVfraaI8mLEhnuq2EvisS49fBAsBFdUU`;

const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetch exchange rates from the API
  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        const exchangeRates = response.data.rates;
        setRates(exchangeRates);
        calculateConversion(exchangeRates);
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
      });
  }, [baseCurrency, targetCurrency, amount]);

  // Function to calculate the converted amount
  const calculateConversion = (rates) => {
    if (rates[targetCurrency]) {
      setConvertedAmount(amount * rates[targetCurrency]);
    }
  };

  return (
    <CurrencyContext.Provider value={{
      rates,
      baseCurrency,
      setBaseCurrency,
      targetCurrency,
      setTargetCurrency,
      amount,
      setAmount,
      convertedAmount,
      calculateConversion
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;