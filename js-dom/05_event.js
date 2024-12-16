// JS Event (이벤트)
// 어떤 사건을 의미
// ex. 버튼 클릭, 웹페이지 로드, 키가 눌렸을 때 등등

// 이벤트에 "함수" 등록 방법 2가지
// 1. 'HTML' 상에서 onXXX 속성으로 등록
// 2. js에서 listener를 사용해서 등록

// 1. onXXX 속성으로 등록
function clickH1(){
	alert('제목 클릭! 함수 이용');
}

// 2. addEventListener

/* * 
* 기본구조
* 
* element.addEventListener(event, function)
* 
* event: 처리할 이벤트의 이름(ex. click, keyup)
* function: 이벤트 발생 시 실행할 함수
* 
* - 여러개의 이벤트 리스터 등록 가능
*/

const btn1 = document.querySelector('.btn-black');
const btn2 = document.querySelector('.btn-green');
const btn3 = document.querySelector('.btn-blue');
const btn4 = document.querySelector('.btn-red');
const container = document.getElementById('container');

btn1.addEventListener('click', () => alert('버튼1 클릭') );
btn1.addEventListener('mouseover', () => btn1.style.backgroundColor = 'skyblue');
btn1.addEventListener('mouseout', () => btn1.style.backgroundColor = '#333');

btn2.addEventListener('click', () => {
	const div = document.createElement('div');
	div.style.backgroundColor = 'pink';
	div.innerHTML = 'Hi';
	container.append(div);
})

btn3.addEventListener('click', changeColor);
function changeColor(){
	const divs = document.querySelectorAll('#container div');
	
	for(let div of divs){
		div.style.backgroundColor = 'lime';
	}
};


btn4.addEventListener('click', changeBtnColor);
function changeBtnColor(){
	console.log(this); // 자기 자신 => btn4
	console.log(this.parentNode);
	this.style.backgroundColor = 'aqua';
}

// * this 키워드
// - 이벤트가 발생한 DOM 요소를 가리킴
// - 화살표 함수에서는 동작 방식이 다르게 적용될 수 있다.
// 일반 함수: 'this'는 이벤트를 발생시킨 DOM 요소를 가리킴
// 화살표 함수: 'this'는 상위 스코프를 가져옴(window, undefined)

// key event
// 이밴트 객체
// - DOM 이벤트가 발생할 때 브라우저가 자동으로 생성하는 객체
// - 브라우저는 발생한 이벤트에 대한 다양한 정보를 담은 "이벤트 객체 (event object)"를 이벤트 리스너에 전달
// ex. mousedown 이벤트 발생 -> 이벤트 객체는 (마우스 좌표, 버튼 번호) 정보를 가짐
// ex. keydown 이벤트 발생 -> 이벤트 객체는 (키 코드값, 어떤 키가 눌렸는지에 대한 정보) 정보를 가짐

const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', (event) => {
	// event 객체
	// 이벤트에 대한 다양한 정보를 포함
	console.log(event);
});

input.addEventListener('keydown', (e) =>{
	// console.log(e);
	// console.log(e.code); // 눌려진 키의 고유 코드
	// console.log(e.key); // input에 입력된 값
	// console.log(e.target); // 이벤트가 발생한 대상 요소를 참조

	if (e.code === 'ArrowUp'){
		console.log('위로!');
	} else if(e.code === 'ArrowDown'){
		console.log('down!!');
	}else{
		console.log('☠️');
		
	}

});

// 폼 이벤트
const todoForm = document.getElementById('todo-form');
const todos = document.querySelector('.todos');

todoForm.addEventListener('submit', (e) =>{
	console.log('submit');
	// submit: 폼에 대한 내용을 제출
	// 제출하는 순간 새로 고침이 일어난다.
	e.preventDefault(); // 폼 submit 이벤트가 새로고침 되는걸 막음 - 폼 제출을 막음

	const todoInput = document.querySelector('input[name="todo"]');
	console.log(todoInput.value); // 입력된 값이 찍힌다.

	const newTodo = todoInput.value.trim(); // 양쪽 공백 제거

	if(newTodo !== ''){
		const newTodoLi = document.createElement('li'); // <li></li>
		// newTodoLi.append(newTodo) // <li> input 입력값 </li>
		newTodoLi.textContent = newTodo;
		todos.append(newTodoLi);
	}
	
	// input 창 초기화
	todoInput.value = '';
});

// change: input 요소에 변경이 일어나고, 다른 요소를 클릭해서

/**
 *  change
 * : input 요소에 변경이 일어나고, 다른 요소를 클릭해서
 * input이 포커스 아웃(blur) 처리 되었을때 일어나는 이벤트
 */

const changeInput = document.querySelector('#change-input');
changeInput.addEventListener('change', (e) =>{
	console.log('change');
	console.log(e.target.value);
});

/**
 * * input
 * : input에 값이 입력 될때마다 이벤트 발생
 */
changeInput.addEventListener('input', (e) => {
	console.log('입력발생');
	console.log(e.target.value);
	const div = document.querySelector('.intro');
	div.textContent = this.value;
});