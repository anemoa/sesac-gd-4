// # 1. 튜플
// - 튜플은 고정된 개수의 요소를 가짐
// - 각 요소의 타입이 미리 지정된 배열
// - 각 요소의 순서가 중요하며 순서에 따라 타입이 다를 수 있음

//[튜플 타입 선언]
let drink: [string, number];

// [튜플 값 할당]
drink = ['color', 2000];

// 튜플 타입 선언과 할당을 동시에 하는 법
let drink2: [string, string] = ['cola', 'coca'];

// 튜플의 데이터를 변경할 때에도, 배열의 데이터를 변경했던 것처럼 인덱스로 접근
// 또한, 배열의 일부 메소드들도 사용 가능

drink2[0] = 'zero';
drink2[1] = 'pepe';
console.log('drink2 >>', drink2);

drink2.push('good'); // 튜플의 한계 / 원래는 추가되면 안됨. 이미 갯수랑 타입 다 정해놨으니까
console.log('drink2 >>>>>>', drink2 );
/**
 * ! 튜플의 숨겨진 한계
 * : 길이와 타입이 정해진 것처럼 보이지만, push 메소드가 동작하므로 정의가 깨짐
 *   ㄴ 튜플이라 고정된 개수가 변하면 안되는데 변해버림.
 * 
 * - 타입 시스템의 의도와 어긋나는 이러한 동작을 방지하고자 한다면
 *   as const를 사용하거나, readonly 키워드를 사용하여 튜플을 불변으로 만들 수 있다.
 */

// [readonly]
// - 요소의 타입 순서와 길이를 완벽히 고정
// - 일부 배열 메소드 사용 가능 (복사본 생성시 정도..?)
let drink3: readonly [string, number] = ['cider' , 2222];
// drink3.push('ss') // error
console.log('drink3 >>>', drink3);


// [as const]
// - 해당 튜플은 불변 상태가 됨
// - 모든 배열 메소드 사용 불가
let drink4: [string, number] = ['dr', 3333] as const;
// drink4.push('hello');
console.log('drink4 >>>', drink4);


// 튜플 나머지 연산자
let restTuple: [string, ...number[]] = ['yves', 22, 33, 44, 55];
// ...spread 연산자는 항상 마지막에 작성!
console.log('restTuple >>>', restTuple);


// ----------------------------------------------------
// ** Enum **
// - 사용하는 이유는?
// 1. 분야별로 종류를 정의하여 명확하게 사용
//    ㄴ 사요자 권한 분야만 따로 모아서 정의(열거) 해두고, 또 다른 분야만 따로 모아서 저장해두고,
//    ㄴ 의미를 명확하게 파악하여 사용할 수 있다.
// 2. 하드코딩을 줄이기 위해서

// [숫자 값 지정 가능]
// enum Auth {
// 	admin = 0,
// 	user = 1,
// 	guest = 2,
// }

// - # 1. enum은 기본으로 0부터 1씩 증가하는 값을 갖는다
enum Auth {
	admin,  // 0: 별도로 값을 지정해주지 않으면 0부터 시작 
	user,  // 1: 이전 값에 1씩 더해짐
	guest,  // 2: 
}

console.log(Auth);

enum Menu{
	pizza = 3333,
	pasta = 4444,
	chicken, // 4445 : # 2. 정의되지 않은 값은 이전 값에 1씩 더해짐
}

console.log(Menu);



// # 3. 문자열 지정 가능
enum Cafe {
	americano = '아메리카노',
	latte = '라떼'
}

console.log(Cafe);
console.log(Cafe.americano);


// # 3-2. 문자열 & 숫자 혼합 지정 가능
enum Cake{
	choco,
	vanilla,
	lemon,
	kiwi = 'kiwi'
}

console.log(Cake);


// # 4. JS 객체와의 차이
/**
 * ## 1. 양방향 매핑
 * - '키' 를 통해 값을 찾을 수 있음 (이건 js 객체도 마찬가지)
 * - '값'을 통해서도 키를 찾을 수 있음
 * 
 * 'TS'의 'enum'은 JS로 컴파일 될때 양방향 매핑 지원을 위해 변환
 * 이 변환 과정에서 'enum' 값과 키가 모두 포함된 객체가 생성되며, 로그에 양방향 매핑이 포함된 형태로 출력
 * 
 * ## 2. enum 은 한번 생성되면 속성 추가 및 수정 불가
 * 
 * ## 3. enum 은 속성 값으로 숫자, 문자열만 할당 가능
 * 
 */

enum Food{
	pizza = 222,
	pasta = 4422,
	coke = 111
}

console.log(Food.pasta); // 키를 통해 값을 찾음
console.log(Food[111]); // 값을 통해 키를 찾음
