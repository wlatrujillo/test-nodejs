module.exports.recoverSecret = function (triplets) {
  const graph = {}
  triplets.forEach(triplet => {
    triplet.forEach(node => {
      if (!graph[node]) {
        graph[node] = new Set()
      }
    })
    graph[triplet[0]].add(triplet[1])
    graph[triplet[1]].add(triplet[2])
  })

  const visited = new Set()
  const result = []

  const dfs = (node) => {
    if (visited.has(node)) {
      return
    }
    visited.add(node)
    if (graph[node]) {
      graph[node].forEach(neighbor => {
        dfs(neighbor)
      })
    }
    result.push(node)
  }

  Object.keys(graph).forEach(node => {
    dfs(node)
  })

  return result.reverse().join('')
}
