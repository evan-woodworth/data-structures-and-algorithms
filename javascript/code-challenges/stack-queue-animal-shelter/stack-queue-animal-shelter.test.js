'use srtict';

const { describe, expect } = require('@jest/globals');
const AnimalShelter = require('./stack-queue-animal-shelter.js');

describe("Testing stack-and-queue challenge", () => {

  let testShelter = new AnimalShelter();

  it("Can successfully enqueue into the shelter", () => {
    testShelter.enqueue('Merlin', 'cat');

    expect(testShelter.front.name)
      .toBe('Merlin');
  });

  it("Can successfully enqueue multiple values into the shelter", () => {
    testShelter.enqueue('Tiger', 'dog');
    testShelter.enqueue('Furball', 'cat');
    testShelter.enqueue('Flop', 'dog');

    expect(testShelter.front.name)
      .toBe('Merlin');
    expect(testShelter.front.next.name)
      .toBe('Tiger');
    expect(testShelter.front.next.next.name)
      .toBe('Furball');
    expect(testShelter.front.next.next.next.name)
      .toBe('Flop');
  });

  it("Can successfully dequeue out of the shelter the expected value", () => {
    let adoptedAnimal = testShelter.dequeue('dog');
    expect(adoptedAnimal.name)
      .toBe('Tiger');
  });

  it("Can successfully empty the shelter after multiple dequeues", () => {
    testShelter.dequeue('cat');
    testShelter.dequeue('cat');
    testShelter.dequeue('dog');
    expect(testShelter.front)
      .toBe(null);
    expect(testShelter.allowedSpecies['cat'])
      .toBe(null);
    expect(testShelter.allowedSpecies['dog'])
      .toBe(null);
  });

  it("Can successfully instantiate an empty shelter", () => {
    let newShelter = new AnimalShelter();
    expect(newShelter.front)
      .toBe(null);
  });

});
