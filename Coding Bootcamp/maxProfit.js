// Write a function that takes an array of integers representing the price of a stock on different days. Return the maximum profit that can be made from buying and selling a single stock

function maxProfit(prices) {


    let minPrice = prices[0];
    let maxProfit = prices[1] - prices[0];

    for (let i = 0; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice );
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
};