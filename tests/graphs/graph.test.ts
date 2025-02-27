import { Graph } from '../../graphs/graph';
import {} from 'jest';

describe('Graph Data Structure', () => {
  //creates a graph instance
  test('creates a Graph Instance', () => {
    expect(new Graph() instanceof Graph).toBe(true);
  });
});
