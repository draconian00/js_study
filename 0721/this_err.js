function StockQuoteGenerator(symbol) {
  this.symbol = symbol;
  // let that = this; --> getQuote 안에서 쓸 this를 별도로 할당해야함.

  setInterval(function getQuote() {
    // console.log(this); --> 전역 객체
    console.log('price', this.symbol, Math.random());
    // console.log('price', that.symbol, Math.random());
  }, 1000);
}

var st = new StockQuoteGenerator('t');


/**
 * getQuote() 함수가 선언되는 위치는 StockQuoteGenerator() 함수 안이 아니라
 * 전역이기 때문에 getQuote 안쪽에서 사용된 this 는 전역 객체를 가리킨다.
 */