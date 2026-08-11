class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const transformed = t.split("").sort()
        return s.split("").sort().every((val, i) => val == transformed[i])
    }
}
