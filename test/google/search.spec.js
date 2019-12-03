require('chromedriver');
const Browser = require('../../framework/browser');
const HomePage = require('../../pages/homePage');
const { describe, it } = require('mocha');

describe('Google search', () => {

    let browser = new Browser();;

    beforeEach('beforeEach', async() => {
        await browser.start();
    })

    afterEach('afterEach', async() => {
        await browser.quit();
    })

    it('should search for "webdriver"', async () => {
        const homePage = new HomePage(browser);
        homePage.search('webdriver');
    });
});