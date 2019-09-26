const {assert} = require('chai');
const exchange = require('../../exchange_rate/api/exchangerate');
const date = require("../../utils/dateTime.util")

describe('ex', () => {
    it("ex", async () => {
        var a = await exchange.getRate(date.getDate(-10));
    });
});