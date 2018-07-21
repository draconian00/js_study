/**
 * generator 함수는 function 키워드와 함수 이름 사이에 * 를 붙여서 선언하며,
 * 실행되다가 yield 키워드를 만나면 함수 실행이 멈추고,
 * 객체 외부에서 next() 함수를 호출하면 멈췄던 함수가 다시 실행된다.
 */

function* doSomething() {
  console.log('Process Start');
  yield;
  console.log('Resumed Processing');
  yield;
  console.log('Process Ended');
}

// generator 함수 실행 시 함수의 코드가 바로 실행되는 대신
// 이터레이터로 사용할 수 있는 Generator 객체 반환.
var iterator = doSomething();

console.log(iterator, typeof iterator); // --> {}, 'object'

iterator.next();

/**
 * generator의 next가 다 호출되고 더이상 yield가 없더라도
 * next() 호출 시 에러가 나지 않는다.
 */
setInterval(() => {
  iterator.next();
}, 1000);

// setTimeout(() => {
//   iterator.next();
// }, 1000);

// setTimeout(() => {
//   iterator.next();
// }, 2000);

// // 에러가 없음...?
// setTimeout(() => {
//   iterator.next();
// }, 3000);

