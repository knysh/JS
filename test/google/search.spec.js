require('chromedriver');
const Browser = require('../../framework/browser');
const HomePage = require('../../pages/homePage');
const ResultsPage = require('../../pages/resultsPage');
const { describe, it } = require('mocha');
const { assert } = require('chai');

describe('Google search', () => {

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
    })

    after('after', async() =>{
        await browser.quit();
    })

    it(`should search for "${searchQuery}"`, async () => {
        assert.isTrue(await homePage.isOpened(), "Home page is opened");
        await homePage.search(searchQuery);
        assert.isTrue(await resultsPage.isOpened(), "Results page is opened");
    })

    it(`should find more than ${resultsNumber} results`, async () => {
        const rowNumber = await resultsPage.getRowNumbers();
        assert.isTrue(rowNumber > resultsNumber, `More than ${resultsNumber} results`);
    })

    it(`should show "${expectedFirstLink}" link on the first page`, async () => {
        const link = await resultsPage.getSearchLink(0);
        assert.equal(link, expectedFirstLink, "First search link is same as expected");
    }) 
});