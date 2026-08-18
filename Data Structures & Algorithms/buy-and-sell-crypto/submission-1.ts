class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let firstDay = prices[0]
        let bestVal = 0
        for (let i = 1; i < prices.length; i++) {
            bestVal = Math.max(bestVal, prices[i] - firstDay)
            firstDay = Math.min(firstDay, prices[i])
        }

        return bestVal
    }
}
