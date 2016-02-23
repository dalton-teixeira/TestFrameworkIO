/**
 * Check text content for specific element or input field
 */
// jshint -W030
module.exports = function (type, element, falseCase, done) {
    var command = (type !== 'inputfield') ? 'getText' : 'getValue';

    var selector = this.pageMap[element];
    this.browser
        .waitElemReady(selector, this.networkTimeout)
        [command](selector)
        .then(function (text) {
            if (falseCase) {
                expect(text).to.not.be.empty;
            } else {
                expect(text).to.be.empty;
            }
        })
        .call(done);
};
