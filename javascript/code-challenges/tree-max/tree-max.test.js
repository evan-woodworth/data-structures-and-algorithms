'use srtict';

const { describe, expect } = require('@jest/globals');
const { Node, BinarySearchTree } = require('./tree-max.js');

describe("Testing tree-max challenge", () => {

  let testBinarySearchTree = new BinarySearchTree();
  testBinarySearchTree.root = new Node(2);
  testBinarySearchTree.root.left = new Node(7);
  testBinarySearchTree.root.left.left = new Node(2);
  testBinarySearchTree.root.left.right = new Node(6);
  testBinarySearchTree.root.left.right.left = new Node(5);
  testBinarySearchTree.root.left.right.right = new Node(11);
  testBinarySearchTree.root.right = new Node(5);
  testBinarySearchTree.root.right.right = new Node(9);
  testBinarySearchTree.root.right.right.left = new Node(4);

  it("Can successfully get the max value in binary tree", () => {
    expect(testBinarySearchTree.findMax())
      .toBe(11);
  });

});
