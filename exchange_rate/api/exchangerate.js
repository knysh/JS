const chaiHttp = require("chai-http");
const chai = require("chai");
const exchangeUrl = "https://api.exchangeratesapi.io";
chai.use(chaiHttp);

class ExchangeRatesApi{
    async getRate(baseCurrency = "USD") {
        return chai.request(exchangeUrl).get(`/latest?base=${baseCurrency}}`).then((responce) => {
            return responce.text;
        });
    }

    async getRates(startAt, endAt, symbols = "USD", baseCurrency = "RUB"){
        return chai.request(exchangeUrl).get(`/history?start_at=${startAt}&end_at=${endAt}&symbols=${symbols}&base=${baseCurrency}`).then((responce) => {
            return responce.text;
        });
    }
}

module.exports = new ExchangeRatesApi();