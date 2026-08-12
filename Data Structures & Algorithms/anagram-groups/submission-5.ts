class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */

  groupAnagrams(strs: string[]): string[][] {
    const hashMap = new Map<string, string[]>()

    for (const str of strs) {
      const count = new Array(26).fill(0)
      for (const char of str) {
        count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1
      }
      const key = count.join(',')
      if (!hashMap.has(key)) hashMap.get(key).push(str)
      else hashMap.get(key).push(str)
    }

    return [...hashMap.values()]
  }
}
