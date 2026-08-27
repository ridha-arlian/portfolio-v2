export function pseudoRandom(seedStr: string): number {
  let hash = 0
  for (let i = 0; i < seedStr.length; i++) {
    hash = seedStr.charCodeAt(i) + ((hash << 5) - hash)
  }
  const x = Math.sin(hash++) * 10000
  return x - Math.floor(x)
}