import React, { useContext } from 'react';
import { CurrencyContext } from './CurrencyContext';

const CurrencySelector = () => {
  const { rates, baseCurrency, setBaseCurrency, targetCurrency, setTargetCurrency } = useContext(CurrencyContext);

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  return (
    <div>
      <div>
        <h2>Select Base Currency</h2>
        <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
          {Object.keys(rates).map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2>Select Target Currency</h2>
        <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
          {Object.keys(rates).map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencySelector;
