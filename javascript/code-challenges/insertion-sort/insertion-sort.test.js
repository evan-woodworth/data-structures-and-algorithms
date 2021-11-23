'use strict';

const { describe, expect } = require('@jest/globals');
const insertionSort = require('./insertion-sort.js');

describe("Testing linked-list-zip challenge", () => {

  it("Should properly sort an unsorted list", () => {
    expect(insertionSort([8,4,23,42,16,15]))
      .toEqual([4,8,15,16,23,42]);
  });

});
