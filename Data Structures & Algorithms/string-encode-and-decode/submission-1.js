class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      if (strs == [""]) return [""]
      for (let i = 0; i < strs.length; i++) {
        strs[i] = strs[i].length + "#" + strs[i]
      }
      return strs.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      const strs = []
      let i = 0
      while(i < str.length) {
        let j = i
        while(str[j] !== "#") j++
        const length = parseInt(str.slice(i, j), 10)
        strs.push(str.slice(j + 1, j + 1 + length))
        i = j + 1 + length
      }
      return strs
    }
}
