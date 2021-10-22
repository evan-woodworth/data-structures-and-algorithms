'use strict';

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

  insert (value) {
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
}

describe('Testing code challenge: link-list', () => {
  test('Can successfully instantiate an empty linked list', () => {
    let newLinkedList = new LinkedList();
    expect(newLinkedList.head).toBe(null);
  });

  test('Can properly insert into the linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert('some value');
    expect(newLinkedList.toString()).toBe('{ some value } -> NULL');
  });

  test('The head property will properly point to the first node in the linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert('some value');
    expect(newLinkedList.head.value).toBe('some value');
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert('a');
    newLinkedList.insert('b');
    newLinkedList.insert('c');
    expect(newLinkedList.head.next.next.value).toBe('c');
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert('a');
    newLinkedList.insert('b');
    newLinkedList.insert('c');
    expect(newLinkedList.includes('b')).toBe(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert('a');
    newLinkedList.insert('b');
    newLinkedList.insert('c');
    expect(newLinkedList.includes('d')).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert('a');
    newLinkedList.insert('b');
    newLinkedList.insert('c');
    expect(newLinkedList.toString()).toBe('{ a } -> { b } -> { c } -> NULL');
  });
});


