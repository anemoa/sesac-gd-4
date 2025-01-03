/**
 * 
 * /src/assets 폴더 생성
 * : React 컴포넌트 내부에서 사용되는 이미지, 아이콘 등 정적 파일 저장
 * - ex) 배경 이미지, 버튼 아이콘, 프로필 이미지 등등
 * "import" 키워드로 불러와야 함
 * 
 * /public
 * : html 파일에 직접 삽입되거나, 빌드 과정 없이 원본 파일 그대로 사용되어야 하는 파일 저장
 * - index.html에 직접 사용하는 파일들
 * - ex) 파비콘, 로고, 웹폰트 등등
 *  
 */

import img from './assets/logo512.png';

function App() {
	const name = 'yves';
	const student = 'sesac';

	const checkPerson = () => {
		if(name === 'yves'){
			return 'yves';
		}else if(name === 'lee'){
			return 'lee'
		}else{
			return '너 이름이 뭐니?'
		}
	};

	const styles = {
		backgroundColor: 'green',
		color: 'yellow',
		fontSize: '50px',
		textAlign: 'center'
	};
	return (
    	<div className="App">
			{/* JS 문법 */}
			{/* # 1. 하나로 감싸는 요소 */}
			{/* 의미 없는 div가 싫다 > <></> Fragment 문법 */}
			<>
				<h1>assdfsdf</h1>
			</>
			{/* # 2. js 문법 사용 가능 */}
			{/* 
				- {}로 감싸면 js 표현식 사용 가능
				- {}안에서 삼항 연산자 사용 가능(if, for문 사용 불가)
			*/}
			<div>{name}안녕?</div>
			<div>{student === 'sesac' ? (<span>크루</span>) : (<span>너 누구니?</span>)}</div>

			{/* # 2-1. 복잡한 조건을 이용하고 싶다면? -> 위에서 함수로 만들어 사용 */}
			<h2>{checkPerson()}</h2>

			{/* # 2-2. 조건에 따른 렌더링 (&&) */}
			{/* 조건이 참일때만 특정 요솔흘 렌더링 할때*/}
			<h3>
				{name === 'yves' && 'hihi'}
			</h3>

			{/* # 3. 스타일 속성 */}
			{/* 
				- 리액트에서 Dom 요소 스타일 적용시 문자열 x --> 객체 사용
				- {{스타일 명: '값'}}
				- 스타일 이름 중 하이픈 포함시 camelCase로 작성
				(ex: backgroundColor)
				JSX에서는 - 를 빼기로 오인할 수 있기 때문.
			*/}
			<div style={styles}>
				인라인 스타일 적용
			</div>
			<div style={{
					backgroundColor: 'black',
					color: 'pink',
					fontSize: '30px'
				}}
			>
				직접 인라인 스타일 적용
			</div>

			{/* # 4. className 사용 */}
			{/* - class 속성이 아닌 className 속성 사용 */}

			{/* # 4-1. html 에선느 함수를 "호출", jsx에서는 함수를 "선언" */}
			<button onClick={() => {
				console.log('sfdsfsdfsdf');
			}}>
				버튼
			</button>

			{/* # 5. 종료 태그(closing tag)가 없는 태그 사용시 꼭 작성 해줘야 함*/}
			{/* 기존의 종료 태그가 없는 태그 종류 */}
			{/* <input /> or <input></input> */}

			{/* # 6. 주석 */}
			{/* - //: jsx 외부 주석 */}
			{/* - {* *}: jsx 내부 주석 */}

			{/* /경로가 public 폴더이다. */}
			<img src="/logo192.png" alt="" />

			{/* src 내부의 이미지를 사용할 경우 > 맨 위에서 이미지를 import 해야 함 */}
			<img src={img} />
    	</div>
	);
}

export default App;
