'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  push (value) {
    let newNode = new Node(value);
    if(this.top) this.top.previous = newNode;
    newNode.next = this.top;
    this.top = newNode;
    return;
  }

  pop () {
    if (!this.top) {
      throw('This stack is empty.');
    }
    let tempValue = this.top.value;
    if (this.top.next) {
      this.top.next.previous = null;
      this.top = this.top.next;
    } else {
      this.top = null;
    }
    return tempValue;
  }

  peek () {
    if (!this.top) {
      throw('This stack is empty.');
    }
    return this.top.value;
  }

  isEmpty () {
    return (!this.top);
  }
}

class Queue {
  constructor(front = null, rear = null) {
    this.front = front;
    this.rear = rear;
  }

  enqueue (value) {
    let newNode = new Node(value);
    if (!this.front) this.front = newNode;
    if (this.rear) {
      this.rear.next = newNode;
      newNode.previous = this.rear;
    }
    this.rear = newNode;
  }

  dequeue () {
    if (!this.front) throw('This queue is empty.');
    let tempValue = this.front.value;
    if (this.front.next) {
      this.front.next.previous = null;
      this.front = this.front.next;
    } else {
      this.front = null;
      this.rear = null;
    }
    return tempValue;
  }

  peek () {
    if (!this.front) throw('This queue is empty.');
    return this.front.value;
  }

  isEmpty () {
    return (!this.front);
  }
}

module.exports = {
  Stack,
  Queue,
};
