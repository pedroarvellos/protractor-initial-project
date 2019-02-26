const EC = protractor.ExpectedConditions;

class AngularFeaturesPage {
  constructor() {
    this.featuresPageTitle = element(by.id('features--benefits'));
  }

  async getFeaturesPageTitle() {
    browser.wait(EC.visibilityOf(this.featuresPageTitle), 30000);
    return this.featuresPageTitle;
  }
}

module.exports = new AngularFeaturesPage();