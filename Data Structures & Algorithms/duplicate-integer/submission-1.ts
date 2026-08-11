class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hashMap = new Map()
        nums.forEach(item => {
            if(hashMap.has(item)) {
                hashMap.set(item, (hashMap.get(item) || 0) + 1)
                // if (hashMap.get(item) > 1) return true
            } else {
                hashMap.set(item, 1)
            }
        })
        const arr = [...hashMap.entries()]
        return !!arr.filter(([key, val]) => val > 1).length
    }
}
