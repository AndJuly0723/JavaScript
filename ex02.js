//
// JavaScript의 기본자료형
//

// 수치형 자료와 연산.
let x = 10
let y = 2
console.log('\nOperation examples:')
console.log('x + y = ', x + y)    // 더하기
console.log('x - y = ', x - y)    // 빼기
console.log('x * y = ', x * y)    // 곱하기
console.log('x / y = ', x / y)    // 나누기
console.log('x ** y = ', x ** y)  //제곱

// 수치형 관련 주요 메소드와 함수.
console.log('\nFunction examples:')
x = 0.1234567
y = x.toFixed(3)    // 반환값은 숫자가 아니라 문자열
console.log(y, typeof y)  // y는 string
console.log(Number.isNaN(x))  // NaN 여부. 
console.log(Number.isFinite(x))  // 유한수 여부.
console.log(Number.isInteger(x))  // 정수 여부.

// 문자열 자료.
console.log('\nString examples:')
x = "Hello World" // OK
y = 'Hello Wolrd' // OK

x = "He said, 'JavaScript is so easy' "  // OK
y = 'He said, "JavaScript is so easy" '  // OK
console.log('x = ', x)
console.log('y = ', y)

// x = "He said, "JavaScript is so easy" " // 오류 발생!!
// y = "He said, "JavaScript is so easy" " // 오류 발생!!

let myString = `Hello !!!
my
name
is
JavaScript.`
console.log(myString)   // 멀티라인 문자열 출력.

x = "He said, \"javaScript is very easy\" "   // 이스케이프 코드를 사용하면 " "안에 " " 가능
y = 'He said, \'javaScript is very easy\' '   // 이스케이프 코드를 사용하면 ' '안에 ' ' 가능
console.log('x = ', x)
console.log('y = ', y)

// 문자열의 인덱싱.
console.log('\nString indexing examples:')
myString = 'JavaScript is easy to learn.'
console.log('String length = ', myString.length)  // 문자열의 길이 출력
console.log(myString.slice(22))   // 인덱스 22 이후.
console.log(myString.slice(-6))   // 끝에서 6번째
console.log(myString.slice(0,20))   // slice(start, end)에서 strat ~ end 이전까지만 포함! 
console.log(myString.slice(-14, -10))
console.log(myString.slice())   // 문자열 전체

// 부울 자료형.
let z = true
let w = false
console.log('\nBoolean examples:')
console.log(typeof(z))
console.log("2 == '2'", 2 == '2')
console.log("2 == '2'", 2 === '2')
console.log('z or w = ', z || w)  // true or false -> true
console.log('z and w = ', z && w) // true and false -> false
console.log('not z = ', !z) // not true -> false
console.log('Boolean value of "myString" = ', !!myString) // 비어있지않은 문자열은 true, 빈문자열은 false  // !! -> 부정에 부정을 했으므로 그대로임 따라서 빈문자열이 아니므로 true

// 자료형의 변환.
console.log('\nType convesion:')
x = '123'
y = 'abc'
let x2 = Number(x)  // 변환 성공
let y2 = Number(y)  // 변환 실패. NaN값

console.log('x2 = ', x2, typeof(x2))
console.log('y2 = ', y2, typeof(y2))  // NaN의 경우에도 자료형은 Number!!!

let x3 = 123
let y3 = String(x3)

console.log('x3 + 1 = ', x3 + 1)  // 숫자 + 숫자 = 숫자
console.log('y3 + 1 = ', y3 + 1)  // 문자열 + 숫자 = 문자열

let x4 = 'abc'
let y4 = ''

console.log(Boolean(x4))
console.log(Boolean(y4))