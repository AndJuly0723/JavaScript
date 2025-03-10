//
// JavaScript의 배열의 연산과 메서드
//

let a, b, c, x, y, z    // 일단 선언

// 배열의 결합과 연장: 전개연산자.
console.log('\nArray extension examples:')
a = [1,2,3]
b = [4,5,6]
c = [...a, ...b]
console.log('a = ', a)
console.log('b = ', b)
console.log('c = ', c)

x = [1,2,3]
y = [...x,4,5,6]  // 전개 연산자 사용 배열의 연장
console.log('\n')
console.log('x = ', x)
console.log('y = ', y)

x = [1,2,3]
y = [4,5,6]
z = [...x, 'a', 'b', 'c', ...y]   // 전개 연산자 사용 배열의 연장
console.log('\n')
console.log('x = ', x)
console.log('y = ', y)
console.log('z = ', z)

// 기존의 배열을 반복해서 새로운 배열 만들기
console.log('\nArray repetition examples:')
x = [1,2,3]
y = new Array(2).fill(x).flat()   // 길이가 2인 빈 배열에 x를 반복하여 채워 넣고 평탄화
z = new Array(3).fill(x).flat()   // 길이가 3인 빈 배열에 x를 반복하여 채워 넣고 평탄화
console.log('\n')
console.log('x 두번 반복 = ', y)
console.log('x 세번 반복 = ', z)

// 배열의 원소 변경
console.log('\nArray modification examples:')
a = [1,2,3]
console.log('a before change = ', a)
a[1] = -1
console.log('a after change = ', a)

a = [1,2,3]
console.log('a before change = ', a)
a[1] = [-1,-2,-3]
console.log('a after change = ', a)

// 배열의 끝 위치에 원소 넣고 빼내기: push 메서드와 pop 메서드
console.log('\nArray push and pop examples:')
a = [1,2,3]
console.log('a before push = ', a)
a.push(4)
a.push([5,6])   // 배열을 하나의 원소로 넣기.
console.log("a after push = ", a)
a.push(7,8,9)   // 자료 여러개를 원소로 넣기
console.log('a after another push = ', a)
console.log('popped from a = ', a.pop())  // 자료 한개 빼내기
console.log('a after pop = ', a)    // 자료를 빼낸 후 배열


// 배열의 시작 위치에 원소 넣고 빼내기: unshift 메서드와 shift 메서드
console.log('\nArray unshift and shift examples:')
a = [3,2,1]
console.log('a before unshift = ', a)
a.unshift(4)
a.unshift([6,5])    // 배열을 하나의 원소로 넣기
console.log('a after unshift = ', a)
a.unshift(9,8,7)  // 자료 여러개를 원소로 넣기
console.log('a after another unshift = ', a)
console.log('shifted from a = ', a.shift())   // 자료 한개 빼내기
console.log('a after shift = ', a)    // 자료를 빼낸 후 배열


// 배열의 특정 위치에 원소 넣고 빼내기: splice 메서드
console.log('\nArray splice examples:')
a = [1,2,3]
console.log('a before splice insert =', a)
a.splice(1, 0, 1.2, 1.4, 1.6, 1.8)  // 자료 여러개를 원소로 넣기: 배열.splice(start, deleteCount, item1, item2, ...)
// start : 변경을 시작할 인덱스   // deleteCount : 제거할 요소의 개수(0이면 아무 요소도 삭제안함)
// item1, item2, ... : 배열에 추가할 요소(없으면 삭제만 수행)
console.log('a after splice insert = ', a)
console.log('\n')
a = [1,2,3,4,5]
console.log('a before splice remove = ', a)
console.log('a.splice(2,1) = ', a.splice(2,1))  // 인덱스 2에서 원소 한개 빼내기
console.log('a after splcie remove = ', a)  // 원소는 항구적으로 삭제되었다.
console.log('a.splice(1,2) = ', a.splice(1,2))  // 인덱스 1에서 원소 두 개 빼내기
console.log('a after another splice remove = ', a)  // 원소는 항구적으로 삭제 되었다


// 배열의 정렬과 역전: sort 메서드와 reverse 메서드
console.log('\nArray sort and reverse examples:')
a = [3, 1, 5, 2, 4]
console.log('a before sort = ', a)
a.sort()  // 항구적인 정렬
console.log('a after sort = ', a)
a.reverse() // 역전
console.log('a after reverse = ', a)


// 배열의 평탄화
console.log('\nArray flat examples:')
// 배열.flat(depth): 중첩된 배열을 평탄화하여 1차원 배열로 변환하는 메서드
// depth: 선택사항이며 중첩을 몇 단계까지 풀지 지정(기본값 : 1)
// flat(Infinity) = 모든 중첩을 한번에 제거 가능
console.log(`[x, y] = ${[x, y]}`)
a = [1,2,[3,[4,5]],6,7] 
console.log('a before flat = ', a)
a = a.flat()  // flat은 비항구적인 평탄화이므로 대입해줘야함
console.log('a after flat once = ', a)
a = a.flat()  // flat은 비항구적인 평탄화이므로 대입해줘야함
console.log('a after flat twice = ', a)


// 얕은 복사와 깊은 복사
console.log('\nShallow coppy vs deep copy examples:')
a = [1,2,3,4]
b = a // 얕은 복사
b[0] = -999 // b[0]만 바꾸어 본다
console.log('a = ', a)
console.log('b = ', b)

a = [1,2,3,4] // 다시시작
b = [...a]  // 전개 연산자를 사용한 깊은 복사
b[0] = -999   // b[0]만 바꾸어 본다
console.log('a = ', a)
console.log('b = ', b)



