class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(n: number[], target: number): number[] {
      let left  = 0, right = n.length - 1

      while (left < right) {
        const summ = n[left] + n[right]
        if (summ == target) return [left + 1, right + 1]
        else if (summ < target) left++
        else right--
      }

      [left + 1, right + 1]
    }
}
