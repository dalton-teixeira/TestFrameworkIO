/**
 * check if element is visible
 */

module.exports = function (element, falseCase, done) {
    var selector = this.pageMap[element];
    this.browser
        .waitElemReady(selector, this.networkTimeout)
        .isVisible(selector)
        .then(function (visible) {
            if (falseCase) {
                visible.should.not.equal(true, 'expected element "' + element + '" not to be visible');
            } else {
                visible.should.equal(true, 'expected element "' + element + '" to be visible');
            }
        })
        .call(done);
};
