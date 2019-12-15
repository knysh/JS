const { By } = require('selenium-webdriver');
const locators = {
    pageLocator : By.id('main'),
    resultStats : By.id('resultStats')
}

const pageName = 'Results page';

module.exports = { locators, pageName };