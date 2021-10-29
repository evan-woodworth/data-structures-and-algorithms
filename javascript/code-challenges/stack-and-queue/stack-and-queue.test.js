'use srtict';

const { describe, expect } = require('@jest/globals');
const { Stack, Queue } = require('./stack-and-queue.js');

describe("Testing stack-and-queue challenge", () => {

  let testStack = new Stack();
  let testQueue = new Queue();

  it("Can successfully push onto a stack", () => {
    testStack.push('A pushed value');

    expect(testStack.peek())
      .toBe('A pushed value');
  });

  it("Can successfully push multiple values onto a stack", () => {
    testStack.push('A second pushed value');

    expect(testStack.peek())
      .toBe('A second pushed value');
  });

  it("Can successfully pop off the stack", () => {
    expect(testStack.pop())
      .toBe('A second pushed value');

  });

  it("Can successfully peek the next item on the stack", () => {
    expect(testStack.peek())
      .toBe('A pushed value');
  });

  it("Can successfully empty a stack after multiple pops", () => {
    testStack.pop();
    console.log(testStack.isEmpty());
    expect(testStack.isEmpty())
      .toBe(true);
  });

  it("Can successfully instantiate an empty stack", () => {
    let newStack = new Stack();
    expect(newStack.isEmpty())
      .toBe(true);
  });

  it("Calling pop or peek on empty stack raises exception", () => {
    expect(() => {testStack.pop();})
      .toThrow();
    expect(() => {testStack.peek();})
      .toThrow();
  });

  it("Can successfully enqueue into a queue", () => {
    testQueue.enqueue('first in line');

    expect(testQueue.peek())
      .toBe('first in line');
  });

  it("Can successfully enqueue multiple values into a queue", () => {
    testQueue.enqueue('second in line');

    expect(testQueue.front.next.value)
      .toBe('second in line');
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    expect(testQueue.dequeue())
      .toBe('first in line');
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    expect(testQueue.peek())
      .toBe('second in line');
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    testQueue.dequeue();
    expect(testQueue.isEmpty())
      .toBe(true);
  });

  it("Can successfully instantiate an empty queue", () => {
    let newQueue = new Queue();
    expect(newQueue.isEmpty())
      .toBe(true);
  });

  it("Calling dequeue or peek on empty queue raises exception", () => {
    expect(() => {testQueue.dequeue();})
      .toThrow();
    expect(() => {testQueue.peek();})
      .toThrow();
  });

});
