module.exports = function (element, done) {
    var selector = this.pageMap[element];
    this.browser
        .waitElemReady(selector)
        .then(function (result) {
            return this
                .scroll(selector);
        })
        .call(done);
};
