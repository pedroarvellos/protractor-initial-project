class AngularHomePage {
  constructor() {

  }
  async getPage(pageAddress) {
    return browser.get(pageAddress);
  }

  async clickOnNavLink(navLinkName) {
    const rowTableElement = element(by.cssContainingText('.nav-link-inner', navLinkName));

    return rowTableElement.click();
  }

  async getFeaturesPageTitle() {
    browser.wait(EC.visibilityOf(this.featuresPageTitle), 30000);
    return this.featuresPageTitle;
  }
}

module.exports = new AngularHomePage();
