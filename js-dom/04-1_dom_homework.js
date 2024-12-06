const span = document.querySelector('span');

span.textContent = '짱 맛나다!!!';
span.style.color = 'green';
span.style.fontSize = '50px';




// TODO: 문제 조건을 만족하는 js 코드 작성
// (참고) done 클래스와 todo 클래스에 대한 스타일시트는 haed > style 태그에 이미 정의되어 있습니다.


const todo = document.querySelectorAll('ul > .todo');
const done = document.querySelectorAll('ul > .done');


// todo.forEach( (list) => {
// 	list.classList.toggle('todo');
// 	list.classList.toggle('done');
// });

// done.forEach((list) => {
// 	list.classList.toggle('done');
// 	list.classList.toggle('todo');
// });

todo.forEach( (list) => {
	if(list.classList.contains('todo') ){
		list.classList.remove('todo');
		list.classList.add('done');
	}
});

done.forEach( (list) => {
	if(list.classList.contains('done')){
		list.classList.remove('done');
		list.classList.add('todo');
	}
});