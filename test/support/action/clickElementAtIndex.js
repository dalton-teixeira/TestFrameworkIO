module.exports = function (ordinalIndex, element, done) {

  var index = ordinalIndex.substring(0, ordinalIndex.length - 2);
  var selectorPlaceHolder = this.pageMap[element];
  var selector = selectorPlaceHolder.replace(/:nth-child\((.*\))/, ":nth-child(" + index + ")");
  
  this.browser
    .waitElemReady(selector, this.networkTimeout)
    .click(selector)
    .call(done);
};
