const chaiHttp = require("chai-http");
const chai = require("chai");
const exchangeUrl = "https://api.exchangeratesapi.io";
chai.use(chaiHttp);

class ExchangeRatesApi{
    async getRate(date = "latest", currency = "USD") {
        return chai.request(exchangeUrl).get(`/${date}?base=${currency}}`).then((responce) => {
            return responce.text;
        });
    }
}

module.exports = new ExchangeRatesApi();