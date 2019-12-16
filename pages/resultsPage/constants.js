const { By } = require('selenium-webdriver');
const locators = {
    pageLocator : By.id('main'),
    resultStats : By.id('resultStats'),
    searchLink: By.xpath("//div[@id='search']//div[@class='r']/a")
}

const pageName = 'Results page';

module.exports = { locators, pageName };