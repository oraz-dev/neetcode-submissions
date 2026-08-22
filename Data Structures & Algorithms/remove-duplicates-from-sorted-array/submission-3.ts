class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let write = 0
        for (let read = 0; read < nums.length; read++) {
            if (write == 0 || nums[read] !== nums[write - 1]) {
                nums[write] = nums[read]
                write++
            }
        }

        return write
    }
}
