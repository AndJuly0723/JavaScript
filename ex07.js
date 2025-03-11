//
// JavaScript의 객체 복사 방법
//

let x, y  // 일단 선언

// 얕은 복사 예시
console.log('\nShallow copy examples:')
x = {a:1, b:3, c:5} 
y = x   // 단순 대입,  얕은 복사
x.a = -999    // x의 속성 변경
console.log('x = ', x)
console.log('y = ', y)

// 깊은 복사 예시
console.log('\nDeep copy examples:')
x = {a:1, b:3, c:5}
y = {...x}    // 전개 연산자를 사용한 깊은 복사
x.a = -999    // x의 속성 변경
console.log('x = ', x)
console.log('y = ', y)

// 깊은 복사의 문제점
// 객체, 배열을 조합하는 경우 요소 단계에서는 얕게 복사되는 문제점이 있다
console.log('\nDeep copy problem:')
x = {a:[1,2,3], b:3, c:4} 
y = {...x}    // 전개 연산자를 사용한 깊은 복사
x.a[0] = -999
console.log('x = ', x)  
console.log('y = ', y)


// 깊은 복사의 문제점 해결 방법
// 나중에 배우게 되는 JSON의 메서드를 사용하는 방법이 있다
// JSON의 문자열 변환과 역변환을 이용해서 깊은복사 효과를 낼 수 있다.
console.log('\nDeep copy better #1:')
x = {a:[1,2,3], b:3, c:4}
y = JSON.parse(JSON.stringify(x))
x.a[0] = -999
console.log('x  = ', x)
console.log('y = ', y)

