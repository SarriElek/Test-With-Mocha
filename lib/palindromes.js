function isPalindrome(s) {
  var noSpaces = s.replace(/ /g,'');
  var stringReverse = noSpaces.split("").reverse().join("");
  return noSpaces == stringReverse;
}

module.exports = isPalindrome;
