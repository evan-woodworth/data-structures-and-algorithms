'use strict';

const { describe, expect } = require('@jest/globals');
const { Graph, businessTrip } = require('./graph-business-trip.js');

describe("Testing graph-breadth-first challenge", () => {

  let graph = new Graph();

  let A = graph.addNode('Pandora');
  let B = graph.addNode('Arendelle');
  let C = graph.addNode('Metroville');
  let D = graph.addNode('Monstropolis');
  let E = graph.addNode('Narnia');
  let F = graph.addNode('Naboo');
  
  graph.addEdge(A, B, 150);
  graph.addEdge(B, A, 150);
  graph.addEdge(A, C, 82);
  graph.addEdge(C, A, 82);
  graph.addEdge(B, C, 99);
  graph.addEdge(C, B, 99);
  graph.addEdge(B, D, 42);
  graph.addEdge(D, B, 42);
  graph.addEdge(C, D, 105);
  graph.addEdge(D, C, 105);
  graph.addEdge(C, E, 37);
  graph.addEdge(E, C, 37);
  graph.addEdge(C, F, 26);
  graph.addEdge(F, C, 26);
  graph.addEdge(D, F, 73);
  graph.addEdge(F, D, 73);
  graph.addEdge(E, F, 250);
  graph.addEdge(F, E, 250);

  it("Can successfully plot a valid trip", () => {
    expect(businessTrip(graph,['Pandora', 'Metroville', 'Monstropolis']))
      .toEqual([true, 187]);
  });

  it("Can unsuccesfully plot an invalid trip", () => {
    expect(businessTrip(graph,['Narnia', 'Arendelle']))
      .toEqual([false, 0]);
  });

});

