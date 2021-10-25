'use srtict';

const { describe, expect, test } = require('@jest/globals');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append (value) {
    let newNode = new Node(value);
    if ( !this.head ) {
      this.head = newNode;
    } else {
      let nextEmpty = false;
      let next = this.head;
      while( !nextEmpty ) {
        if ( !next.next ) {
          next.next = newNode;
          nextEmpty = true;
        } else {
          next = next.next;
        }
      }
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
      return;
    } else if ( this.head.value === value ) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    } else {
      let nextEmpty = false;
      let next = this.head;
      let current = this.head;
      while( !nextEmpty ) {
        if ( next.value === value ) {
          newNode.next = next;
          current.next = newNode;
          return;
        } else if ( !next.next ) {
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
      return;
    } else if ( this.head.value === value ) {
      newNode.next = this.head.next;
      this.head.next = newNode;
      return;
    } else {
      let nextEmpty = false;
      let next = this.head;
      while( !nextEmpty ) {
        if ( next.value === value ) {
          newNode.next = next.next;
          next.next = newNode;
          return;
        } else if ( !next.next ) {
          next.next = newNode;
          return;
        }
        next = next.next;
      }
    }
  }
}


describe('Testing code challenge: linked-list-insertions', () => {

  // establishing test data
  let newLinkedList = new LinkedList();

  test('Should successfully add a node to the end of the linked list', () => {
    // desired structure: { a } -> NULL
    newLinkedList.append('a');
    expect(newLinkedList.toString()).toBe('{ a } -> NULL');
  });

  test('Should successfully add multiple nodes to the end of a linked list', () => {
    // desired structure: { a } -> { b } -> { c } -> NULL
    newLinkedList.append('b');
    newLinkedList.append('c');
    newLinkedList.append('d');
    expect(newLinkedList.toString()).toBe('{ a } -> { b } -> { c } -> { d } -> NULL');
  });

  test('Should successfully insert a node before a node located in the middle of a linked list', () => {
    // desired structure: { a } -> { b } -> { b.5 } -> { c } -> { d } -> NULL
    newLinkedList.insertBefore('c', 'b.5');
    expect(newLinkedList.toString()).toBe('{ a } -> { b } -> { b.5 } -> { c } -> { d } -> NULL');
  });

  test('Should successfully insert a node before the first node of a linked list', () => {
    // desired structure: { 0.5 } -> { a } -> { b } -> { b.5 } -> { c } -> { d } -> NULL
    newLinkedList.insertBefore('a', '0.5');
    expect(newLinkedList.toString()).toBe('{ 0.5 } -> { a } -> { b } -> { b.5 } -> { c } -> { d } -> NULL');
  });

  test('Should successfully insert after a node in the middle of the linked list', () => {
    // desired structure: { 0.5 } -> { a } -> { b } -> { b.5 } -> { c } -> { c.5 } -> { d } -> NULL
    newLinkedList.insertAfter('c', 'c.5');
    expect(newLinkedList.toString()).toBe('{ 0.5 } -> { a } -> { b } -> { b.5 } -> { c } -> { c.5 } -> { d } -> NULL');
  });

  test('Should successfully insert a node after the last node of the linked list', () => {
    // desired structure: { 0.5 } -> { a } -> { b } -> { b.5 } -> { c } -> { c.5 } -> { d } -> { d.5 } -> NULL
    newLinkedList.insertAfter('d', 'd.5');
    expect(newLinkedList.toString()).toBe('{ 0.5 } -> { a } -> { b } -> { b.5 } -> { c } -> { c.5 } -> { d } -> { d.5 } -> NULL');
  });

});
