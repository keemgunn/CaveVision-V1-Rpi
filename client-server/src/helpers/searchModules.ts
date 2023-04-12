/**
 * @param importMetaGlob import.meta.glob('your/seach/directory/query')
 */
export default function searchModules (importMetaGlob: Record<string, () => Promise<unknown>>): Array<string> {
  const componentArray: Array<string> = [];

  for (const key of Object.keys(importMetaGlob)) componentArray.push(key)

  return componentArray
}

