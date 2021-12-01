'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);
    if ( ! this.head ) {
      this.head = node;
      return;
    }

    let current = this.head;
    while( current.next ) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while(current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    let sum = 0;

    for (let i = 0; i < key.length; i ++) {
      sum += key.charCodeAt(i);
    }

    return (sum * 599) % this.size;
  }

  add(key, value) {
    let index = this.hash(key);
    let bucket = this.map[index];
    let payload = {
      [key]: value
    };

    if (bucket) {
      bucket.append(payload);
    } else {
      let list = new LinkedList();
      list.append(payload);
      this.map[index] = list;
    }
  }

  contains(key) {
    let index = this.hash(key);
    return (index in this.map);
  }

  get(key) {
    let index = this.hash(key);
    if (!(index in this.map)) return null;
    let current = this.map[index].head;
    if (key in current.value) return current.value[key];
    while (current.next) {
      current = current.next;
      if (key in current.value) return current.value[key];
    }
    return null;
  }
}

module.exports = HashTable;
