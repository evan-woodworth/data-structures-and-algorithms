'use strict';

const { describe, expect } = require('@jest/globals');
const { Node, treeIntersection, BinarySearchTree } = require('./tree-intersection.js');

describe("Testing tree-intersection challenge", () => {

  let firstTree = new BinarySearchTree();
  let firstTreeValues = [3,4,8,15,2];
  let secondTree = new BinarySearchTree();
  let secondTreeValues = [4,7,15,1,2];

  firstTree.root = new Node(3);
  firstTree.root.left = new Node(4);
  firstTree.root.right = new Node(8);
  firstTree.root.right.left = new Node(15);
  firstTree.root.right.right = new Node(2);

  secondTree.root = new Node(4);
  secondTree.root.left = new Node(7);
  secondTree.root.right = new Node(15);
  secondTree.root.right.left = new Node(1);
  secondTree.root.right.right = new Node(2);


  it("Can successfully list all of the common values of two trees", () => {
    expect(treeIntersection(firstTree, secondTree))
      .toEqual([4,15,2]);
  });

});
