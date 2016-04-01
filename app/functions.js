exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function(arg) {
      return str + ', '+ arg;
    }
  },

  makeClosures : function(arr, fn) {
    var closed = [];
    for(var i = 0; i < arr.length; i++) {
      closed[i] = fn.bind(this, arr[i]);
    }
    return closed;
  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
