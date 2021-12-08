'use strict';

const { describe, expect } = require('@jest/globals');
const { Graph } = require('./graph');

describe("Testing graph challenge", () => {

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

  it("Can successfully add a node to the graph", () => {
    let I = graph.addNode('I');
    expect(graph.adjacencyList.has(I))
      .toBeTruthy();
  });

  it("Can successfully add an edge to the graph", () => {
    graph.addEdge(H, F);
    expect(graph.getNeighbors(H))
      .toContain("Edge { node: Node { value: 'F' }, weight: 0 }")
  });

  it("Can successfully retrieve all nodes from the graph", () => {
    expect(graph.getNodes())
      .toEqual('');
    console.log(graph.getNodes());
  });

  it("Can successfully retrieve all neighbors of a node from the graph", () => {
    expect(graph.getNeighbors(H))
      .toEqual();
    console.log(graph.getNeighbors(H));
  });

  it("Can successfully retrieve the size the graph", () => {
    expect(graph.size())
      .toEqual(9);
  });

});

