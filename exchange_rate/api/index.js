const chaiHttp = require("chai-http");
const chai = require("chai");
const constants = require("./constants")
chai.use(chaiHttp);

class ExchangeRatesApi{

    async getHistoryRates(startAt, endAt, symbols = "USD", baseCurrency = "RUB"){
        return chai.request(constants.exchangeUrl).get(`/history?start_at=${startAt}&end_at=${endAt}&symbols=${symbols}&base=${baseCurrency}`).then((responce) => {
            return responce.text;
        });
    }
}

module.exports = new ExchangeRatesApi();