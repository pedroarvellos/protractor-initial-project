const angularHomePage = require('../page-objects/angular-home-page');
const angularFeaturesPage = require('../page-objects/angular-features-page');

describe('Angular Page', () => {
    it('Click on Angular Features', async () => {
        await angularHomePage.getPage('https://angular.io/');

        await angularHomePage.clickOnNavLink('Features');

        const sectionTitle = await angularFeaturesPage.getFeaturesPageTitle();
        expect(await sectionTitle.getText()).toEqual('FEATURES & BENEFITS');
    });
})
