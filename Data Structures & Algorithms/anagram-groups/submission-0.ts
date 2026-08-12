class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */

  groupAnagrams(strs: string[]): string[][] {
    const hashMap = new Map<string, string[]>()

    for(const str of strs) {
      const key = str.split("").sort().join("")
      if(hashMap.has(key)) {
        hashMap.set(key, [...hashMap.get(key), str])
      } else {
        hashMap.set(key, [str])
      }
    }

    return [...hashMap.values()]
  }
}
