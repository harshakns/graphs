export class Graph<T> {
  protected adjacencyList: Map<T, T[]>;

  constructor() {
    this.adjacencyList = new Map<T, T[]>();
  }

  public getAdjacencyList() {
    return this.adjacencyList;
  }

  public addVertex(vertex: T) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  public addEdge(vertex1: T, vertex2: T, isdirectional: Boolean) {
    if (!this.adjacencyList.has(vertex1)) {
      this.adjacencyList.set(vertex1, []);
    }
    if (!this.adjacencyList.has(vertex2)) {
      this.adjacencyList.set(vertex2, []);
    }

    if (!this.adjacencyList.get(vertex1)!.includes(vertex2)) {
      this.adjacencyList.get(vertex1)!.push(vertex2);
    }
    if (!isdirectional) {
      if (!this.adjacencyList.get(vertex2)!.includes(vertex1)) {
        this.adjacencyList.get(vertex2)!.push(vertex1);
      }
    }
  }

  public removeVertex(vertex: T) {
    this.adjacencyList.delete(vertex);

    for (let [ver, adjList] of this.adjacencyList) {
      if (adjList.includes(vertex)) {
        this.adjacencyList.set(
          ver,
          adjList.filter((v) => v !== vertex)
        );
      }
    }
  }

  public removeEdge(vertex1: T, vertex2: T) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.set(
        vertex1,
        this.adjacencyList.get(vertex1)!.filter((v) => v !== vertex2)
      );

      this.adjacencyList.set(
        vertex2,
        this.adjacencyList.get(vertex2)!.filter((v) => v !== vertex1)
      );
    }
  }

  public printGraph() {
    for (let [ver, adjList] of this.adjacencyList) {
      console.log(ver, ' -> ', adjList.join(','));
    }
  }
}
