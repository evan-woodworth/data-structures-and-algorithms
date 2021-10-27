'use srtict';

const { describe, expect } = require('@jest/globals');
const LinkedList = require('./linked-list-zip.js');

describe("Testing linked-list-zip challenge", () => {

  let testList01 = new LinkedList();
  testList01.append('1');
  testList01.append('3');
  testList01.append('5');
  testList01.append('7');
  testList01.append('9');
  // testList01 structure:
  // { 1 } -> { 3 } -> { 5 } -> { 7 } -> { 9 } -> NULL

  let testList02 = new LinkedList();
  testList02.append('2');
  testList02.append('4');
  testList02.append('6');
  testList02.append('8');
  testList02.append('10');
  // testList02 structure:
  // { 2 } -> { 4 } -> { 6 } -> { 8 } -> { 10 } -> NULL

  let testList03 = new LinkedList();
  testList03.append('2');
  testList03.append('4');
  // testList03 structure:
  // { 2 } -> { 4 } -> NULL

  let testList04 = new LinkedList();
  // testList04 structure:
  // NULL

  it("Should work as expected when inputs are of equal length", () => {
    expect(LinkedList.prototype.zip(testList01,testList02).toString())
      .toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 7 } -> { 8 } -> { 9 } -> { 10 } -> NULL');
  });

  it("Should work as expected when inputs are not of equal length", () => {
    expect(LinkedList.prototype.zip(testList01,testList03).toString())
      .toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 7 } -> { 9 } -> NULL');
  });

  it("Should return an empty linked list when inputs are empty", () => {
    expect(LinkedList.prototype.zip(testList04,testList04).toString())
      .toBe('NULL');
  });

  it("Should return an unchanged linked list if one input is empty", () => {
    expect(LinkedList.prototype.zip(testList01,testList04).toString())
      .toBe('{ 1 } -> { 3 } -> { 5 } -> { 7 } -> { 9 } -> NULL');
  });

});
