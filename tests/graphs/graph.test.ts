import { Graph } from '../../graphs/graph';

describe('Graph Data Structure', () => {
  const g = new Graph();
  const adjacencyList = g.getAdjacencyList();
  //creates a graph instance
  test('creates a Graph Instance', () => {
    expect(g instanceof Graph).toBe(true);
  });

  test('happy-flow: addVertex only adds the vertices', () => {
    g.addVertex('A');
    g.addVertex('B');
    g.addVertex('C');
    g.addVertex('D');
    //TODO: need refactor the code with a extended matcher
    const adjArray = Array.from(adjacencyList.keys());
    expect(adjArray.length).toEqual(4);
    expect(adjArray.includes('A')).toBeTruthy();
    expect(adjArray.includes('B')).toBeTruthy();
    expect(adjArray.includes('C')).toBeTruthy();
    expect(adjArray.includes('D')).toBeTruthy();
    expect(adjacencyList.get('A')!.length).toEqual(0);
    expect(adjacencyList.get('B')!.length).toEqual(0);
    expect(adjacencyList.get('C')!.length).toEqual(0);
    expect(adjacencyList.get('D')!.length).toEqual(0);
  });

  test('happy-flow: addEdge only adds the edges given two vertices v1 and v2 are mentioned', () => {
    g.addEdge('A', 'B', false);
    const adjArray = Array.from(adjacencyList.keys());
    expect(adjArray.length).toEqual(4);
    expect(adjacencyList.get('A')!.length).toEqual(1);
    expect(adjacencyList.get('A')![0]).toEqual('B');
    expect(adjacencyList.get('B')!.length).toEqual(1);
    expect(adjacencyList.get('B')![0]).toEqual('A');
    expect(adjacencyList.get('C')!.length).toEqual(0);
    expect(adjacencyList.get('D')!.length).toEqual(0);
  });

  test('happy-flow: addEdge only adds the directional edges given two vertices v1 and v2 are \
  mentioned and isDirectional flag is set to true', () => {
    g.addEdge('C', 'D', true);
    const adjArray = Array.from(adjacencyList.keys());
    expect(adjArray.length).toEqual(4);
    expect(adjacencyList.get('A')!.length).toEqual(1);
    expect(adjacencyList.get('A')![0]).toEqual('B');
    expect(adjacencyList.get('B')!.length).toEqual(1);
    expect(adjacencyList.get('B')![0]).toEqual('A');
    expect(adjacencyList.get('C')!.length).toEqual(1);
    expect(adjacencyList.get('C')![0]).toEqual('D');
    expect(adjacencyList.get('D')!.length).toEqual(0);
  });

  test('happy-flow: removeVertex only removes the vertex mentioned', () => {
    g.removeVertex('A');
    const adjArray = Array.from(adjacencyList.keys());
    expect(adjArray.length).toEqual(3);
    expect(adjacencyList.get('A')).toBeUndefined();
    for (let [vertex, adjacents] of adjacencyList) {
      expect(adjacents.includes('A')).toBeFalsy();
    }
  });

  test('happy-flow: removeEdge only removes the edges given two vertices v1 and v2 are mentioned', () => {
    g.removeEdge('C', 'D');
    expect(adjacencyList.get('C')!.includes('D')).toBeFalsy();
    expect(adjacencyList.get('D')!.includes('C')).toBeFalsy();
  });

  test('happy-flow: Adding same vertex again and again will not create duplicate copies of the vertex', () => {
    g.addVertex('E');
    expect(adjacencyList.get('E')!.length).toEqual(0);
    g.addVertex('E');
    expect(adjacencyList.get('E')!.length).toEqual(0);
  });

  test('happy-flow: Adding same edge again and again will not create new vertex', () => {
    g.addEdge('D', 'E', true);
    expect(adjacencyList.get('D')!.includes('E')).toBeTruthy();
    expect(adjacencyList.get('E')!.includes('D')).toBeFalsy();
    g.addEdge('D', 'E', true);
    expect(adjacencyList.get('D')!.includes('E')).toBeTruthy();
    expect(adjacencyList.get('E')!.includes('D')).toBeFalsy();
  });

  //negatie test cases
  //removing unknown vertex
  test('removing unknown vertex is silently ignored', () => {
    g.removeVertex('Z');
    //TODO: add a check to check if the function will not throw error
    expect(adjacencyList.has('Z')).toBeFalsy();
  });
  //removing unknown
  test('removing unknown edge is silently ignored', () => {
    g.removeEdge('G', 'H');
    //TODO: add a check to check if the function will not throw error
    expect(adjacencyList.has('G')).toBeFalsy();
    expect(adjacencyList.has('H')).toBeFalsy();
  });
});
