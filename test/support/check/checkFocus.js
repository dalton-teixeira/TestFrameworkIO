module.exports = function (elem, falseCase, done) {
    var selector = this.pageMap[elem];
    this.browser
        .waitElemReady(selector, this.networkTimeout)
        .isExisting(selector + ":focus")
        .then(function (isExisting) {
            if (falseCase) {
                isExisting.should.not.equal(true, "Expected element to not be focused, but it is");
            } else {
                isExisting.should.equal(true, "Expected element to be focused, but it is not");
            }

            return this;
        })
        .call(done);
};
