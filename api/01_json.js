const car = `{
	"model": "IONIQ 5",
	"company": "hyundai",
	"year": 2022,
	"options": ["side mirror", "smart talk"]

}`;

console.log(car); // format: JSON

// 역직렬화: JSON.parse() -> 통신하여 받은 데이터를 객체로 변환
// js -> js obj
const obj = JSON.parse(car);
console.log(obj); // js obj

// obj 변수는 js object 이므로 .(dot)/[] 연산자 이용해 키 값에 접근 가능
console.log(obj.model);
console.log(obj.year);
console.log(obj.company);

// ** 직렬화: JSON.stringify() -> 통신하기 쉬운 포맷(JSON)으로 변환
// js obj -> json
const json = JSON.stringify(obj);
console.log(json, typeof json);

// json 변수는 JSON 형태의 "문자열(string)" 이므로
// .(dot)/[] 연산자를 이용해서 키 값에 접근이 불가능
console.log(json.model); // undefined
console.log(json.price); // undefined

// json 변수는 string 타입이므로
// string 타입에 쓸 수 있는 내장 메소드들은 사용 가능

console.log(json.split(''));
console.log(json.toUpperCase());
