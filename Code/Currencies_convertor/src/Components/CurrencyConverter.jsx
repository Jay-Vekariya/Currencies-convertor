
import React, { useContext } from 'react';
import { CurrencyContext } from './CurrencyContext';

const CurrencyConverter = () => {
  const { amount, setAmount, convertedAmount } = useContext(CurrencyContext);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div>
      <div>
        <h2>Amount</h2>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          min="1"
        />
      </div>

      <div>
        <h3>Converted Amount: {convertedAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CurrencyConverter;
