# appolica-tech-task

# Currency Conversion Tool

Currency Conversion Tool is a command-line application built with Node.js to provide users with efficient currency conversion capabilities. The application encompasses various functionalities and adheres to the following guidelines:

## Features:

1. **Date Specification:** Accepts a command-line argument specifying the date in 'YYYY-MM-DD' format.
2. **Multiple Conversion Handling:** Capable of performing multiple currency conversions in a single execution.
3. **API Configuration:** Loads the Fast Forex API key from the `config.json` file.
4. **Robust Validation & Case-Sensitivity:** Continuously validates all user inputs until they are correct. Inputs must include monetary values with two decimal places and ISO 4217 currency codes.
5. **Exchange Rate Caching:** Caches exchange rates for requested base currencies to optimize API usage. Conversions with the same base currency will utilize the cached rates.
6. **Result Logging:** Saves each conversion result in a JSON file for future reference.
7. **Program Termination:** Ends the application session when `end` is input.

## Usage:

1. **Installation:** Make sure Node.js is installed on your system.
2. **Configuration:** Enter your Fast Forex API key into the `config.json` file.
3. **Execution:** Run the application with `node CurrencyExchangeTool.js` followed by the required date.
