import fs from "fs";
import { conversions } from "./config.js";
import { fetchExchangeRate } from "./utils.js";
export const calculateExchangeRate = async (date, amount, currency) => {
  const exchangeRates = await fetchExchangeRate(date, currency[0]);

  const conversion = {
    date: date,
    amount: amount,
    base_currency: currency[0],
    target_currency: currency[1],
    converted_amount: amount * exchangeRates[currency[1]],
  };
  conversions.push(conversion);
  fs.writeFileSync(
    "./data/conversions.json",
    JSON.stringify(conversions, null, 2)
  );

  console.log(
    `${amount} ${currency[0]} is ${conversion.converted_amount} ${currency[1]}`
  );
};
