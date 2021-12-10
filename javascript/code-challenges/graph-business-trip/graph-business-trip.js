'use strict';

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    let payload = new Node(value);
    this.adjacencyList.set(payload, []);

    return payload;
  }

  addEdge(startNode, endNode, weight = 0) {

    if(!this.adjacencyList.has(startNode) || !this.adjacencyList.has(endNode)) {
      throw new Error('Node Error');
    }

    let neighbors = this.adjacencyList.get(startNode);
    let newEdge = new Edge(endNode, weight);
    neighbors.push(newEdge);
  }

  getNeighbors(node) {
    if(!this.adjacencyList.has(node)) {
      console.log(node)
      throw new Error('GET NEIGHBOR ERROR :: Invalid node');
    }

    return [...this.adjacencyList.get(node)];
  }

  getNodes() {
    return Array.from(this.adjacencyList.keys());
  }

  breadthFirst(startNode) {

    const queue = [];
    const visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);


    while(queue.length) {

      const current = queue.shift();
      let neighbors = this.getNeighbors(current);

      for (let edge of neighbors) {

        let neighbor = edge.node;

        if (!visitedNodes.has(neighbor)) {
          queue.push(neighbor);
          visitedNodes.add(neighbor);
        } else {
          continue;
        }
      }
    }

    return visitedNodes;
  }

  size() {
    return this.adjacencyList.size;
  }
}

function businessTrip(graph, cityArray) {
  const base = cityArray.shift();
  if (cityArray.length) {
    for (const node of graph.adjacencyList) {
      if (node[0].value === base) {
        let neighborList = node[1];
        for (const neighbor of neighborList) {
          if (neighbor.node.value === cityArray[0]) {
            let trip = businessTrip(graph, cityArray);
            if (trip[0]) return [true, trip[1]+neighbor.weight];
            else return [false, 0];
          }
        }
        return [false, 0];
      }
    }
  } else return [true, 0];
}

module.exports = {
  Graph,
  businessTrip
};
