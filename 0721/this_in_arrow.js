function StockQuoteGenerator(symbol) {
  this.symbol = symbol;

  setInterval(() => {
    console.log('price', this.symbol, Math.random());
  }, 1000);
}

var st = new StockQuoteGenerator('t');

/**
 * arrow function 사용 시 함수가 실행되는 컨텍스트를
 * this로 연결하기 때문에 this의 값이 틀어지는 상황을 방지 할 수 있다.
 */