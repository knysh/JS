const { Key } = require('selenium-webdriver');
const { locators, pageName } = require('./constants');
const BasePage = require('../../framework/basePage');

class HomePage extends BasePage{

    constructor(browser){
        super(browser, locators.pageLocator, pageName);
    }

    async search(text){
        const input = await this.browser.findElement(locators.searchInput, 'Search input');
        (await input.sendKeys(text, Key.RETURN));
    }
}

module.exports = HomePage;