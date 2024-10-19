import React from 'react'
import { useState, useEffect, createContext} from 'react';

const API_URL = `https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD`;

const CurrencyContext = createContext();

const App = ({children}) => {

  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('INR');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

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
    <>
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
      calculateConversion
   }}
   >
    {children}
   </CurrencyContext.Provider>
    </>
  )
}

export default App