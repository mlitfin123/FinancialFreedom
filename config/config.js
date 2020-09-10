const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
    throw result.error;
}

module.exports = {
  endpoint: process.env.API_URL,
  masterKey: process.env.API_KEY,
  port: process.env.PORT
};