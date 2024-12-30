// *1.
// 01_module의 모듈을 불러와 사용
const add = require('./01_module');
console.log(add(2, 3));

// --------------------------------------
// *2.
// 01_module2의 모듈을 불러와 사용
const math = require('./01_module2');
console.log(math);
console.log(math.add(5, 5));
console.log(math.PI);
console.log(math.E);

// --------------------------------------
// *3.
// 01_module3의 모듈을 불러와 사용
const data = require('./01_module3');
console.log(data);

// 내부에 있는 변수, 클래스, 메소드 사용은 . 을 이용해서 사용
// 변수 사용
console.log(data.colors);

// 함수 사용
data.sayName('yves');

// 클래스 사용
const rei = new data.Person('레이', 20);
console.log(rei);
console.log(rei.getBornYear());

// --------------------------------------
// *4.
// 가지고 오고 싶은 것만 가져오기
const {colors} = require('./01_module3');
console.log(colors);

// --------------------------------------
// *5.
// 01_module4의 모듈을 불러와 사용
// 바로 내보내는것 사용
const {sayHi2} = require('./01_module4');
sayHi2();