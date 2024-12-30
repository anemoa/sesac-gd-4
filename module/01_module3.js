// Common JS 버전

// #3. 여러 모듈 내보내기
const colors = ['green', 'yellow', 'white'];

const sayHi = () => {
	console.log('hi');
}

function sayName(name){
	console.log('my name is ' + name);
	sayHi();
}

class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	getBornYear(){
		return new Date().getFullYear() - this.age;
	}
}

// 한 번에 모두 내보내기
module.exports = {
	colors,
	sayName, // function 이어도 괄호 사용하지 않고 이름만 작성해서 내보냄
	Person, 
}