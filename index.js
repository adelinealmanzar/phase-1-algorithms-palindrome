function isPalindrome(word) {
  // Write your algorithm here
  // iterate through each char of word and create an array of these char
  let charArr = []
  for (i in word) {
    charArr.push(word[i])
  }
  let backwordsCharArr = []
  while (backwordsCharArr.length < word.length) {
    backwordsCharArr.push(charArr.pop())
  }
  let backwordsWord = backwordsCharArr.join('')
  return backwordsWord === word
}
isPalindrome('racecar')

/* 
  palindrome is a word that is spelled the same backwards and forwards
    the backwards word array is empty originally and has the last letter of the word added first
    if word = the backwords word then fn should return true, else return false
*/

/*
  .pop to return last letter of word
  create charArr to manipulate arr backwards
  .push to push the last char of word into the new charArr
  create backwardsCharArr to accept the returned poped elements
  .join backwardsCharArr to convert the array into a string seperated by nothing (not commas)
  if word === the backwardsWord, then return true, else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
