'use srtict';

const { describe, expect } = require('@jest/globals');
const LinkedList = require('./linked-list-kth.js');

describe("Testing linked-list-kth challenge", () => {

  let testList = new LinkedList();
  testList.append('a');
  testList.append('b');
  testList.append('c');
  testList.append('d');
  testList.append('e');
  // testList structure:
  // { a } -> { b } -> { c } -> { d } -> { e } -> NULL
  testList.toString();

  it("Should work as expected when the linked list is of size 1", () => {
    let shortList = new LinkedList();
    shortList.append('a');
    expect(shortList.kthFromEnd(0)).toBe('a');
  });

  it("Should return an exception when k is greater than the length of the linked list", () => {
    expect(() => {testList.kthFromEnd(10);}).toThrow();
  });

  it("Should return an exception when k and the length of the list are the same", () => {
    expect(() => {testList.kthFromEnd(5);}).toThrow();
  });

  it("Should return an exception when k is not a positive integer", () => {
    expect(() => {testList.kthFromEnd(-2);}).toThrow();
  });

  it("Should return the correct value when k is somewhere in the middle of the list", () => {
    expect(testList.kthFromEnd(3)).toBe('b');
  });

});
