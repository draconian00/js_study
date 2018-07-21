/**
 * ES5
 * var stock = getStock();
 * var symbol = stock.symbol;
 * var price = stock.price;
 */

// ES6
let getStock = () => {
  return {
    symbol: 'IBM',
    price: 100.00,
  };
}

let { symbol, price } = getStock();
console.log(symbol, price);

// 다른 변수명으로 destructuring
let { symbol: sym } = getStock();
console.log(sym);