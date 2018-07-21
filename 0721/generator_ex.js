// MDN 에 따르면 arrow func 문법으로는 generator 생성 불가능;

function* getStockPrice(symbol) {
  while (true) {
    yield Math.random() * 100;
    console.log(`resuming for ${symbol}`);
  }
}

let generator = getStockPrice('test');

const limitPrice = 15;
let price = 100;
let next;
while (price > limitPrice) {
  next = generator.next();
  console.log(next); // --> { value: ~~, done: (true, false) }; 
  price = next.value;
  console.log(`The generator returned ${price}`);
}

console.log(`buying at ${price}`);