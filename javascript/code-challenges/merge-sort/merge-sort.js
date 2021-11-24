'use strict';

function merge(left, right) {
  let i=0;
  let j=0;
  let returnArray = [];

  while( (i < left.length) && (j < right.length) ) {
    if (left[0] <= right[0]) {
      returnArray.push(left.shift());
    } else {
      returnArray.push(right.shift());
    }
  }
  console.log(returnArray)
  return [...returnArray, ...left, ...right];
}

function mergeSort(numArray) {
  const n = numArray.length;

  if ( n>1 ) {
    const mid = n/2;
    let left = mergeSort(numArray.slice(0,mid));
    let right = mergeSort(numArray.slice(mid,n));
    return merge(left, right);
  }
  return numArray;
}

module.exports = mergeSort;
