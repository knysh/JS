const { locators, pageName } = require('./constants');
const BasePage = require('../../framework/basePage');

class ResultsPage extends BasePage{

    constructor(browser){
        super(browser, locators.pageLocator, pageName);
    }

    async getRowNumbers(){
        const statsLabel = await this.browser.findElement(locators.resultStats, "Results stats");
        const stats = await statsLabel.getText();
        return stats.match(/\s([\d\s]+)\s\(/)[1].replace(/\s+/g, '');
    }

    async getSearchLink(rowNumber){
        const searchLinks = await this.browser.findElements(locators.searchLink, "Search links");
        const link = await searchLinks[rowNumber].getAttribute('href');
        return link;
    }
}

module.exports = ResultsPage;