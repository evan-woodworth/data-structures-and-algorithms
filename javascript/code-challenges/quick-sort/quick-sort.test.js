'use strict';

const { describe, expect } = require('@jest/globals');
const quickSort = require('./quick-sort.js');

describe("Testing quick sort challenge", () => {

  it("Should properly sort an unsorted list", () => {
    let testArray = [8,4,23,42,16,15];
    quickSort(testArray);
    expect(testArray)
      .toEqual([4,8,15,16,23,42]);
  });
});
