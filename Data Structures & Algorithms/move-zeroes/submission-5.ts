class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        let write = 0
        for (let read = 0; read < nums.length; read++) {
            if (nums[read] !== 0) {
                nums[write] = nums[read]
                write++
            }
        }

        while(write < nums.length) {
            nums[write] = 0
            write++
        }
    }
}
