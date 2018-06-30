import storage from 'electron-json-storage'
import to from 'await-to-js'

export default function(version) {
  return async function noOp() {
    const [err, meta] = await to(storage.getAsync('meta'))
    meta.version = version;
    await storage.setAsync('meta', meta)
  }
}