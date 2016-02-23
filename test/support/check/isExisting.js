/**
 * check if element is visible
 */

module.exports = function (element, falseCase, done) {
    var selector = this.pageMap[element];
    this.browser
        .waitElemReady(selector, this.networkTimeout)
        .elements(selector)
        .then(function (elements) {
            if (falseCase) {
                expect(elements.value).to.have.length(0, 'expected element "' + elements + '" not to exist');
            } else {
                expect(elements.value).to.have.length.above(0, 'expected element "' + elements + '" to exist');
            }
        })
        .call(done);
};
