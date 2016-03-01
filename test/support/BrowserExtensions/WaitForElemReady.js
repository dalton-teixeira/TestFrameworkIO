var WaitForElemReady = function(selector, timeout){
  return this
      .waitUntil(function(){
        var result = false;
        try{
          result =
            this.isExisting(selector).then(function(isExisting){ return isExisting; }) &&
            this.isEnabled(selector).then(function(isEnabled){ return isEnabled; }) &&
            this.isVisible(selector).then(function(isVisible){ return isVisible; });
            this.scroll(selector);
        }
        catch(e){
          return false;
        }
        return result;
      }, timeout)
      .then(function(){
        var ElemEventsBindingTimeout = 2000;
        return this
        .pause(ElemEventsBindingTimeout)
        .then(function(){ return this; });
      });
};

module.exports = WaitForElemReady;
