import v011v021 from './v011v021'
import v021v022 from './v021v022'
import noOp from './no-op'
import storage from 'electron-json-storage'
import to from 'await-to-js'
import _ from 'lodash'

const migrations = {
  'v011:v021': v011v021,
  'v021:v022': v021v022,
  'v022:v023': noOp('0.2.3'),
}

export function dfs(graph, start, end, visited = {}) {
  visited[start] = true

  if(!_.isArray(graph[start])) return []
  
  for(let next of graph[start]) {
    if(visited[next]) continue
    
    if(next === end) {
      return [`${start}:${end}`]
    }
    else {
      const verdict = dfs(graph, next, end, visited)
      
      if(_.isArray(verdict) && verdict.length > 0) {
        verdict.push(`${start}:${next}`)
        return verdict
      }
      else continue
    }
  }

  return []
}

export function findPath(migrations, ownVersion, currentVersion) {
  let paths = _.mapValues(migrations, () => true)
  let graph = {}
  
  _.forEach(migrations, (_, ids) => {
    const [parent, child] = ids.split(':')
    graph[parent] = graph[parent] || []
    graph[parent].push(child)
    graph[child] = graph[child] || []
  })

  const from = `v${ownVersion.split('.').join('')}`
  const to = `v${currentVersion.split('.').join('')}`

  // perform DFS from `from` to `to`
  return _(dfs(graph, from, to)).reverse().value()
}

export default async function migrate() {
  const currentVersion = process.env.REACT_VERSION
  const [_, meta] = await to(storage.getAsync('meta'))
  const ownVersion = meta.version
  
  const path = findPath(migrations, ownVersion, currentVersion)
  if(path.length === 0) {
    console.info("No migrations needed. Version found and current are same")
  }
  
  for(let p of path) {
    const [from, to] = p.split(':')
    console.info(`>>> Applying migration from v${from} to v${to}`)
    await migrations[p].call()
  }
}
