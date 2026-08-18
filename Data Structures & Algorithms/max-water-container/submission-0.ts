class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
    let left = 0;
    let right = heights.length - 1
    let best = 0

    while(left < right) {
        const area = Math.min(heights[left], heights[right]) * (right - left);
        best = Math.max(best, area)
        if (heights[left] <= heights[right]) {
        left++
        }
        else {
        right--
        }
    }
    return best
    }
}
