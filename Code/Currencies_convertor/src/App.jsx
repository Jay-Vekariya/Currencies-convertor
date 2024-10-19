// src/App.js
import React from 'react';
import { CurrencyProvider } from './CurrencyContext';
import CurrencySelector from './CurrencySelector';
import CurrencyConverter from './CurrencyConverter';

function App() {
  return (
    <CurrencyProvider>
      <div className="App">
        <h1>Currency Converter</h1>
        <CurrencySelector />
        <CurrencyConverter />
      </div>
    </CurrencyProvider>
  );
}

export default App;
