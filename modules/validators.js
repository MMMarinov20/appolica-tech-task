import { DateTime } from "luxon";
import { fetchCurrencies } from "./utils.js";

export const Validators = {
  isValidDate: (dateString) => {
    const date = DateTime.fromISO(dateString);
    const isValid = date.isValid && date.toISODate() === dateString;

    if (isValid && date <= DateTime.now()) return true;

    return false;
  },

  isValidAmount: (amount) => {
    const decimalPart = amount.toString().split(".")[1];
    if (decimalPart && decimalPart.length > 2) {
      console.log("Please enter a valid amount");
      return false;
    }

    if (!isNaN(amount) && amount > 0) return true;

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
