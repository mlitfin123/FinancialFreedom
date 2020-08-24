const axios = require("axios");
//To pull api key from .env
const dotenv = require('dotenv');
const result = dotenv.config();
// const { endpoint, masterKey, port } = require("config");
console.log(process.env)

axios({
    "method":"GET",
    "url":process.env.API_URL,
    "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
      "x-rapidapi-key":process.env.API_KEY,
      "useQueryString":true
    },
    "params":
    {
      "comparisons":"%5EGDAXI%2C%5EFCHI",
      "region":"US",
      "lang":"en",
      "symbol":"HYDR.ME",
      "interval":"5m",
      "range":"1d"
    }
})
    .then((response)=>{
      console.log(response.data)
})
    .catch((error)=>{
      // console.log(error)
})

