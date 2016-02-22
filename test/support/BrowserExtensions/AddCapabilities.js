var AddCapabilities = function(browser){
  browser.waitElemReady = require("./WaitForElemReady");
  return browser;
};

module.exports = AddCapabilities;
