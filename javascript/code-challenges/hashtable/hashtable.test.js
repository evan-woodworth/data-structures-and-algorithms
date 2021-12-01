'use strict';

const { describe, expect } = require('@jest/globals');
const HashTable = require('./hashtable.js');

describe("Testing hashtable challenge", () => {

  let testHashTable = new HashTable(1024);

  it("Should add a key/value to the hashtable", () => {
    testHashTable.add('Evan','student');
    expect(testHashTable.contains('Evan'))
      .toBe(true);
  });

  it("Should retrieve based on a key and return the value stored", () => {
    expect(testHashTable.get('Evan'))
      .toEqual('student');
  });

  it("Should successfully return null for a key that does not exist in the hashtable", () => {
    expect(testHashTable.get('Nobody'))
      .toEqual(null);
  });

  it("Should successfully handle a collision within the hashtable", () => {
    testHashTable.add('navE','tudents');
    expect(testHashTable.contains('navE'))
      .toBe(true);
  });

  it("Should successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    expect(testHashTable.get('navE'))
      .toEqual('tudents');
  });

  it("Should successfully hash a key to an in-range value", () => {
    testHashTable.add('Fred','something');
    expect(testHashTable.contains('Fred'))
      .toBe(true);
  });
});

