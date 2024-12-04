      // TODO: 문제 조건을 만족하는 js 코드 작성
      // (참고) article-box, img-box, text-center 클래스에 대한 스타일시트는 haed > style 태그에 이미 정의되어 있습니다.

const section = document.querySelector("section");
const icecreams = [
  "내가 아인슈페너?!",
  "엄마는 외계인",
  "민트 초콜릿 칩",
  "뉴욕 치즈케이크",
  "아이스 초당옥수수",
  "초콜릿 무스",
  "체리쥬빌레",
  "뮤! 넌 내거야",
  "오레오 쿠키 앤 크림",
];


icecreams.forEach( (ice, idx) => {

	const article = document.createElement('article');
	const img = document.createElement('img');
	const h3 = document.createElement('h3');
	const div = document.createElement('div');

	article.classList.add('article-box');
	img.classList.add('img-box');
	h3.classList.add('text-center');
	div.classList.add('text-center');

	section.append(article);

	img.setAttribute('src', `./img/0${idx+1}.png`);
	h3.textContent = `Top${idx+1}`;
	div.textContent = ice;
	article.append(img, h3, div);	
});
