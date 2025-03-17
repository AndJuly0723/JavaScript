//
// JavaScript의 클래스

//  클래스 예시
console.log("\nJavaScript class examples:");
class Dog {
  // Dog 클래스
  static counter = 0; // 정적 속성
  constructor(name, age) {
    // 생성자 메소드
    this.name = name; // 멤버 속성 정의
    this.age = age; // 멤버 속성 정의
    Dog.counter++; // 정적 속성 증가
    console.log("A Dog object is created!");
  }

  greeting() {
    // 멤버 메소드 정의. function 키워드 사용x
    console.log(`Hello! My name is ${this.name}~~`); // 멤버 속성 사용
  }

  static isDog(anObj) {
    // 정적 메소드
    return anObj.constructor.name === "Dog";
  }
}

let dog1 = new Dog("Baduk", 2); // 새로운 Dog 객체 생성.
let dog2 = new Dog("Ruby", 10); // 새로운 Dog 객체 생성.
let dog3 = new Dog("Kkami", 5); // 새로운 Dog 객체 생성.

console.log("Dog1 name = ", dog1.name);
console.log("Dog2 name = ", dog2.name);
console.log("Dog3 name = ", dog3.name);
console.log("Dog1 age = ", dog1.age);
console.log("Dog2 age = ", dog2.age);
console.log("Dog3 age = ", dog3.age);
console.log("Total dog count = ", Dog.counter);
console.log("Is dog1 a Dog?", Dog.isDog(dog1));
console.log("Is dog1 a Dog?", Dog.isDog(dog2));
console.log("Is dog1 a Dog?", Dog.isDog(dog3));
let dog4 = new String("Dog"); // String 객체 생성
console.log("Is Dog4 a Dog?", Dog.isDog(dog4));
console.log("Class of dog4 = ", dog4.constructor.name);
dog1.greeting();
dog2.greeting();
dog3.greeting();
