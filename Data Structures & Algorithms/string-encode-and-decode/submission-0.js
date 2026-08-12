class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      if (strs == [""]) return [""]
      return strs.forEach(str => {
        str = str.length + '#' + str
      }).join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      const strs = []

      return strs
    }
}
