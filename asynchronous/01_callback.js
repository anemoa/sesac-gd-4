// #1. setTimemout(code, delay)
// : delay (단위: ms): 딜레이 시간동안 기다리다가 code 함수 실행

// console.log(1);
// setTimeout( () => console.log(2), 2000);
// console.log(3);

// 실행결과: 1 -> 3 -> 2
// => js 에서는 setTimeout 함수를 사용햇을 때
// 기다리지 않고 바로 다음 구문을 실행함

/////////////////////////////////////////
// #2. 비동기처리
// Ex) 편의점에 가서 음료수를 사오는 상황
// let product;
// let price;

// function goMart(){
// 	console.log('마트에 가서 음료 사오기');
// }

// function pickDrink(){
// 	setTimeout(function(){
// 		console.log('고민끝');
// 		product = '닥터페퍼';
// 		price = 5000;
		
// 	}, 2000);
// }

// function pay(product, price){
// 	console.log(`상품: ${product}, 가격: ${price}`);	
// }

// goMart();
// pickDrink();
// pay(product, price);

// 왜 undefined가 뜨는가
// (컴퓨터 시선)
// 1. product, price 전역 변수 확인
// 2. goMart(), pickDrink(), pay() 함수 정의부 확인
// 3. goMart() 함수 실행: 로그 찍음
// 4. pickDrink() 함수 실행
// 4-1. setTimemout  함수에 의해 3초 대기
// - JS는 비동기처리 > 코드가 끝날때까지 기다리지 않고 다음 코드 실행
// 5. pay() 함수 실행 -> undefined 출력
// 5-1. 3초가 지나서 setTimeout의 첫 번째 인자인 함수를 실행
// 5-2. 고민 끝 문장이 출력
// 5-3. product, price 변수에 값이 할당.

////////////////////////////////////////////////
// #3. 비동기처리 방법 v.1
// : 콜백함수
// - 다른 함수의 실행이 끝난 뒤에 실행되는 함수
// - js에서 어떤 함수의 


// let product;
// let price;

// function goMart(){
// 	console.log('마트에 가서 음료 사오기');
// }

// function pickDrink(callback){
// 	// * callback 매개 변수: 콜백함수가 들어올 예정이라는 뜻 = pay(product, price)
// 	setTimeout(function(){
// 		console.log('고민끝');
// 		product = '닥터페퍼';
// 		price = 5000;
// 		callback(product, price);
// 	}, 2000);
// }

// function pay(product, price){
// 	console.log(`상품: ${product}, 가격: ${price}`);	
// }

// goMart();
// pickDrink(pay);

////////////////////////////////////////////////
// #4. 콜백 지옥 Ex
// setTimeout( () => {
// 	let leaderList = '';
// 	let name = 'damon'; // 가정) 임의로 서버에서 받아온 name
// 	if(!name){
// 		console.log(' 리더 이름 못 찾겠다');
// 	}else{
// 		leaderList += name;
// 		console.log(leaderList);
		
// 	}
// 	setTimeout(() => {
// 		name = 'nini'; // 임의로 서버에서 가져온 척
// 		if(!name){
// 			console.log(' 리더 이름 못 찾겠다');
// 		}else{
// 			leaderList += name;
// 			console.log(leaderList);
			
// 		}

// 		setTimeout(() => {
// 			name = 'yves';

// 			if(!name){
// 				console.log(' 리더 이름 못 찾겠다');
// 			}else{
// 				leaderList += name;
// 				console.log(leaderList);
				
// 			}
// 		}, 1000);
// 	}, 1000);
// }, 1000);

// 콜백 지옥
// - setTimeout 안에 또 따른 setTimemout이 중첩되면서 코드가 점점 오른쪽으로 밀림
// - 이로 인해 코드가 복잡해지고 읽기 어려워짐