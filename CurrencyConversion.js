import readline from "readline";
import { Validators } from "./modules/validators.js";
import { calculateExchangeRate } from "./modules/exchangeRateCalculator.js";

const inputData = {
  amount: 0,
  from: "",
  to: "",
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputTemplate = async (validator) => {
  return new Promise((resolve, reject) => {
    rl.question("", async (input) => {
      if (input === "end") process.exit(0);
      else if (await validator(input)) resolve(input);
      else resolve(inputTemplate(validator));
    });
  });
};

const [, , dateArg] = process.argv;
if (!Validators.isValidDate(dateArg)) process.exit(1);

while (true) {
  inputData.amount = await inputTemplate(Validators.isValidAmount);

  inputData.from = await inputTemplate(Validators.isValidCurrency);

  inputData.to = await inputTemplate(Validators.isValidCurrency);

  await calculateExchangeRate(dateArg, inputData.amount, [
    inputData.from,
    inputData.to,
  ]);
}
