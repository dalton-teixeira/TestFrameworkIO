/**
 * compare content of two elements
 */

module.exports = function (element1, falseCase, element2, done) {
    var text1 = '';

    var selector1 = this.pageMap[element1];
    var selector2 = this.pageMap[element2];
    this.browser
        .waitElemReady(selector1, this.networkTimeout)
        .getText(element1)
        .then(function (text) {
            text1 = text;
        })
        .waitElemReady(selector2, this.networkTimeout)
        .getText(selector2)
        .then(function (text) {
            if (falseCase) {
                text1.should.not.equal(text, 'expected text not to be ' + text1);
            } else {
                text1.should.equal(text, 'expected text to be "' + text1 + '"  but found "' + text + '"');
            }
        })
        .call(done);
};
