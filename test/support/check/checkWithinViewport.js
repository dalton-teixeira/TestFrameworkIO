module.exports = function (elem, falseCase, done) {
    var selector = this.pageMap[elem];
    this.browser
        .waitElemReady(selector, this.networkTimeout)
        .isVisibleWithinViewport(selector)
        .then(function (isVisible) {
            if (falseCase) {
                isVisible.should.not.equal(true, 'Expected element "' + elem + '" to be outside the viewport, but it is not');
            } else {
                isVisible.should.equal(true, 'Expected element "' + elem + '" to be inside the viewport, but it is not');
            }
        })
        .call(done);
};
