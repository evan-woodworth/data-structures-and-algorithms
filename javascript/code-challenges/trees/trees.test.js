'use srtict';

const { describe, expect } = require('@jest/globals');
const { Node, BinarySearchTree } = require('./trees.js');

describe("Testing stack-and-queue challenge", () => {

  let testBinarySearchTree = new BinarySearchTree();
  testBinarySearchTree.root = new Node("A");
  testBinarySearchTree.root.left = new Node("B");
  testBinarySearchTree.root.left.left = new Node("D");
  testBinarySearchTree.root.left.right = new Node("E");
  testBinarySearchTree.root.right = new Node("C");
  testBinarySearchTree.root.right.left = new Node("F");

  it("Can successfully instantiate an empty tree", () => {
    let newTree = new BinarySearchTree();

    expect(newTree.root)
      .toBe(null);
  });

  it("Can successfully instantiate a tree with a single root node", () => {
    let newTree = new BinarySearchTree();
    newTree.root = new Node('A');

    expect(newTree.root.value)
      .toBe('A');
  });

  it("Can successfully add a left child and right child to a single root node", () => {
    let newTree = new BinarySearchTree();
    newTree.add('A');
    newTree.add('B');
    newTree.add('C');

    expect(newTree.root.value)
      .toBe('A');
    expect(newTree.root.left.value)
      .toBe('B');
    expect(newTree.root.right.value)
      .toBe('C');
  });

  it("Can successfully return a collection from a preorder traversal", () => {
    expect(testBinarySearchTree.preOrder())
      .toBe("A, B, D, E, C, F");
  });

  it("Can successfully return a collection from an inorder traversal", () => {
    expect(testBinarySearchTree.inOrder())
      .toBe("D, B, E, A, F, C");
  });

  it("Can successfully return a collection from a postorder traversal", () => {
    expect(testBinarySearchTree.postOrder())
      .toBe("D, E, B, F, C, A");
  });

});
