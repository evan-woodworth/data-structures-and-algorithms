const { describe, expect, test } = require('@jest/globals');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  append (value) {
    let newNode = new Node(value);
    if ( !this.head ) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return;
  }

  includes (value) {
    if ( !this.head ) {
      return false;
    } else if ( this.head.value === value ) {
      return true;
    } else {
      let nextEmpty = false;
      let next = this.head;
      while( !nextEmpty ) {
        if ( next.value === value ) {
          return true;
        } else if ( !next.next ) {
          return false;
        }
        next = next.next;
      }
    }
  }

  toString () {
    if ( !this.head ) {
      return 'NULL';
    } else {
      let returnString = '';
      let nextEmpty = false;
      let next = this.head;
      while ( !nextEmpty ) {
        returnString += `{ ${next.value} } -> `;
        if ( !next.next ) {
          return returnString + 'NULL';
        } else {
          next = next.next;
        }
      }
    }
  }

  insertBefore (value, insertValue) {
    let newNode = new Node(insertValue);

    if ( !this.head ) {
      this.head = newNode;
      this.tail = newNode;
      return;
    } else if ( this.head.value === value ) {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
      return;
    } else {
      let nextEmpty = false;
      let next = this.head;
      let current = this.head;
      while( !nextEmpty ) {
        if ( next.value === value ) {
          newNode.next = next;
          newNode.previous = current;
          current.next = newNode;
          return;
        } else if ( !next.next ) {
          newNode.previous = next;
          next.next = newNode;
          return;
        }
        current = next;
        next = next.next;
      }
    }
  }

  insertAfter (value, insertValue) {
    let newNode = new Node(insertValue);

    if ( !this.head ) {
      this.head = newNode;
      this.tail = newNode;
      return;
    } else if ( this.head.value === value ) {
      newNode.previous = this.head;
      newNode.next = this.head.next;
      this.head.next = newNode;
      return;
    } else {
      let nextEmpty = false;
      let next = this.head;
      while( !nextEmpty ) {
        if ( next.value === value ) {
          newNode.next = next.next;
          newNode.previous = next;
          next.next = newNode;
          return;
        } else if ( !next.next ) {
          newNode.previous = next;
          next.next = newNode;
          return;
        }
        next = next.next;
      }
    }
  }

  kthFromEnd (k) {
    if ( !this.head || k < 0 || ( (k > 0) && !this.tail.previous ) ) {
      throw 'Invalid Request';
    } else if ( k === 0 ) {
      return this.tail.value;
    } else {
      let current = this.tail;
      for (let i=0; i < k; i++) {
        if ( !current.previous ) {
          throw 'Invalid Request';
        }
        current = current.previous;
      }
      return current.value;
    }
  }

  zip (firstList, secondList) {
    let newList = new LinkedList;
    let firstIndex = firstList.head;
    let secondIndex = secondList.head;
    while ( firstIndex || secondIndex ) {
      if (firstIndex) {
        newList.append(firstIndex.value);
        firstIndex = firstIndex.next;
      }
      if (secondIndex) {
        newList.append(secondIndex.value);
        secondIndex = secondIndex.next;
      }

    }
    return newList;
  }
}

module.exports = LinkedList;
