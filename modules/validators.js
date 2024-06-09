import { DateTime } from "luxon";
import { fetchCurrencies } from "./cache.js";

export const Validators = {
  isValidDate: (dateString) => {
    const date = DateTime.fromISO(dateString);
    const isValid = date.isValid && date.toISODate() === dateString;

    if (isValid && date <= DateTime.now()) return true;

    console.log("Please enter a valid date");
    return false;
  },

  isValidAmount: (amount) => {
    const regex = /^\d+(\.\d{1,2})?$/;
    if (regex.test(amount) && parseFloat(amount) > 0) return true;

    console.log("Please enter a valid amount");
    return false;
  },

  isValidCurrency: async (currency) => {
    const currencies = await fetchCurrencies();

    if (currencies.includes(currency)) return true;

    console.log("Please enter a valid currency code");
    return false;
  },
};
