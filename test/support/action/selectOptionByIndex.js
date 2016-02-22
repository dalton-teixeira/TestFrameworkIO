module.exports = function (index, indexSuffix, selectElem, done) {

    var selector = this.pageMap[selectElem];
  
    this.browser
        .waitElemReady(selector, this.networkTimeout)
        .selectByIndex(selectElem, +index)
        .call(done);
};
