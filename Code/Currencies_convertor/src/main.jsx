import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CurrencyProvider } from "./Components/CurrencyContext.jsx";
import CurrencyConverter from "./Components/CurrencyConverter.jsx";
import CurrencySelector from "./Components/CurrencySelector.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </StrictMode>
);
