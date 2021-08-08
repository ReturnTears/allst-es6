"use strict";

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function isUnique(astr) {
  var bitmap = 0;

  for (var i = 0; i < astr.length; ++i) {
    var pos = astr[i].charCodeAt() - 'a'.charCodeAt();

    if ((bitmap & 1 << pos) != 0) {
      return false;
    }

    bitmap |= 1 << pos;
  }

  return true;
};

console.log(isUnique('leetcode'));