const exchange = require('../../exchange_rate/api/exchangerate');
const date = require("../../utils/dateTime.util");
const logger = require("../../utils/log.util");

describe('Exchange rate suite', () => {
    it("Log last exchange rate", async () => {
        var currency = "RUB";
        var baseCurrency = "USD";
        var days = "10";
        var responce = await exchange.getRates(date.toStringDate(date.getDate(-days)), date.toStringDate(date.today()), currency, baseCurrency);
        var jsonResponce = JSON.parse(responce);
        
        var newArray = [];
        var curentRate = 0;
        for(rate in jsonResponce.rates){
            var rateValue = jsonResponce.rates[rate][currency];
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

        logger.info(`I want to see if rate on my currency is growing compare to ${days} days before today`)
        logger.info(newArray.join("\n"));
        logger.info(`${currency}s per 1 ${baseCurrency}`)
    });
});