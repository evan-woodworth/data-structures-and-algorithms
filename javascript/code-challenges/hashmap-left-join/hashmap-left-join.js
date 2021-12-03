'use strict';

const HashTable = require('../hashtable/hashtable.js');

const leftJoin = (firstHashTable, secondHashTable) => {
  let returnArray = [];
  for(const bucket in firstHashTable.map) {
    for(let node = firstHashTable.map[bucket].head; node; node=node.next) {
      for (const key in node.value) {
        let subArray = [key, node.value[key]];
        let secondValue = secondHashTable.get(subArray[0]);
        if (secondValue) subArray.push(secondValue);
        returnArray.push(subArray);
      }
    }

  }
  return returnArray;
};

module.exports = {
  leftJoin,
  HashTable
};
