import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = '',
  amountDisable = false,
  currencyDisable = false, // Changed default to allow editing currencies
  className = '',
}) {
  const inputId = useId();
  const selectId = useId();

  return (
    <div className={`bg-white rounded-xl text-sm flex ${className}`}>
      {/* Amount Input Section */}
      <div className="w-1/2 px-2">
        <label
          htmlFor={inputId}
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {label}
        </label>
        <input
          id={inputId}
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      {/* Currency Selector Section */}
      <div className="w-1/2 px-2">
        <label
          htmlFor={selectId}
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Currency Type
        </label>
        <select
          id={selectId}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="" disabled>
            Select Currency
          </option>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
