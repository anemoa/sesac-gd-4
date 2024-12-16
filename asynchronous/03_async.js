// 비동기처리 방법 v.3
// : async/await

// async 키워드: 함수 앞에 작성
// => async를 붙이는 순간 해당 함수는 프로미스가 아닌 값을 반환하더라도 프로미스로 감싸서 반환

async function f1() {
	return 1;
}

async function f2() {
	return Promise.resolve(3);
}

console.log('f1 >>', f1()); // Promise {<fulfilled>: 1}
console.log('f2 >>', f2()); //Promise {<pending>} - 비동기 작업이 아직 완료되지 않은 상태

// 화살표 함수에도 async 키워드 사용 가능

const f3 = async () => {
	return 4;
}

f1().then((res) => console.log('f1 >>', res));
f2().then((res) => console.log('f2 >>', res));

//////////////////////////////
// async / await
// await: 기다리다
// 성공 실패로 프로미스 객체의 실행이 완료되기를 기다림
// await 뒤에는 프로미스가 오게 됨
// - ** 반드시 async 키워드를 사용한 함수 안에서만 await 사용 가능
// await: async 함수 내에서 promise가 해결 될 때까지 기다리게 하며 promise의 결과를 반환값 처럼 다룰 수 있다

// async / await은 세트

const fetchFruits = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const fruits = ['🍏', '🍓', '🍋‍🟩'];
			// resolve(fruits);
			reject(new Error('몰라 알수가 없어'));
		}, 500)
	});
};

// 1. promise then()

// fetchFruits().then( (f) => {
// 	console.log(f);
// }).catch( (err) => console.log(err));


// 2. async / await
// 예외 처리를 try-catch 구문으로 하게 됨

async function printItems() {
	try {
		const fruits = await fetchFruits();
		console.log(fruits);
	} catch (error) {
		console.log(error);
	}
}

printItems();


////////////////////////////////////////////

let product;
let price;

function goMart(){
	console.log('마트에 가서 음료 사오기');
}

function pickDrink(){
	return new Promise((resolve, reject) => {
		setTimeout(function(){
			console.log('고민끝');
			product = '닥터페퍼';
			price = 4000;

			if(price <= 5000){
				resolve();
			}else{
				reject();
			}
		}, 2000);
	});
}

function pay(){
	console.log(`상품: ${product}, 가격: ${price}`);	
}

function npPay(){
	console.log('돈 없어 ㅠㅠ');
}

// goMart();
// pickDrink().then(pay).catch(npPay);

async function exec() {
	try{
		// 장점: 함수의 실행 순서가 명확히 보인다.
		goMart();
		await pickDrink(); // 시간이 걸리는 pickDrink() 함수의 작업을 await 키워드로 인해 기다려
		pay();
	} catch (err) {
		npPay()
	}
}

exec();