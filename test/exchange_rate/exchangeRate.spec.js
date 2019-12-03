const exchange = require('../../exchange_rate/api');
const date = require("../../utils/dateTime.util");
const logger = require("../../utils/log.util");
const processRates = (json, currency) => {
    var newArray = [];
    var curentRate = 0;
    for(rate in json.rates){
        var rateValue = json.rates[rate][currency];
        var finalValue = rateValue;
        var diff = curentRate - rateValue;
        if(diff == 0 || curentRate == 0) {
            finalValue = finalValue;
        }else if(diff < 0){
            finalValue = `+${finalValue}`;
        } if(diff > 0){
            finalValue = `-${finalValue}`;
        } 
        
        newArray.push(finalValue);
        curentRate = rateValue;
    }

    return newArray;
}

describe('Exchange rate suite', () => {
    it("Log last exchange rate", async () => {
        var currency = "RUB";
        var baseCurrency = "USD";
        var days = "10";
        var startAt = date.toYYYYMMdd(date.getDate(-days));
        var endAt = date.toYYYYMMdd(date.getDate());
        var jsonResponce = JSON.parse(await exchange.getHistoryRates(startAt, endAt, currency, baseCurrency));
        logger.info(`I want to see if rate on my currency is growing compare to ${days} days before today`)
        logger.info(processRates(jsonResponce, currency).join("\n"));
        logger.info(`${currency}s per 1 ${baseCurrency}`)
    });
});