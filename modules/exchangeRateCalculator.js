import fs from "fs";
import { conversions } from "./config.js";
import { fetchExchangeRate } from "./cache.js";
export const calculateExchangeRate = async (
  date,
  amount,
  baseCurrency,
  targetCurrency
) => {
  const exchangeRates = await fetchExchangeRate(date, baseCurrency);

  const conversion = {
    date: date,
    amount: amount,
    base_currency: baseCurrency,
    target_currency: targetCurrency,
    converted_amount: amount * exchangeRates[targetCurrency],
  };
  conversions.push(conversion);
  fs.writeFileSync(
    "./data/conversions.json",
    JSON.stringify(conversions, null, 2)
  );

  console.log(
    `${amount} ${baseCurrency} is ${conversion.converted_amount} ${targetCurrency}`
  );
};
