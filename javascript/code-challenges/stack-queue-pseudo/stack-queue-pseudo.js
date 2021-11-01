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
      return null;
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
      return null;
    }
    return this.top.value;
  }

}

class PseudoQueue {
  constructor(value = null) {
    this.storage = new Stack(value);
    this.holder = new Stack();
  }

  enqueue (value) {
    this.storage.push(value);
    return;
  }

  dequeue () {
    let tempValue = null;
    while (this.storage.peek()) {
      this.holder.push(this.storage.pop());
    }
    tempValue = this.holder.pop();
    while (this.holder.peek()) {
      this.storage.push(this.holder.pop());
    }
    return tempValue;
  }
}

module.exports = PseudoQueue;
