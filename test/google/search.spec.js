require('chromedriver');
const Browser = require('../../framework/browser');
const HomePage = require('../../pages/homePage');
const ResultsPage = require('../../pages/resultsPage');
const { describe, it } = require('mocha');
const { assert } = require('chai');
const chaiWebdriver = require('chai-webdriver');

describe('Google search', function() {

    this.retries(3);
    let browser = new Browser();
    let homePage;
    let resultsPage;
    let searchQuery = 'webdriver';
    let resultsNumber = 100000;
    let expectedFirstLink = 'https://www.seleniumhq.org/projects/webdriver/';

    before('before', async() =>{
        await browser.start();
        homePage = new HomePage(browser);
        resultsPage = new ResultsPage(browser);
        //chai.use(chaiWebdriver(browser.driver));
    })

    after('after', async() =>{
        await browser.quit();
    })

    it.only(`should search for "${searchQuery}"`, async () => {
        //assert.isFalse(true);
        assert.isTrue(await homePage.isOpened(), "Home page is opened");
        await homePage.search(searchQuery);
        //chai.expect('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').dom.to.contain('searchQuery');
        assert.isTrue(await resultsPage.isOpened(), "Results page is opened");
    });

    it(`should find more than ${resultsNumber} results`, async () => {
        const rowNumber = await resultsPage.getRowNumbers();
        assert.isTrue(rowNumber > resultsNumber, `More than ${resultsNumber} results`);
    });

    it.skip(`should show "${expectedFirstLink}" link on the first page`, async () => {
        const link = await resultsPage.getSearchLink(0);
        assert.equal(link, expectedFirstLink, "First search link is same as expected");
    });
});