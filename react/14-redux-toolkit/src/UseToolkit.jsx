import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { amount, minus, plus } from './store/counterSlice';
import { change2 } from './store/isVisibleSlice';

const UseToolkit = () => {
	// # 4. 상태 가져와서 사용
	const count  = useSelector((state) => state.counter.count);
	console.log(count);
	
    return (
        <div>
            <h1>UseToolkit</h1>
            <h2>리듀서 추가</h2>
            <h2>number: {count}</h2>
            <Box1 />
        </div>
    );
};

export default UseToolkit;

// Box1 컴포넌트
const Box1 = () => {
    return (
        <div className='box'>
            <h2>Box1: </h2>
            <Box2 />
        </div>
    );
};

const Box2 = () => {
    return (
        <div className='box2'>
            <h2>Box2: </h2>
            <Box3 />
        </div>
    );
};

const Box3 = () => {
    return (
        <div className='box3'>
            <h2>Box3: </h2>
            <Box4 />
        </div>
    );
};

const Box4 = () => {
	const count = useSelector((state) => state.counter.count);
	const isVisible = useSelector((state) => state.isVisible);

	// # 5. 액션 함수 실행
	const dispatch = useDispatch();

    return (
        <div className='box4'>
            <h2>Box4: {count}</h2>
			<button onClick={() => dispatch(plus()) }>+++</button>
			<button onClick={() => dispatch(minus()) }>---</button>
			<button onClick={() => dispatch(amount()) }>amount</button>

			<p>
				이것은 현재 "{isVisible ? '참': '거짓'}" 이다
			</p>
			<button onClick={() => dispatch(change2())}> 참 거짓</button>
        </div>
    );
};
