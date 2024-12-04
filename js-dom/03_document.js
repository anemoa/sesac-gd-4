console.log(document);
console.log(document.childNodes); // [<!DOCTYPE html>, html]
console.log(document.childNodes[1]); // html
console.log(document.childNodes[1].childNodes); // [head, text, body]
console.log(document.childNodes[1].childNodes[2]); // body
console.log(document.childNodes[1].childNodes[2].childNodes);
// 이렇게 접근하면 너무 불편하니까.. 이렇게 하지 않기 위해서 속성과 메서드 사용.
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL); // http://127.0.0.1:5502/04-js-dom/03_document.html
// console.log(document.domain); // 127.0.0.1
// * 취소선이 그어지는 이유
// - 해당 속성의 사용을 권장하지 않거나, 더 이상 지원되지 않을 가능성을 나타냄.
// - 최신 보안 정책에서는 도메인 사용한 접근 제어 방식이 보안상 취약할 수 있기 때문에 지양한다.

console.log('----------------------');
// document 객체를 이용한 HTML
// #1. 요소 선택
// 1. getElementById
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

// 2. getElementsByClassName (HTMLCollection)
console.log(document.getElementsByClassName('pink'));
console.log(document.getElementsByClassName('pink')[2]);

// 3. getElementsByTagName (HTMLCollection)
console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByTagName('h1'));

// 4. getElementsByName (NodeList)
console.log(document.getElementsByName('id'));

// 5. querySelector (CSS Selector)
// - 처음 발견한 하나만 가지고 옴.
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name="id"]'));
console.log('-----------------------------');

// 6. querySelectorAll (CSS Selector) (NodeList)
// - 선택자에 해당되는 모든 요소를 선택.
console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('#green'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('[name="id"]'));

console.log(document.querySelectorAll('div')[0]);
console.log(document.querySelectorAll('div')[1]);
console.log(document.querySelectorAll('div')[2]);
console.log(document.querySelectorAll('div')[3]);
console.log(document.querySelectorAll('div')[4]);
console.log('------------------------------------');

// * 유사 배열 (HTMLCollection, NodeList)
// - [] 식으로 생긴 배열과 비슷하지만 완전히 같지는 않은 객체! - 배열처럼 사용 가능.
// - HTML 문서 내 요소들을 그룹으로 묶어 제공하는 컬렉션.
// - 배열 처럼 Index, length 를 가짐.
// - But, 배열과 달리 사용 가능한 메서드가 제한적.

// #1. HTMLCollection
// - HTML 문서에서 특정 조건에 맞는 요소들을 실시간으로 컬렉션 형태로 반환.
// - 실시간: 문서 내용이 변경되면 HTMLCollection도 즉시 업데이트.
// - HTML 요소 전용: 컬렉션에 포함된 항목은 항상 HTML 요소.
// - 배열은 아님! : 배열처럼 인덱스로 접근 가능하나, 배열 메서드 (forEach, map 등) 사용 불가!

// for문으로 가능.
// console.log(document.getElementsByClassName('pink'));
const pinkElements = document.getElementsByClassName('pink');
for (let i = 0; i < pinkElements.length; i++) {
    console.log('pinkElements >>> ', pinkElements[i]);
}

// HTMLCollection -> forEach() 메서드 사용 x
// 반복을 해야된다? -> Array 변경 - Array.from() 메서드 사용.

// ** Array.from() 메서드
// - ES6 에서 도입된 JS 메서드.
// - "유사 배열 객체"나 "반복 가능한 객체"를 실제 배열로 변환하는데 사용.
// - 또한, 배열을 생성하면서 특정 로직을 적용할 수도 있음.

// * 구문
// Array.from(arrayLike, mapFunction, thisArg)
// - arrayLike: 배열로 변환할 "유사 배열 객체"나 "반복 가능한 객체"
// - mapFunction (선택) : 새 배열의 각 요소에 대해 실행할 매핑 함수.
// - thisArg (선택) : mapFunction을 실행할 때 사용할 this 값.

// 1) 유사 배열 객체를 배열로 변환.
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const array = Array.from(arrayLike);
console.log('array : ', array); //  ['a', 'b', 'c']

// 2) 문자열을 배열로 변환
const str = 'hello';
const strArray = Array.from(str);
console.log('strArray : ', strArray); //  ['h', 'e', 'l', 'l', 'o']

// 3) 숫자 범위 배열 생성
const range = Array.from({ length: 5 }, (_, i) => i + 1);
console.log('range : ', range); // [1, 2, 3, 4, 5]
// _는 단순히 "인덱스를 이용해 배열을 생성한다"는 의도.
// [0, 1, 2, 3, 4]
/**
 * 매개변수 의미
 * 1. (_)
 * - 배열의 각 요소 값을 나타냄.
 * - 배열을 생성할 때 초기값은 기본적으로 undefined 이므로 사용되지 않는 경우가 많음.
 * - 사용하지 않을 때는 관습적으로 _로 표현하여 '사용하지 않는 값'임을 명시.
 *
 * 2. (i)
 * - 현재 인덱스를 나타냄.
 * - 배열의 각 위치에서 몇 번째 요소인지 알려줌.
 */

// 4) HTMLCollection을 배열로 변환. -> .forEach 메서드 사용 가능!
const htmlcollection = document.getElementsByTagName('div');
const array2 = Array.from(htmlcollection);
console.log('array2 : ', array2);

array2.forEach((elem) => console.log(elem));
console.log('----------------------------');

// #2. NodeList
// - DOM에서 노드의 그룹을 반환. (텍스트 노드, 주석 노드 포함)
// - 정적: getElementsByName, querySelectorAll로 생성한 것은 정적.
// - 실시간: childNodes로 생성한 것은 실시간.

// NodeList => forEach() 반복문 사용 가능.
document.querySelectorAll('.pink').forEach((elem) => console.log(elem));

// (실습) for .. of 반복문 가능.
const pinks = document.querySelectorAll('.pink'); // [div.pink, div.pink, div.pink, div.pink]
for (let pink of pinks) {
    console.log(pink);
}

// 모든 요소는 -> 모든 노드가 됩니다. // 모든 노드가 -> 모든 요소는 아니에요.