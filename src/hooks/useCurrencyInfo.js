import { useEffect, useState } from "react";

function useCurrencyInfor(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      );
      
      let output = await data.json();
      console.log(output);
      setCurrencyInfo(output[currency]);
    };

    fetchData(); 
  }, [currency]);

  return currencyInfo; 
}

export default useCurrencyInfor;
