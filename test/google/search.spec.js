require('chromedriver');
const Browser = require('../../framework/browser');
const HomePage = require('../../pages/homePage');
const ResultsPage = require('../../pages/resultsPage');
const { describe, it } = require('mocha');
const { assert } = require('chai');

describe('Google search', () => {

    let browser = new Browser();

    beforeEach('beforeEach', async() => {
        await browser.start();
    })

    afterEach('afterEach', async() => {
        await browser.quit();
    })

    it('should search for "webdriver"', async () => {
        const homePage = new HomePage(browser);
        assert.isTrue(await homePage.isOpened(), "Home page is opened");
        await homePage.search('webdriver');

        const resultsPage = new ResultsPage(browser);
        assert.isTrue(await resultsPage.isOpened(), "Results page is opened");


        //const resultsPage = new ResultsPage(browser);
        const rowNumber = await resultsPage.getRowNumbers();
        assert.isTrue(rowNumber > 100000, "More than 100000 results");
    });
});