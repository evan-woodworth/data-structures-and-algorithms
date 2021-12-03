'use strict';

const { describe, expect } = require('@jest/globals');
const { HashTable, leftJoin } = require('./hashmap-left-join.js');

describe("Testing hashmap-left-join challenge", () => {

  let leftTable = new HashTable(1024);
  let rightTable = new HashTable(1024);

  leftTable.add('fond', 'enamored');
  leftTable.add('wrath', 'anger');
  leftTable.add('diligent', 'employed');
  leftTable.add('outfit', 'garb');
  leftTable.add('guide', 'usher');

  rightTable.add('fond', 'averse');
  rightTable.add('wrath', 'delight');
  rightTable.add('diligent', 'idle');
  rightTable.add('guide', 'follow');
  rightTable.add('flow', 'jam');

  it("Can successfully left join two hash tables", () => {
    let joinedArray = leftJoin(leftTable,rightTable);
    expect(joinedArray)
      .toEqual([
        [ 'diligent', 'employed', 'idle' ],
        [ 'outfit', 'garb' ],
        [ 'fond', 'enamored', 'averse' ],
        [ 'guide', 'usher', 'follow' ],
        [ 'wrath', 'anger', 'delight' ]
      ]);
  });

});
