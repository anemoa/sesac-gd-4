// 클래스 기본 문법
// #1. class: 클래스 정의할 때 사용하는 키워드
class House{
	// #2. constructor: 클래스의 생성자
	// - 객체를 생성할 때 자동으로 호출되며 초기화 작업을 수행
	constructor(year, name, window) {
		// #3. this: 클래스 내부에서 현재 인스턴스를 참조하는 객체
		// - 인스턴스의 속성, 메소드에 접근할 때 사용
		// - 현재 인스턴스(this)에 name을 추가하고 그 값을 매개변수 name으로 설정하는 것
		
		this.year = year;
		this.name = name;
		this.window = window;
	}
	
	// #4. 메소드: 클래스 내부에 정의된 함수
	// - 해당 클래스의 인스턴스에서 호출 가능

	getAge(){
		console.log(`${this.name}는 건축한지 ${2024 - this.year}년 됐어요`);
	}

	getWindow(){
		console.log(`${this.name}은 ${this.window}개 입니다.`);		
	}
}

// #5. 인스턴스: 클래스로부터 생성된 실체 객체 - new 키워드 사용해서 생성
// 클래스 - 설계도
// 인스턴스 - 설계도로 만들어진 "실제 집"
// - 각각 독립적인 객체 (= 각자 자신만의 this를 가짐)

const house1 = new House(1999, 'loe', 2);
//클래스를 이용해서 인스턴스를 생성시 constructor에 선언된 매개변수대로 값을 지정해야 함
console.log(house1);// House {year: 1999, name: 'loe', window: 2}
console.log(typeof house1); // object
console.log(house1.year); // 1991

//메소드 사용하고 싶으면
house1.getAge(); // loe는 건축한지 25년 됐어요
house1.getWindow(); // loe은 2개 입니다.

const house2 = new House(2000, '자이', 5);
house2.getAge()



////////////////////////////////////////////
// 클래스의 상속
// - 상속을 통해 다른 클래스의 기능을 재사용 가능
// - extends 키워드를 사용해서 상속 구현

class APT extends House{
	constructor(year, name, window, floor, chair){
		// #6. super(): 부모 클래스의 생성자를 호출할 때 사용
		
		super(year, name, window); // 이건 부모거 그대로 사용
		this.floor = floor;
		this.chair = chair;
	}

	getAPTInfo(){
		return `${this.year} 년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor} 이며 의자 개수는 ${this.window} 이다`
	}

	// #7. Override(오버라이드): 부모의 메소드와 같은 함수를 재정의 할때
	// - 부모 클래스에서 정의된 메소드를 자식 클래스에서 "새롭게 재정의" 하거나 "변경" 하는 것을 의미
	// - 주로 부모 클래스에서 제공한 기본 동작을 "자식 클래스의 특성에 맞게 수정" 할 때 사용

	// - ** 규칙
	// - 메소드 이름, 매개변수 리스트가 부모 클래스와 "동일" 해야 함
	getWindow(){
		return `${this.name} 아파트의 ${this.window}개의 창문은 ${this.chair}의 회사와 같다`
	}
};

const apt1 = new APT(2011, '대림', 5, 22, 3);

console.log(apt1);
console.log(apt1.getAPTInfo());
console.log(apt1.getWindow());



const userInfo = {
	name: 'y',
	city: 'seoul',
	job: 'x',
	age: 555,
}

const {name, age, ...restInfo} = userInfo;

console.log(age, name, restInfo);


const evenNum = [1, 3, 5];
const oddNum = [2, 4, 6];
const sumNum = [...evenNum, ...oddNum];
[first, second, ...remaining] = sumNum;

console.log(first);
console.log(second);
console.log(remaining);



class Shape{
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
	
	getArea(){
		return this.width * this.height;
	}
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());


class Rectangle extends Shape{
	constructor(width, height){
		super(width, height)
	}

	getDiagonal(){
		const diagonal = Math.sqrt(this.width ** 2 + this.height ** 2);
		return diagonal;
	}
}

let rec2 = new Rectangle(9, 4);
console.log(rec2.getArea());
console.log(rec2.getDiagonal())


class Triangle extends Shape{
	constructor(width, height){
		super(width, height)
	};

	getArea(){
		return (this.width * this.height) / 2;
	}
}

let tri = new Triangle(3, 4);
console.log(tri.getArea());

class Circle extends Shape{
	constructor(width, height){
		super(width, height);
	}

	getArea(){
		const radius = this.width / 2;
		return Math.PI * radius ** 2;
	}
}

let circle = new Circle(5,5);
console.log(circle.getArea());
