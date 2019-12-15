class BasePage{

    constructor(browser, locator, name){
        this.browser = browser;
        this.locator = locator;
        this.name = name;
    }

    isOpened() {
        return this.browser.isDisplayed(this.locator, this.name);
    }
}

module.exports = BasePage;