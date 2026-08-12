class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums: number[], k: number): number[] {
    // key = num, val = frequency
    const seen = new Map();
    for (const num of nums) {
      seen.set(num, (seen.get(num) || 0) + 1);
    }

    // transform this into buckets arr 
    // where the index is numbers frequency, 
    // value is num we trade the space complexity with time complexity
    const bucket: number[][] = Array.from({ length: nums.length + 1 }, () => []);
    for (const [num, occur] of seen) {
      bucket[occur].push(num)
    }

    // we start from the end cuz we need nums with highest frequency 
    // till f >= 0 and res.length < k
    // eventually when res.length === k we return res
    const res: number[] = []
    for (let f = bucket.length - 1; f >= 0 && res.length < k; f--) {
      for (const num of bucket[f]) {
        res.push(num)
        if (res.length === k) return res
      }
    }

    return res
  }
}
