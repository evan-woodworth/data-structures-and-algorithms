'use srtict';

const { describe, expect } = require('@jest/globals');
const PseudoQueue = require('./stack-queue-pseudo.js');

describe("Testing stack-and-queue challenge", () => {

  let testQueue = new PseudoQueue();

  it("Can successfully enqueue into a queue", () => {
    testQueue.enqueue('first in line');

    expect(testQueue.storage.top.value)
      .toBe('first in line');
  });

  it("Can successfully enqueue multiple values into a queue", () => {
    testQueue.enqueue('second in line');

    expect(testQueue.storage.top.value)
      .toBe('second in line');
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    expect(testQueue.dequeue())
      .toBe('first in line');
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    expect(testQueue.storage.top.value)
      .toBe('second in line');
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    testQueue.dequeue();
    expect(testQueue.storage.top)
      .toBe(null);
  });

  it("Can successfully instantiate an empty queue", () => {
    let newQueue = new PseudoQueue();
    expect(newQueue.storage.top)
      .toBe(null);
  });

});
