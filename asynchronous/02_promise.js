// 비동기처리 방법 v.2
// : Promise 객체
// 비동기처리 하기 위한 첫번째 방법이 콣백함수 였는데, 콜백 지옥이라는 치명적인 단점이 있음
// -- 이 단점을 해결하기 위해 ES6부터 등장한 문법(2015년)
// - 미래에 성공/실패에 대한 결과값을 "약속" 한다는 의미
// - 어떤 작업에 대한 성공, 실패 분리해서 반환
// -- 성공은 then(), 실패는 catch() 메소드로 이어서 받음

// => 성공이든 실패든 무언가의 "최종 결과"
// resolved: 성공
// rejected: 실패

// #1. promise 생성하는 코드
// - 제작 코드 (Producing code)
function promise1(flag){
	// 프로미스 객체를 반환
	// - new 연산자를 이용해서 프로미스 객체를 만들고 바로 반환

	//실행함수(excutor)가 두 개의 콜백함수(resolve, reject) 받음
	return new Promise(function(resolve, reject){
		if(flag){
			resolve(`프로미스 이행 (fulfilled) 상태 === 성공! ${flag}`);			
		}else{
			reject(`프로미스 거절(rejected) 상태 === ${flag}`);
		}
	});
}

// #2. promise를 소비하는 코드
// - 소비 코드 (Consuming code)
// promise1(5 < 3).then(function(res){
// 	console.log(res);
	
// }).catch((error) => console.log(error));

// 화살표 함수로 표현하면

// promise1(5 > 3).then((res) => console.log(res)).catch( (res) => console.log(res));

//////////////////////////////////////////////
// P) 01_callback에서 콜백함수 사용해 작성한 코드를 promise를 이용해 바꿔보자


// let product;
// let price;

// function goMart(){
// 	console.log('마트에 가서 음료 사오기');
// }

// function pickDrink(){
// 	return new Promise((resolve, reject) => {
// 		setTimeout(function(){
// 			console.log('고민끝');
// 			product = '닥터페퍼';
// 			price = 4000;

// 			if(price <= 5000){
// 				resolve();
// 			}else{
// 				reject();
// 			}
// 		}, 2000);
// 	});
// }

// function pay(){
// 	console.log(`상품: ${product}, 가격: ${price}`);	
// }

// function npPay(){
// 	console.log('돈 없어 ㅠㅠ');
// }

// goMart();
// pickDrink().then(pay).catch(npPay);
// reject() 반환 => catch문 실행
// resolve() 반환 => then문 실행


//////////////////////////
// 프로미스 체이닝
// 목표: 함수를 이용해 연산
// => sub(mul(add(4, 3) 2), 1) : add > mul > sub

// 1. 콜백함수를 이용해 처리한 경우
// const add = (n1, n2, cb) => {
// 	setTimeout(() => {
// 		const res = n1 + n2;
// 		cb(res);
// 	}, 1000);
// }

// const mul = (n, callback) => {
// 	setTimeout(() => {
// 		const res = n * 2;
// 		callback(res)
// 	}, 700);
// };

// const sub = (n, callback) => {
// 	setTimeout(() => {
// 		const res = n - 1;
// 		callback(res);
// 	});
// };


// add(4, 3, function (x) {
//     console.log(x); // 7

//     mul(x, function (y) {
//         console.log(y); // 14

//         sub(y, function (z) {
//             console.log(z); // 13
//         });
//     });
// });

// 가독성 불편함.



// 2. 프로미스 체이닝 이용한 경우
function add(n1, n2){
	return new Promise( (resolve, reject) => {
		setTimeout(() => {
			const result = n1 + n2;
			resolve(result);
		}, 1000);
	})
};

function mul(n){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const result = n * 2;
			resolve(result);
		}, 700);
	});
};

function sub(n){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const result = n - 1;
			resolve(result);
		}, 500);
	});
}

add(4, 3).then((res) => {
	console.log(res);

	return mul(res);
}).then((res) => {
	console.log(res);

	return sub(res);
}).then((res) => {
	console.log(res);
}).catch((error) => {
	console.log(error);
});
