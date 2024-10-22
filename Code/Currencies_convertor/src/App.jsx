import React from "react";
import CurrencySelector from "./Components/CurrencySelector";
import CurrencyConverter from "./Components/CurrencyConverter";

const App = () => {
  return (
    <>
      <div className=" bg-slate-800 text-center text-white h-screen  2xl:flex 2xl:flex-col 2xl:gap-44 xl:flex xl:flex-col xl:gap-28">
        <div className=" font-serif pt-12 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl text-center">
          Currencies Convertor
        </div>
        <div className="2xl:flex 2xl:flex-col 2xl:gap-8 xl:flex xl:flex-col xl:gap-8 lg:flex lg:flex-col lg:gap-8 md:flex md:flex-col md:gap-8 sm:flex sm:flex-col sm:gap-8 flex flex-col gap-8">
          <CurrencySelector />
          <CurrencyConverter />
        </div>
      </div>
    </>
  );
};

export default App;
