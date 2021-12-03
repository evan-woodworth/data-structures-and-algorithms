'use strict';

const HashTable = require('./hashtable.js');
const { Node, BinarySearchTree, breadthFirst } = require('./tree-breadth-first.js');

const treeIntersection = (firstTree, secondTree) => {
  let tempHashTable = new HashTable(1024);
  breadthFirst(firstTree).forEach( key => {
    tempHashTable.add(key, null);
  });
  let returnArray = [];
  breadthFirst(secondTree).forEach( key => {
    if (tempHashTable.contains(key)) returnArray.push(key);
  });
  return returnArray;
};

module.exports = {
  treeIntersection,
  BinarySearchTree,
  Node
};
