'use strict';

function insertionSort(numArray) {

  for (let i=1; i<numArray.length; i++) {
    let j = i-1;
    let temp = numArray[i];
    while ( (j>=0) && (temp<numArray[j]) ) {
      numArray[j+1] = numArray[j];
      j = j-1;
    }
    numArray[j+1] = temp;
  }

  return numArray;
}

module.exports = insertionSort;
