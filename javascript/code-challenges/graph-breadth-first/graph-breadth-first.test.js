'use strict';

const { describe, expect } = require('@jest/globals');
const Graph = require('./graph-breadth-first.js');

describe("Testing graph-breadth-first challenge", () => {

  let graph = new Graph();

  let A = graph.addNode('A');
  let B = graph.addNode('B');
  let C = graph.addNode('C');
  let D = graph.addNode('D');
  let E = graph.addNode('E');
  let F = graph.addNode('F');
  let G = graph.addNode('G');
  let H = graph.addNode('H');
  
  graph.addEdge(A, D);
  graph.addEdge(A, C);
  graph.addEdge(A, B);
  graph.addEdge(D, F);
  graph.addEdge(B, C);
  graph.addEdge(B, E);
  graph.addEdge(C, F);
  graph.addEdge(C, E);
  graph.addEdge(C, B);
  graph.addEdge(F, G);
  graph.addEdge(G, H);

  it("Can successfully navigate a graph breadth-first", () => {
    let theEntries = graph.breadthFirst(A).entries();
    let displayArray = [];
    
    for (const entry of theEntries ) {
      displayArray.push(entry);
    }
    expect(displayArray)
      .toEqual([[{"value": "A"}, {"value": "A"}], [{"value": "D"}, {"value": "D"}], [{"value": "C"}, {"value": "C"}], [{"value": "B"}, {"value": "B"}], [{"value": "F"}, {"value": "F"}], [{"value": "E"}, {"value": "E"}], [{"value": "G"}, {"value": "G"}], [{"value": "H"}, {"value": "H"}]]);
  });

});

