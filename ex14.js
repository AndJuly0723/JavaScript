//
// JavaScript의 콜백 함수

// 콜백 함수 예시
console.log('\nCallback function example:')

// 함수를 인자로 받는 함수
function callAnother(aFunc, a) {
  let x = aFunc(a)  // 전달받은 함수를 실행하여 결과를 변수 x에 저장
  return x*10   // 결과값에 10을 곱해서 반환
}

// 콜백 함수 역할을 하는 함수
function myFunction(y) {
  return y*3  // 입력값을 3배로 만들어 반환
}

console.log('함수를 인자로 받는 함수의 호출 결과 = ', callAnother(myFunction, 2))   // 콜백함수는 이미 정의된 함수
console.log('함수를 인자로 받는 함수의 호출 결과 = ', callAnother(function(x){return x*3}, 2))  // 콜백함수는 무명함수
console.log('함수를 인자로 받는 함수의 호출 결과 = ', callAnother((x) => {return x*3}, 2))  // 콜백함수는 화살표함수


// 콜백함수를 필요로 하는 배열의 메소드
console.log('\n콜백함수를 필요로하는 배열의 메소드:')
let a = [1,2,3,4,5,6,7,8,9,10]
console.log('map의 예시 => ', a.map(function (x) {return x*10}))  // a배열의 모든 요소에 대해 x*10의 연산을 수행한뒤 변환한 값들을 새로운 배열로 반환
console.log('filter의 예시 => ', a.filter(function (x) {return x % 2 != 0})) // 주어진 조건(x % 2 != 0)을 만족하는 요소만 남겨서 새로운 배열을 만들어 반환
console.log('forEach의 예시 =>')  // 배열의 각 요소에 대해 주어진 함수를 실행하지만 반환값이 없는 메소드
a.forEach( (x) => {console.log(`${x} + 1 = ${x+1}`)})   // 반환값없음, 단순실행

// 타이머 함수와 콜백함수
console.log('\n타이머 함수와 콜백함수:')
let id1 = setTimeout( () => {console.log('3초 경과! party Time!!!')}, 3000)
console.log('3초 후 Party Time!!!')

