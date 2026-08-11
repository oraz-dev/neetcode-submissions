class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Set<number>()
        for (const item of nums) {
            if (seen.has(item)) return true
            seen.add(item)
        }
        return false
    }
}
