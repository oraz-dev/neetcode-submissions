class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

      // [100, 4, 200, 1, 3, 2]
      // 100 - > first we check if it has 100 - 1
      // if it doenst have it then it means it is starting 
      // point of sequence
      // then we look for the end of sequence
      // how we find sequence? 
      // we iterate till we not find the the continuation of the seq
      // then assign longest to longest length found
      let numSet = new Set(nums)
      let longest = 0

      for (let num of nums) {
        if (!numSet.has(num - 1)) {
          let length = 1
          while (numSet.has(num + length)) {
            length++
          }
          longest = Math.max(longest, length)
        }
      }

      return longest
    }
}
