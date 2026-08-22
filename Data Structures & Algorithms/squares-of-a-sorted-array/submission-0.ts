class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {
        const res = new Array(nums.length)

        let left = 0
        let right = nums.length - 1

        for (let position = nums.length - 1; position >= 0; position--) {
            const leftt = nums[left] ** 2
            const rightt = nums[right] ** 2

            if (leftt > rightt) {
                res[position] = leftt
                left++
            } else {
                res[position] = rightt
                right--
            }
        }
        return res
    }
}
