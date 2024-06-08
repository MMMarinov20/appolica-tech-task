import fs from "fs";

const api_key = JSON.parse(fs.readFileSync("./config.json")).api_key;

const conversions = JSON.parse(
  fs.readFileSync("./data/conversions.json", "utf8")
);

export { api_key, conversions };
