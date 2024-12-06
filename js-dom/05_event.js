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
}


btn4.addEventListener('click', changeBtnColor);
function changeBtnColor(){
	console.log(this); // 자기 자신 => btn4
	console.log(this.parentNode);
	this.style.backgroundColor = 'aqua';
}