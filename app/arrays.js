exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
      if(item === arr[i]) {
        return i;
      }
    } 
    return -1;
  },

  sum : function(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  },

  remove : function(arr, item) {
    var copy = arr.slice();
    for(var i = 0; i < copy.length; i++) {
      if(copy[i] === item) {
        copy.splice(i, 1);
      }
    }
    return copy;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
      if(item === arr[i]) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    var newArr = [item].concat(arr);
    return newArr;
  },

  curtail : function(arr) {
    return arr.slice(1);    
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
      if(item === arr[i]) {
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var dups = {};
    for(var i = 0; i < arr.length; i++) {
      dups[arr[i]] = dups[arr[i]] || 0;
      dups[arr[i]]++;
    }
    var container = [];
    for(var key in dups) {
      if(dups[key] > 1) {
        container.push(parseInt(key));
      }
    }
    return container;
  },

  square : function(arr) {
    for(var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var occ = [];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        occ.push(i);
      }
    }
    return occ;
  }
};
