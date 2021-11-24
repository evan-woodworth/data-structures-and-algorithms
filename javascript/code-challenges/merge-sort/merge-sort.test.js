'use strict';

const { describe, expect } = require('@jest/globals');
const mergeSort = require('./merge-sort.js');

describe("Testing merge sort challenge", () => {

  it("Should properly sort an unsorted list", () => {
    expect(mergeSort([8,4,23,42,16,15]))
      .toEqual([4,8,15,16,23,42]);
  });

});
