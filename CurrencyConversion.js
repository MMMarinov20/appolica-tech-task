import { Validators } from "./modules/validators.js";
import { calculateExchangeRate } from "./modules/exchangeRateCalculator.js";
import { inputTemplate } from "./modules/input.js";

const [, , dateArg] = process.argv;

if (!Validators.isValidDate(dateArg)) process.exit(1);

while (true) {
  const amount = await inputTemplate(Validators.isValidAmount);

  const baseCurrency = await inputTemplate(Validators.isValidCurrency);

  const targetCurrency = await inputTemplate(Validators.isValidCurrency);

  await calculateExchangeRate(dateArg, amount, baseCurrency, targetCurrency);
}
