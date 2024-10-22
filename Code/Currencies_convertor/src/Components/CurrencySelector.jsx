import { useContext } from "react";
import { CurrencyContext } from "./CurrencyContext";

const CurrencySelector = () => {
  const {
    rates,
    baseCurrency,
    setBaseCurrency,
    targetCurrency,
    setTargetCurrency,
  } = useContext(CurrencyContext);

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  return (
    <div className="2xl:flex 2xl:flex-col 2xl:gap-8 xl:flex xl:flex-col xl:gap-8 lg:flex lg:flex-col lg:gap-8 md:flex md:flex-col md:gap-8 sm:flex sm:flex-col sm:gap-8 flex flex-col gap-8">
      <div className="2xl:flex 2xl:flex-row 2xl:gap-4 xl:flex xl:flex-row xl:gap-4 lg:flex lg:flex-row lg:gap-4 md:flex md:flex-row md:gap-4 sm:flex sm:flex-row sm:gap-4 flex flex-row gap-4 place-content-center">
        <h2 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl">
          Select Base Currency
        </h2>
        <select
          value={baseCurrency}
          onChange={handleBaseCurrencyChange}
          className=" bg-slate-700 border-white border-2 rounded-md min-w-28 text-center"
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div className="2xl:flex 2xl:flex-row 2xl:gap-4 xl:flex xl:flex-row xl:gap-4 lg:flex lg:flex-row lg:gap-4 md:flex md:flex-row md:gap-4 sm:flex sm:flex-row sm:gap-4 flex flex-row gap-4 place-content-center">
        <h2 className="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl">
          Select Target Currency
        </h2>
        <select
          value={targetCurrency}
          onChange={handleTargetCurrencyChange}
          className=" bg-slate-700 border-white border-2 rounded-md min-w-28 text-center"
        >
          {Object.keys(rates).map((currency) => (
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
