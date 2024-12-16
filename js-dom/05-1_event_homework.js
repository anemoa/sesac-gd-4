const body1 = document.body;
const btn = document.querySelector('button');
const h22 = document.querySelector('h2');


btn.addEventListener('click', () => {

	const randomRgb1 = parseInt(Math.random()*256);
	const randomRgb2 = parseInt(Math.random()*256);
	const randomRgb3 = parseInt(Math.random()*256);

	body1.style.backgroundColor = `rgb(${randomRgb1}, ${randomRgb2}, ${randomRgb3})`;

	h22.textContent = `rgb(${randomRgb1}, ${randomRgb2}, ${randomRgb3})`;
})


//////////////////////////////////////////////////////////////////

const userId = document.querySelector('#userid');
const comment = document.querySelector('#comment');
const subBtn = document.querySelector('button[type="submit"]');
const list = document.querySelector('.comment-list');


subBtn.addEventListener('click', (e) => {
	
	e.preventDefault();
	// 새로 고침 방지

	// input 값 잡기
	const idValue = userId.value;
	const comValue = comment.value;

	if(idValue.trim() && comValue.trim()){
		const li = document.createElement('li');

		// id에 strong 속성을 추가하기 위해 먼저 생성하기
		const strong = document.createElement('strong');
		
		strong.textContent = idValue;

		li.append(strong, ` -  ${comValue}`);

		list.append(li);

		userId.value = '';
		comment.value = '';
	}
});




//////////////////////////////////////////////////////////////////


const value1 = document.querySelector('#value1');
const value2 = document.querySelector('#value2');
const operator = document.querySelector('#operator');
const result = document.querySelector('#result');




// [계산] 버튼 클릭시 cal() 함수가 실행되도록 인라인 방식으로 미리 설정해 두었습니다.
function cal() {
	const val1Value = Number(value1.value);
	const val2Value = Number(value2.value);
	const operVal = operator.value;
	let calcRes;

	switch(operVal){
		case '+':
			calcRes = val1Value + val2Value;
			break;
		case '-':
			calcRes = val1Value - val2Value;
			break;
		case '*':
			calcRes = val1Value * val2Value;
			break;
		case '/':
			calcRes = val1Value / val2Value;
			break;
		default:
			alert('연산가자 아니다');
			return;
	}

	result.value = calcRes;
}


// [초기화] 버튼 클릭시 resetInput() 함수가 실행되도록 인라인 방식으로 미리 설정해 두었습니다.
function resetInput(){
	value1.value = '';
	value2.value = '';
	operator.value = '';
	result.value = '';
}



//////////////////////////////////////////////////////////////////

const writer = document.querySelector('#writer');
const content = document.querySelector('#content');
const writeBtn = document.querySelector('#writeBtn');
const table = document.querySelector('#table');

function writeNote(){
	wrtVal = writer.value;
	conVal = content.value;

	const tr = document.createElement('tr');
	
	const writerTd = document.createElement('td');
	const contentTd = document.createElement('td');
	const dateTd = document.createElement('td');

	writerTd.textContent = wrtVal;
	contentTd.textContent = conVal;
	dateTd.textContent = new Date().toLocaleString();

	tr.append(writerTd, contentTd, dateTd);

	table.append(tr);

	writer.value = '';
	content.value = '';
}
