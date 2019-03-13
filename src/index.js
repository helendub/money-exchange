// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var money = {};
    
    if (currency > 0) {  
        if (currency > 10000) return money = {error: "You are rich, my friend! We don't have so much coins for exchange"};  
        
        let half_dollars = Math.floor(currency/50);
        currency -= half_dollars*50;
        let quarters = Math.floor(currency/25);
        currency -= quarters*25;
        let dimes = Math.floor(currency/10);
        currency -= dimes*10;
        let nickels = Math.floor(currency/5);
        let pennies = currency - nickels*5;
   
        if (half_dollars !=0 ) money.H = half_dollars;
        if (quarters !=0 ) money.Q = quarters;
        if (dimes !=0 ) money.D = dimes;
        if (nickels !=0 ) money.N = nickels;
        if (pennies !=0 )money.P = pennies;
}
    return money;

}