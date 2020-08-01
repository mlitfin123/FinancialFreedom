const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
    "useQueryString":true
    },"params":{
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