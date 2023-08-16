require("dotenv").config("./.env");

const PRODUCTION = require("./production");
const LOCAL = require("./local");

let currentEnvironment = LOCAL;

if (process.env.NODE_ENV == "production") {currentEnvironment = PRODUCTION; }

module.exports = currentEnvironment;
