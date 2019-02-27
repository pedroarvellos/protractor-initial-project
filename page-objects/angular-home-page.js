class AngularHomePage {
  async getPage(pageAddress) {
    return browser.get(pageAddress);
  }

  async clickOnNavLink(navLinkName) {
    const navLinkElement = element(by.cssContainingText('.nav-link-inner', navLinkName));

    return navLinkElement.click();
  }

  async getFeaturesPageTitle() {
    browser.wait(EC.visibilityOf(this.featuresPageTitle), 30000);
    return this.featuresPageTitle;
  }
}

module.exports = new AngularHomePage();
