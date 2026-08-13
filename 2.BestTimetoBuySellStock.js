// The question, in normal words
// You are given a list of numbers. Each number is the price of one share on one day. Position 0 is day 0, position 1 is day 1, and so on.
// You may buy on one day and sell on one later day. Exactly one buy and one sell, and the sell must come after the buy.
// Return the largest profit you could have made. If every possible pair would lose money, return 0, because you are allowed to simply not trade.

// My Solution
function maxProfit(prices) {
    let p = 0;

    for (let i = 0; i <= prices.length - 1; i++) {
        for (let j = prices.length - 1; j > i; j--) {
            const tempProfit = prices[j] - prices[i];
            if (tempProfit > p) {
                p = tempProfit;
            }
        }
    }
    return p;
}

// My Solution
function maxProfit2(prices) {
    let bp = prices[0];
    let sp = prices[1];

    for (let i = 1; i <= prices.length - 1; i++) {
        const p = prices[i];
        if (p < bp) {
            bp = p;
        } else if (p > sp) {
            sp = p;
        }
    }
    const result = sp - bp;
    return result < 0 ? 0 : result;
}

// Optimal
function maxProfit3(prices) {
    if (prices.length < 2) return 0;
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i <= prices.length - 1; i++) {
        const price = prices[i];
        const currentSelling = price - minPrice;

        if (currentSelling > maxProfit) {
            maxProfit = currentSelling;
        }
        if (price < minPrice) {
            minPrice = price;
        }
    }
    return maxProfit;
}

const profit = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(profit)
