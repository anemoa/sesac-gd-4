// only TS type

// #1. 튜플 (Tuple)
// - 튜플은 고정된 개수의 요소를 가짐.
// - 각 요소의 타입이 미리 지정된 배열.
// - 각 요소의 순서가 중요하며 순서에 따라 타입이 다를 수 있음.

// [ 튜플 타입 선언 ]
let drink: [string, number];

// [ 튜플 값 할당 ]
drink = ['color', 1];

// [ 튜플 타입 선언과 할당을 동시에 하는 법 ]
let drink2: [string, string] = ['cola', 'pepci'];
// 튜플의 데이터를 변경할 때에도, 배열의 데이터를 변경했던 것처럼 인덱스로 접근.
// 또한, 배열의 일부 메소드들도 사용 가능.

drink2[0] = 'zeroCola';
drink2[1] = 'zeroPepci';
console.log('drink2 >>> ', drink2);

drink2.push('good'); // 튜플의 한계
console.log('drink2 >>> ', drink2);
/**
 * (!) 튜플의 숨겨진 한계
 * : 길이와 타입이 정해진 것처럼 보이지만, push 메소드가 동작하므로 정의가 깨짐.
 *   ㄴ 튜플이라 고정된 개수가 변하면 안되는데 변해버림.
 *
 * - 타입 시스템의 의도와 어긋나는 이러한 동작을 방지하고자 한다면,
 *   as const를 사용하거나, readonly 키워드를 사용하여 튜플을 불변으로 만들 수 있다.
 */

// [readonly]
// - 요소의 타입 순서와 길이를 완벽히 고정.
// - 일부 배열 메서드 사용 가능 (복사본 생성시 정도..?)
let drink3: readonly [string, number] = ['cider', 2000];
// drink3.push('hello'); // Error
console.log('drink3 >>> ', drink3);

// [as const]
// - 해당 튜플은 불변 상태가 됨.
// - 모든 배열 메서드 사용 불가
let drink4: [string, number] = ['cider', 4000] as const;
// drink4.push('hello');
console.log('drink4 >>> ', drink4);

// [ 튜플 나머지 연산자 ]
let restTuple: [string, ...number[]] = ['damon', 10, 20, 30];
// ...spread 연산자는 항상 마지막에 작성!
console.log('restTuple >>> ', restTuple);

// #############################################
// ** Enum **
// - 사용하는 이유는?
// - 1. 분야별로 종류를 정의하여 명확하게 사용.
//      ㄴ 사용자 권한 분야만 따로 모아서 정의(열거)해두고, 또 다른 분야만 따로 모아서 정의해두고,
//      ㄴ 의미를 명확하게 파악하여 사용할 수 있다.
// - 2. 하드코딩을 줄이기 위해서

// [ 숫자 값 지정 가능 ]
// enum Auth {
//     admin = 0,
//     user = 1,
//     guset = 2,
// }

// - #1. enum은 기본으로 0부터 1씩 증가하는 값을 갖는다.
enum Auth {
    admin, // 0 : 별도로 값을 지정해주지 않으면 0부터 시작.
    user, // 1 : 이전 값에 1씩 더해짐.
    guest,
}

console.log(Auth);

enum Menu {
    pizza = 4000,
    pasta = 5000,
    chicken, // 5001 : #2. 정의되지 않은 값은 이전 값에 1씩 더해짐.
}

console.log(Menu);

// #3. 문자열 지정 가능
enum Cafe {
    americano = '아메리카노',
    latte = '카페라떼',
}
console.log(Cafe);
console.log(Cafe.americano);
console.log(Cafe.latte);

// #3-2. 문자열 & 숫자 혼합 지정 가능
enum Cake {
    choco,
    vanilla,
    mango,
    kiwi = 'kiwi',
}
console.log(Cake);

// #4. JS 객체와의 차이.
/**
 * ##1. 양방향 매핑
 * - '키'를 통해 값을 찾을 수 있음.
 * - '값'을 통해 키를 찾을 수 있음.
 *
 * 'TS'의 'enum'은 JS로 컴파일 될 때, 양방향 매핑 지원을 위해 변환.
 * 이 변환 과정에서 'enum' 값과 키가 모두 포함된 객체가 생성되며, 로그에 양방향 매핑이 포함된 형태로 출력.
 *
 * ##2. 'enum'은 한번 생성되면, 속성 추가 및 수정 불가
 *
 * ##3. 'enum'은 속성 값으로 숫자, 문자열만 할당 가능.
 */

// ex)
// enum Food {
//     pizza = 4000,
//     pasta = 5000,
//     burger = 2000,
// }
// console.log(Food.pasta); // 5000 ('키'를 통해서 값을 찾음)
// console.log(Food[5000]); // pasta ('값'을 통해서 키를 찾음)

// #############################################
// ** Any **
// 1. 명시적 타입 지정
let val: any = true;
val = 'dog';
console.log('val >>> ', val, typeof val);

// 2. 암묵적 타입 지정
let val2;
val2 = false;
val2 = 'cat';
console.log('val2 >>> ', val2, typeof val2);

// #############################################
// ** 타입 별칭 (Type Alias) **
// - TS에서 특정 타입에 대해 새로운 이름(별칭)을 만들어 재사용 할 수 있도록 해주는 기능 (= 사용자 정의 타입)
// - 재사용성 증가, 유지보수 용이

type Gender = 'Female' | 'male';
// - Gender 타입은 "Female" 또는 "male" 값만 가질 수 있도록 정의됨.

const gender: Gender = 'Female'; // o
// const gender2: Gender = 'female'; // x 오류 발생 (대소문자 구분)

// * 튜플(Tuple)과 타입 별칭을 활용
// - 엄격하고 명확히 데이터를 관리해야 하는 작업일 경우 이점.
type UserInfo = [number, string, number];
let vip1: UserInfo = [1, 'Damon', 5000];
let vip2: UserInfo = [2, 'Yuni', 3000];

// #############################################
// * Interface
// #1. 객체 타입 정의
// - interface 키워드 사용
interface Crew {
    name: string;
    age: number;
    exp: boolean;
}

const crew1: Crew = {
    name: 'Damon',
    age: 20,
    exp: false,
};

// #2. 선택적 속성
// - 모든 속성이 필수는 아님!
// - '?' 붙이기
interface Crew2 {
    name: string;
    age?: number; // age는 선택적 속성
}
const crew2: Crew2 = {
    name: 'layra',
};
// crew2 객체는 age 속성이 없어도 유효함

// #3. readOnly 읽기 전용 속성
// - 객체가 초기화 된 후에는 변경할 수 없음.
const crew3: Crew = {
    name: 'John',
    age: 22,
    exp: true,
};
crew3.name = 'Son';
// crew3.age = 10; // readyonly는 수정 불가능!
console.log('crew3 >>>> ', crew3);

// #4. 인터페이스 상속(확장)
enum Score {
    Aplus = 'A+',
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    F = 'F',
}

interface Team extends Crew {
    position: string;
    readonly personnel?: number;
    [grade: number]: Score;
}
/**
 * Crew
 * name : string,
 * age : number
 * exp : boolean
 */

const first: Team = {
    name: 'Damon',
    age: 30,
    exp: true,
    position: 'FrontEnd',
    4: Score.Aplus, //  [grade: number]: Score;
    // '1': 'A+'
};
console.log('first >>> ', first);

/**
 *  [grade: number]: Score;
 *
 * ** 인덱스 시그니처
 * - 객체의 키와 값의 타입을 동적으로 정의
 * - 즉, 객체의 속성이 사전에 정해져 있지 않고, 임의의 키로 접근할 수 있도록 허용할 때 사용
 * = 객체가 어떤 키로든 접근할 수 있도록 허용하고, 키와 그에 대응하는 값의 타입을 정의 할 수 있는 방법을 제공.
 *
 * - 구문
 * interface 인터페이스명 {
 *      [key: 타입]: 값의 타입;
 * }
 *
 * //  [grade: number] - (숫자)인 키
 * //  [grade: number]: string - (숫자)인 키를 가진 객체가 (문자열) 값을 가질 것임을 명시.
 * //  Ex) 1: "Great"
 * //  기존 속성과 시그니처 간의 일관성을 유지하는 것이 중요.
 */

// 값 변경 (점 접근법, 대괄호 접근법)
first.position = 'Backend';
first['age'] = 25;
console.log('first >>> ', first);

// #############################################
// ** type vs enum
type Money1 = 500 | 700 | 1000;
enum Money2 {
    a = 500,
    b = 700,
    c = 1000,
}
const mon1: Money1 = 500;
const mon2: Money2 = Money2.a;
console.log(mon1);
console.log(mon2);
/**
 * 목적:
 * type - 복잡한 타입을 정의하고, 코드에서 타입을 재사용하고 가독성을 높이기 위해 사용.
 * enum - 값들의 집합을 정의하고, 이를 상수처럼 사용하기 위해 사용
 */

// * 교차 타입 : 두 개 이상의 타일을 합쳐서 하나의 객체가 모든 속성을 포함하도록 만듬.
interface Toy {
    name: string;
    start(): void;
}

interface Car {
    name: string; // 공동퇸 속성을 가지고 있어도 상관없음.
    color: string;
    price: number;
}

// 1. Type 별칭을 사용해서 교차 타입
// type ToyCar = Toy & Car; // '&' 연산자 사용

// 2. 인터페이스를 사용한 교차 타입
interface ToyCar extends Toy, Car {}
// {} : 별도의 새로운 속성을 추가하지 않고 기존의 인터페이스들(Toy, Car)을 **그대로 상속**하려는 목적

const toyCar: ToyCar = {
    name: 'tayo',
    start() {
        console.log('출발!');
    },
    color: 'blue',
    price: 5000,
};
console.log(toyCar);

// ** type 사용 예시
type Gender2 = 'F' | 'M';
type Drama = {
    name: string;
    age: number;
    like?: string[];
    gender: Gender2; // 'F', 'M' 둘 중 하나여야 함.
};

const Ok: Drama = {
    name: '옥씨부인전',
    age: 15,
    gender: 'F',
};
console.log(Ok);