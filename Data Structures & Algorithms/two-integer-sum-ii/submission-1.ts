class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
      let left = 1
      let right = numbers.length

      while (left < right) {
        const sum = numbers[left - 1] + numbers[right - 1]

        if (sum > target) right--
        else if (sum < target) left++
        else return [left, right]
      }
    }
}
