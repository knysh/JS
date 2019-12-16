const { By } = require('selenium-webdriver');
const locators = {
    pageLocator : By.id('searchform'),
    searchInput : By.name('q')
}
const pageName = 'Search page';

module.exports = { locators, pageName };