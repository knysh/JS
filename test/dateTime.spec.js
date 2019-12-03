const {assert} = require('chai');
const dateTime = require('../utils/dateTime.util');

describe('Date Time Test Suite', () => {
    it("should get today date", () => {
        var today = new Date().toDateString();
        var date = dateTime.getDate().toDateString();
        assert.equal(date, today, `Today date should be ${today}`);
    });

    it("should be possible to set year", () => {
        const year = '1992';
        var today = new Date();
        dateTime.setYear(today, year);
        assert.equal(today.getFullYear(), year, `Year should be ${year}`);
    });

    it("should get difference between dates in days", () => {
        var today = new Date();
        var tommorrow = new Date();
        tommorrow.setDate(tommorrow.getDate() + 1);
        var diff = dateTime.getDaysDiffs(today, tommorrow);
        assert.equal(1, diff, `Difference should be 1 day`);
    });
});