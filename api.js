const axios = require("axios");
//To pull api key from .env
const dotenv = require('dotenv');
dotenv.config();

axios({
    "method":"GET",
    "url":Process.env.API_URL,
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
      console.log(response)
})
    .catch((error)=>{
      console.log(error)
})

