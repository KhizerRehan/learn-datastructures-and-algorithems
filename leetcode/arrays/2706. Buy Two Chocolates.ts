// Soltuion-1
function buyChoco(prices: number[], money: number): number {

    if(prices.length < 2) {
        return money
    }

    if(money<=0) {
        return 0
    }

    prices.sort((a, b) => a - b);
    
    if (prices.length >= 2 && prices[0] + prices[1] <= money) {
        return money - (prices[0] + prices[1]);
    }
    return money;
    
};

// ---
// 2 Pointer Solution

/*

2 Pointer Solutions: Fails Input in sense that above solutions returns 22 
but this retruns correct pair but return 2. Above solutions also returns MAX leftover
which was not requirement in ticket but LEETCODE fails to pass solution.

prices = [98, 54, 6, 34, 66, 63, 52, 39]
money = 62

*/

function buyChoco(prices: number[], money: number): number { 

    if(prices.length<2) {
        return money
    }

    let leftPtr = 0;
    let rightPtr = prices.length - 1;
    let minCost = Infinity;

    while(leftPtr<rightPtr) {
        let cost = prices[leftPtr] + prices[rightPtr]

        if(cost <= money) {
            minCost = Math.min(minCost, cost); 
            leftPtr++
        }
        else {
            rightPtr--
        }
    }
    
    // IF minCost <= money => Return LeftOver ELSE: return money amount
    // As per Constrain we can't buy chocolate in Debt

    return minCost <= money ? money - minCost : money
}