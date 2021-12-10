'use strict';

const { describe, expect } = require('@jest/globals');
const { Graph } = require('./graph-depth-first.js');

describe("Testing graph-breadth-first challenge", () => {

  let graph = new Graph();

  let A = graph.addNode('Pandora');
  let B = graph.addNode('Arendelle');
  let C = graph.addNode('Metroville');
  let D = graph.addNode('Monstropolis');
  let E = graph.addNode('Narnia');
  let F = graph.addNode('Naboo');
  
  graph.addEdge(A, B, 150);
  graph.addEdge(A, C, 82);
  graph.addEdge(B, C, 99);
  graph.addEdge(B, D, 42);
  graph.addEdge(C, D, 105);
  graph.addEdge(C, E, 37);
  graph.addEdge(C, F, 26);
  graph.addEdge(D, F, 73);
  graph.addEdge(E, F, 250);

  it("Can successfully return a depth-first array of nodes", () => {
    // starting with A:
    // A, B, C, D, F, E
    expect(graph.depthFirst(A))
      .toEqual(['Pandora','Arendelle','Metroville', 'Monstropolis', 'Naboo', 'Narnia']);
  });

});

