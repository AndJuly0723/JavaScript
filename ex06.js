//
// JavaScript의 객체
//

let a, b, c, d, e

// 객체 정의
console.log('\nObject examples:')
a = { } // 빈 객체
b = {'이름':'홍길동', '성별':'남', '나이':35}   // Value로 문자열, 수치형 혼재
c = {1: 'Life', 2:'is', 3:'hard'}
d = {x:[1,2,3], y:[4,5,6]}    // 배열을 value로
e = {1:b, 2:c}    // 객체 안에 또다른 객체가 value로


// 속성 접근법
// 점 표기법(dot notation) -> 객체.속성명 : 식별자로 사용될수 있는 문자열만 가능
// 식별자로 사용될수있는 문자열 : 문자로 시작(_, $가능), 숫자로 시작하면 안됨, 공백이나 특수문자 불가, 예약어 사용가능하나 비추
// 대괄호 표기법(bracket notation) -> 객체["속성명"]  : 모든 문자열(공백포함)과 숫자를 키로 사용가능
console.log("b['이름'] = ", b['이름'])  // 속성 접근
console.log("b.이름 = ", b.이름)   // 속성 접근
console.log("e[2] = ", e[2])
// console.log("e.2 = ", e.2)  // 오류, 2는 식별자로 사용될 수 없다
console.log("e[2][3] = ", e[2][3])


const z = {aNumber:123, aString:'abc', aBool:true, anArray:[1,2,3], anObject:{'a':0, 'b':1}, aMethod: function() { console.log(this.aNumber)} }
console.log("z.aMethod() 실행 : ")
z.aMethod()

// 객체의 속성 추가, 삭제, 변경
console.log('\nObject property examples:')
const w = {}  // 빈 객체
w['이름'] = '홍길동' // 속성추가
w['성별'] = '남' // 속성추가
w['나이'] = 89  // 속성 추가
console.log('w = ', JSON.stringify(w))  // 객체를 JSON 문자열로 변환
delete w.나이   // 속성 삭제
console.log('w = ', JSON.stringify(w))
w.이름 = '임꺽정'   // 속성의 value 수정
console.log('w = ', JSON.stringify(w))
console.log('w = ', JSON.stringify(w, null, 2)) // 들여쓰기 2칸
// JSON.stringify(value, replacer, space)
// value : 변환할 값
// replacer : 특정 속성만 포함할지 필터링하는 함수(또는 배열)  // ex : JSON.stringify(w, ['이름'])
// space : 들여쓰기(가독성을 위한 공백 추가)


// 객체의 key, value 출력
console.log('\nObject keys and values:')
console.log(Object.keys(w))
console.log(Object.values(w))
console.log(Object.entries(w))