'use strict';

const repeatedWord = (string) => {

  let wordObject = {};
  let wordArray = string.toLowerCase().replace(/[.,/#!$%^&*;:{}=-_`~()]/g,'').split(' ');

  for (let i=0; i<wordArray.length; i++) {
    if (wordArray[i] in wordObject) return wordArray[i];
    else wordObject[wordArray[i]] = null;
  }

  return null;
};

module.exports = repeatedWord;
