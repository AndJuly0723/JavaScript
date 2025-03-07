//
// JavaScript의 문자열 자료형 심화.
//

// 문자열의 연산과 반복
console.log('\nString operation examples:')
let str1 = 'First string'
let str2 = 'Second string'
console.log(str1 + str2)  // 이어붙이기
console.log(str1.repeat(2) + str2.repeat(2))  // repeat(n) -> n번 반복. // 원본문자열은 변경되지않음

// 문자열의 주요 메서드
console.log('\nString method examples:')
let myString
let y
myString = 'JavaScript is easy to learn.'
console.log(myString.toUpperCase()) // 대문자화
console.log(myString.toLowerCase()) // 소문자화

// 문자열은 한번 생성되면  불변(immutable)이므로 원본을 바꾸려면 새 변수에 저장해야함
y = myString.split(' ')   // ' ' 기준으로 토막냄
console.log(y, '<- ', typeof y)
console.log('First "easy" at', myString.indexOf('easy'))  // 'easy'가 처음으로 발견된 위치
console.log('First "EASY" at ' , myString.indexOf('EASY'))  // indexOf() -> 대소문자 서로 다르게 인식함 // 찾는위치(인덱스)가 없으면 -1 반환
console.log('First "a" at ', myString.indexOf('a')) // 'a'가 처음으로 발견된 위치
console.log('First "a" at ', myString.lastIndexOf('a')) // 'a'가 마지막으로 발견된 위치.

myString = '    <== ==>    '
console.log('\n')
console.log('|' + myString + '|')
console.log('|' + myString.trim() + '|')    // trim() -> 문자열의 앞뒤공백 제거 // 원본은 변경 X  // 중간 공백은 제거되지않음
console.log('|' + myString.trimStart() + '|')   // trimStart() -> 앞쪽 공백 제거
console.log('|' + myString.trimEnd() + '|')   // trimEnd() -> 뒤쪽 공백 제거
myString = 'JavaScript is easy to learn.'
console.log(myString.replace('JavaScript', 'JS'))   // replace(a,b) -> 'a'를 'b'로 변경 // 원본은 그대로임(immutable)
console.log(myString)


// 템플릿 리터럴
let myResult = 1 + 2
console.log(`연산 결과는 ${myResult}입니다. `)
let myChoice = 'JavaScript'
console.log(`선호하는 언어는 ${myChoice}입니다.`)

