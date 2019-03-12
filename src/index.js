// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var money = {};
    
    if (currency > 0) {  
        if (currency > 10000) return money = {error: "You are rich, my friend! We don't have so much coins for exchange"};  
        
        let half_dollars = Math.floor(currency/50);
        let rest = currency - half_dollars*50;
        let quarters = Math.floor(rest/25);
        rest = rest - quarters*25;
        let dimes = Math.floor(rest/10);
        rest = rest - dimes*10;
        let nickels = Math.floor(rest/5);
        let pennies = rest - nickels*5;
   
        if (half_dollars !=0 ) money.H = half_dollars;
        if (quarters !=0 ) money.Q = quarters;
        if (dimes !=0 ) money.D = dimes;
        if (nickels !=0 ) money.N = nickels;
        if (pennies !=0 )money.P = pennies;
}
    return money;

}