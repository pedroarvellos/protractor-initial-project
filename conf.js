let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
require('protractor/built/logger').Logger.logLevel = 1;

exports.config = {
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Framework to use.
  framework: 'jasmine',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    silent: true,
    defaultTimeoutInterval: 30000
  },

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [
    './specs/angular-home-spec.js'
  ],

  SELENIUM_PROMISE_MANAGER: false,

  onPrepare: () => {
    browser.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: true
        },
        summary: {
          displayDuration: false
        }
      })
    );
  }
};