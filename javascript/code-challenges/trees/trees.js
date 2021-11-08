'use strict';

class Node {
  constructor (value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor (root = null) {
    this.root = root;
  }

  preOrder (current = null) {
    if (!current) {
      if (!this.root) throw("The tree is empty.");
      current = this.root;
    }

    let returnString = current.value;

    if (current.left) {
      returnString += ', ' + this.preOrder(current.left);
    }

    if (current.right) {
      returnString += ', ' + this.preOrder(current.right);
    }

    return returnString;
  }

  inOrder (current = null) {
    if (!current) {
      if (!this.root) throw("The tree is empty.");
      current = this.root;
    }

    let returnString = '';
    if (current.left) {
      returnString += this.inOrder(current.left) + ', ';
    }

    returnString += current.value;

    if (current.right) {
      returnString += ', ' + this.inOrder(current.right);
    }

    return returnString;
  }

  postOrder (current = null) {
    if (!current) {
      if (!this.root) throw("The tree is empty.");
      current = this.root;
    }

    let returnString = '';
    if (current.left) {
      returnString += this.postOrder(current.left) + ', ';
    }

    if (current.right) {
      returnString += this.postOrder(current.right) + ', ';
    }

    returnString += current.value;

    return returnString;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor (root = null) {
    super(root);
  }

  add (value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let breadthQ = [].push(this.root);
    while (breadthQ.length) {
      let front = breadthQ.unshift();
      if( !front.left ) {
        front.left = new Node(value);
        return;
      } else {
        breadthQ.push(front.left);
      }
      if( !front.right ) {
        front.right = new Node(value);
        return;
      } else {
        breadthQ.push(front.right);
      }
    }
  }

  contains (value) {
    return (super.preOrder().contains(value));
  }
}

module.exports = {
  Node,
  BinarySearchTree
};
