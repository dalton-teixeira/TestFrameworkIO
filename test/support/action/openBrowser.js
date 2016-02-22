module.exports = function (page, done) {

    this.browser
        .init()
        .url(page)
        .call(done);
};
