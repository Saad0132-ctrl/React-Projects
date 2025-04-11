import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1920x1080/?finance,money')",
      }}
    >
      <div className="w-full max-w-lg bg-white bg-opacity-60 backdrop-blur-md p-8 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6"
        >
          {/* Input Box for "From" Currency */}
          <div>
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={(value) => setAmount(value)}
              onCurrencyChange={(currency) => setFrom(currency)}
              currencyOptions={options}
              selectCurrency={from}
            />
          </div>

          {/* Swap Button */}
          <div className="text-center">
            <button
              type="button"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 rounded-full hover:opacity-90 shadow-lg transition-all transform hover:scale-105"
              onClick={swap}
            >
              Swap Currencies
            </button>
          </div>

          {/* Input Box for "To" Currency */}
          <div>
            <InputBox
              label="To"
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              currencyOptions={options}
              selectCurrency={to}
              amountDisable
            />
          </div>

          {/* Convert Button */}
          <div className="text-center">
            <button
              type="button"
              className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 px-8 rounded-full hover:opacity-90 shadow-lg transition-all transform hover:scale-105 w-full"
              onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </form>

        {/* Display Result */}
        {convertedAmount > 0 && (
          <div className="text-center mt-6 text-xl font-semibold text-gray-700">
            <p>
              {amount} {from.toUpperCase()} ={" "}
              <span className="text-green-600">
                {convertedAmount.toFixed(2)}
              </span>{" "}
              {to.toUpperCase()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
