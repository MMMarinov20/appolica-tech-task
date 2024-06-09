import fs from "fs";
import { api_key } from "./config.js";

export const fetchCurrencies = async () => {
  const currencies = JSON.parse(
    fs.readFileSync("./data/currencies.json", "utf-8")
  );
  if (currencies.length > 0) return currencies;

  const response = await fetch(
    `https://api.fastforex.io/fetch-all?api_key=${api_key}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();

  fs.writeFileSync(
    "./data/currencies.json",
    JSON.stringify(Object.keys(data.results), null, 2)
  );
  return Array.from(Object.keys(data.results));
};

export const fetchExchangeRate = async (date, currency) => {
  const rates = JSON.parse(fs.readFileSync("./data/rates.json", "utf-8"));
  if (rates.date === date && rates.base_currency === currency)
    return rates.rates;

  const response = await fetch(
    `https://api.fastforex.io/historical?date=${date}&from=${currency}&api_key=${api_key}`,
    {
      method: "GET",
    }
  );

  const data = await response.json();
  const currencyRates = {
    date: data.date,
    base_currency: data.base,
    rates: data.results,
  };

  fs.writeFileSync("./data/rates.json", JSON.stringify(currencyRates, null, 2));
  return data.results;
};
