'use strict';

class Node {
  constructor(value = null, k=0) {
    this.value = value;
    this.children = new Array(k);
  }
}

class KaryTree {
  constructor(k = 0) {
    this.k = k;
    this.root = null;
  }

  breadthFirst () {
    if (!this.root) throw('This tree is empty.');
    let breadthQ = [this.root];
    let returnArray = [];
    while (breadthQ.length) {
      let front = breadthQ[0];
      returnArray.push(breadthQ[0].value);
      breadthQ.shift();
      for (let node of front.children) {
        breadthQ.push(node);
      }
    }
    return returnArray;
  }
}

const fizzBuzz = (value) => {
  if ( !(value%3) ) {
    if ( !(value%5) ) {
      return "FizzBuzz";
    } else {
      return "Fizz";
    }
  } else if ( !(value%5) ) {
    return "Buzz";
  } else {
    return `${value}`;
  }
};

const fizzBuzzTree = (karyTree) => {
  if (!karyTree.root) throw ('This tree is empty.');
  let root = karyTree.root;
  let queue = [];
  let returnTree = new KaryTree();
  returnTree.root = new Node( fizzBuzz(root.value) );
  let returnRoot = returnTree.root;

  for (let i=0; i<root.children.length; i++) {
    returnTree.root.children.push( new Node( fizzBuzz(root.children[i].value) ) );
    queue.push([root.children[i], returnRoot.children[i]]);
  }

  while (queue.length) {
    let currentPair = queue[0];
    queue.shift();
    let current = currentPair[0];
    let returnCurrent = currentPair[1];

    for (let i=0; i<current.children.length; i++) {
      returnCurrent.children.push( new Node( fizzBuzz(current.children[i].value) ) );
      queue.push([current.children[i], returnCurrent.children[i]]);
    }
  }
  return returnTree;
};

module.exports = {
  Node,
  KaryTree,
  fizzBuzzTree
};
