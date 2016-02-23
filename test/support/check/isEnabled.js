/**
 * check if element is visible
 */

module.exports = function (element, falseCase, done) {
  var selector = this.pageMap[element];
  this.browser
      .waitElemReady(selector, this.networkTimeout)
        .isEnabled(selector)
        .then(function (enabled) {
            if (falseCase) {
                enabled.should.not.equal(true, 'expected element "' + element + '" not to be enabled');
            } else {
                enabled.should.equal(true, 'expected element "' + element + '" to be enabled');
            }
        })
        .call(done);
};
