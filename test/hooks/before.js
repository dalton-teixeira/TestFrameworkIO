var WebdriverIO = require('webdriverio'),
    merge = require('deepmerge'),
    config = require('../support/configure'),
    BeforeHook,
    PageMap = require('../support/PageMap'),
    DataMap = require('../support/DataMap'),
    AddCapabilities = require("../support/BrowserExtensions/AddCapabilities");

BeforeHook = module.exports = function (done) {
    var options = config.options;
    options = merge(config.options, config.selenium || {});
    options.desiredCapabilities = config.capabilities;

    this.browser = WebdriverIO.remote(options);
    this.browser.init().call(done);
    this.networkTimeout = 200000;
    this.animationTimeout = 4000;
    this.pageMap = PageMap;
    this.dataMap = DataMap;

    this.browser = AddCapabilities(this.browser);

};
