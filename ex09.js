//
// Math, JSON, Date에 대해서
//

let x, y, z, d1, d2, d3, c4   // 일단 선언

// Math의 메소드와 속성:
console.log('\nMath method:')
console.log('abs(-3) = ', Math.abs(-3))  // 절대값 반환( 양수는 그대로, 음수는 양수로)
console.log('sign(-3) = ', Math.sign(-3)) // 숫자의 부호판별(입력된 숫자가 양수인지 음수인지 0인지 반환)
console.log('cos(0) = ', Math.cos(0))   // 주어진 각도의 코사인(cosine)값을 반환( 즉, 삼각함수 코사인 값을 계산할때 사용)
console.log('atan(1)*4 = ', 4*Math.atan(1)) // 아크탄젠트를 계산하는 함수( 주어진 숫자에 대해 그에 대응하는 각도를 라디안으로 반환)
console.log('ceil(3.45) = ', Math.ceil(3.45)) // 가장 가까운 정수로 반올림(음수면 0에 가까운쪽으로)
console.log('floor(3.45) = ', Math.floor(3.45)) // 가장 가까운 정수로 내림(양수는 그냥 소수점 버림, 음수는 더 작은 정수로 내림( -3.1  >>> -4 ))
console.log('min(2,7,1,-3,5) = ', Math.min(2,7,1,-3,5)) // 여러개의 숫자를 넣으면 그중 가장 작은 값 반환
console.log('max(2,7,1,-3,5) = ', Math.max(2,7,1,-3,5)) // 여러개의 숫자를 넣으면 그중 가장 큰 값 반환
console.log('random() = ', Math.random()) // 0이상 1미만의 난수를 반환하는 함수( 0.0 <= 반환값 <= 1.0범위에서 무작위 소수생성)
console.log('sqrt(4) = ', Math.sqrt(4)) // Math.sqrt(n)일때 어떤 수를 제곱했을때 n이 되는 수를 반환

console.log('\nMath properties:')
console.log('E = ', Math.E)   // 고정된 상수값, 자연로그의 기반이 되는수
console.log('PI = ', Math.PI)
console.log('SQRT2 = ', Math.SQRT2) // 2의 제곱근을 나타내는 내장 상수


// JSON 예시
console.log('\nJSON examples:')
const customerData = [ {name:'이순신', gender:'남', age:359} ] // 배열과 객체의 조합
x = JSON.stringify(customerData)    // 들여쓰기 없게 문자열로 변환
y = JSON.stringify(customerData, null, 4)   // 4칸 들여쓰기 적용
console.log(x)
console.log(y)

const customerDataJSON = '[ { "name": "홍길동", "gender": "남", "age": 22}, { "name": "이순신", "gender": "남", "age": 35} ]'
z = JSON.parse(customerDataJSON)    // JSON 형식의 문자열을 JavaScript 객체로 변환하는 함수
console.log(z[0])
console.log(z[1])


// Date에 대해서.
// 표준시간 UTC로 변환되어 출력된 (-9시간)
console.log('\nDate exampls:')
d1 = new Date()   // 현재의 날짜와 시간
// d1 = new Date().toLocaleTimeString() // 현지 시간
// d1 = new Date().toLocaleDateString()  // 현지 날짜
d2 = new Date(2022,4,5,17,22,11,0)  // 년, 월 (0=January), 일, 시, 분, 초, 밀리초
d3 = new Date(100000000000) // 1970. 1 . 1이후 경과한 밀리초( 1/1000초 )
d4 = new Date('2025-01-11T12:22:00')  // 날짜 문자열 사용

console.log('d1 = ', d1)
console.log('d2 = ', d2)
console.log('d3 = ', d3)
console.log('d4 = ', d4)

console.log('getFullYear = ', d1.getFullYear())
console.log('getMonth = ', d1.getMonth()) // January = 0
console.log('getDate = ', d1.getDate())
console.log('getHours = ', d1.getHours()) // UTC가 아니라 한국 시간 그대로 출력
console.log('getMinutes = ', d1.getMinutes())

d4.setFullYear(2020)
d4.setMonth(11)   // 11 = December
d4.setDate(25)
d4.setHours(17)
d4.setMinutes(3)
console.log('d4 after set = ', d4)