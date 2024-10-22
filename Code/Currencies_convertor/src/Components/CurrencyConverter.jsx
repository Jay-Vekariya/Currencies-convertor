import { useContext } from "react";
import { CurrencyContext } from "./CurrencyContext";

const CurrencyConverter = () => {
  const { amount, setAmount, convertedAmount } = useContext(CurrencyContext);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="2xl:flex 2xl:flex-col 2xl:gap-8 xl:flex xl:flex-col xl:gap-8 lg:flex lg:flex-col lg:gap-8 md:flex md:flex-col md:gap-8 sm:flex sm:flex-col sm:gap-8 flex flex-col gap-8">
      <div className="2xl:flex 2xl:flex-row 2xl:gap-4 xl:flex xl:flex-row xl:gap-4 lg:flex lg:flex-row lg:gap-4 md:flex md:flex-row md:gap-4 sm:flex sm:flex-row sm:gap-4 flex flex-row gap-4 place-content-center">
        <h2 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl">
          Amount
        </h2>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          min="1"
          className="bg-slate-700 border-white border-2 rounded-md min-w-20 text-center"
        />
      </div>

      <div>
        <h3 className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-2xl">
          Converted Amount: {convertedAmount.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default CurrencyConverter;
