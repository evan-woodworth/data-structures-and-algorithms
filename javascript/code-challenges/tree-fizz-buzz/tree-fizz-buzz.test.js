'use srtict';

const { describe, expect } = require('@jest/globals');
const { Node, KaryTree, fizzBuzzTree } = require('./tree-fizz-buzz.js');

describe("Testing tree-breadth-first challenge", () => {

  let testKaryTree = new KaryTree();
  testKaryTree.root = new Node(2);
  testKaryTree.root.children.push(new Node(7));
  testKaryTree.root.children.push(new Node(5));
  testKaryTree.root.children.push(new Node(3));
  testKaryTree.root.children[0].children.push(new Node(2));
  testKaryTree.root.children[0].children.push(new Node(6));
  testKaryTree.root.children[0].children[1].children.push(new Node(5));
  testKaryTree.root.children[0].children[1].children.push(new Node(11));
  testKaryTree.root.children[1].children.push(new Node(9));
  testKaryTree.root.children[1].children[0].children.push(new Node(4));
  testKaryTree.root.children[2].children.push(new Node(7));
  testKaryTree.root.children[2].children.push(new Node(15));
  testKaryTree.root.children[2].children[0].children.push(new Node(12));

  it("Can successfully list all of the values in a breadth-first fashion", () => {
    expect(testKaryTree.breadthFirst())
      .toEqual([2,7,5,3,2,6,9,7,15,5,11,4,12]);
    let postTree = fizzBuzzTree(testKaryTree);
    expect(postTree.breadthFirst())
      .toEqual(["2","7","Buzz","Fizz","2","Fizz","Fizz","7","FizzBuzz","Buzz","11","4","Fizz"]);
  });

});
