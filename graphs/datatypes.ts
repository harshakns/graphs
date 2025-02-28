export interface GraphNode<T> {
  value: T;
  equals: (a: T, b: T) => boolean;
}

export interface WeightedRelation<T, V extends GraphNode<T>> {
  weight: number;
  vertex: V;
}

export abstract class AbstractGraph<T, V extends GraphNode<T>> {
  public abstract getAdjacencyList(): Map<V, V[] | WeightedRelation<T, V>[]>; //takes into account the weighted graphs.
  public abstract addVertex(vertex: V): void;
  public abstract addEdge(vertex1: V, vertex2: V): void;
  public abstract removeVertex(vertex: V): void;
  public abstract removeEdge(vertex1: V, vertex2: V): void;
  public abstract printGraph(): void;
}
