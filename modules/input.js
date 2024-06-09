import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const inputTemplate = async (validator) => {
  return new Promise((resolve, reject) => {
    rl.question("", async (input) => {
      if (input === "end") process.exit(0);
      else if (await validator(input)) resolve(input);
      else resolve(inputTemplate(validator));
    });
  });
};
