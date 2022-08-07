const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];

const INF = Number.MAX_SAFE_INTEGER;

const minDistance = (distancias, visitados) => {
  let min = INF;
  let minIndex = -1;
  for (let v = 0; v < distancias.length; v++) {
    if (visitados[v] === false && distancias[v] <= min) {
      min = distancias[v];
      minIndex = v;
    }
  }
  return minIndex;
};

/**
 * Algoritmo para buscar los caminos mas cortos
 * @param {int[]} graph
 * @param {int} src
 */
const dijkstra = (graph, src) => {
  const distancias = [];
  const visitados = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    distancias[i] = INF;
    visitados[i] = false;
  }
  distancias[src] = 0;
  for (let i = 0; i < length - 1; i++) {
    const u = minDistance(distancias, visitados);
    visitados[u] = true;
    for (let v = 0; v < length; v++) {
      if (
        !visitados[v] &&
        graph[u][v] !== 0 &&
        distancias[u] !== INF &&
        distancias[u] + graph[u][v] < distancias[v]
      ) {
        distancias[v] = distancias[u] + graph[u][v];
      }
    }
  }
  return distancias;
};

console.log(dijkstra(graph, 0));
