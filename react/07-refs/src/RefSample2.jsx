import React, { useRef, useState } from 'react';

const RefSample2 = () => {
    const id = useRef(7); // 초기 값을 7로 설정
	console.log('id >>', id);

	const [num, setNum] = useState(7);

	const plusRef = () => {
		id.current += 1; // current 값을 직접 수정
		console.log('id.current >>>', id.current); // 값 증가 확인		
	}

	const plusState = () => {
		setNum(num + 1 );
		console.log('num >>>', num);
	}

    return (
        <div>
            <p>함수형 컴포넌트에서 버튼 클릭시 id 값을 1씩 증가</p>
            <h1>Ref</h1>
            <h2>{id.current}</h2>
            <button onClick={plusRef}>Plus</button>

			<hr />

			<h1>State</h1>
			<p>비교 ) State는 Ref와 다르게 값이 변경되면 리렌더링 되는 것을 확인</p>
			<h2>{num}</h2>
			<button onClick={plusState}>Plus</button>
        </div>
    );
};

export default RefSample2;
