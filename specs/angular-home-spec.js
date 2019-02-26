const angularHomePage = require('../page-objects/angular-home-page');
const angularFeaturesPage = require('../page-objects/angular-features-page');

describe('Angular Page', function () {
    it('Click on Angular Features', async function () {
        await angularHomePage.getPage('https://angular.io/');

        await angularHomePage.clickOnNavLink('Features');

        let sectionTitle = await angularFeaturesPage.getFeaturesPageTitle();
        expect(await sectionTitle.getText()).toEqual('FEATURES & BENEFITS');
    });
})
