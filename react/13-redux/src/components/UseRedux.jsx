import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus } from '../store/actions/counterAction';

const UseRedux = () => {

	// # 7. useSelector hook 사용하여 Redux 스토어에서 상태 읽어오기
	// const count = useSelector((state) => state); 
	// console.log(count);

	const count = useSelector((state) => state.count);
	console.log('count >>>', count);
	
	
    return (
        <div>
            <h1>UseRedux</h1>
			<h2>Redux 사용</h2>
			<h2>count: {count}</h2>
			<Box1 />
        </div>
    );
};

export default UseRedux;


// Box1 컴포넌트
const Box1 = () => {
	return(
		<div className='box'>
			<h2>Box1: </h2>
			<Box2  />
		</div>
	)
}

const Box2 = ({number, plus, minus}) => {
	return(
		<div className='box2'>
			<h2>Box2: </h2>
			<Box3 />
		</div>
	)
}

const Box3 = () => {
	return(
		<div className='box3'>
			<h2>Box3: </h2>
			<Box4 />
		</div>
	)
}

const Box4 = () => {
	// # 8. useSelector hook
	const count = useSelector((state) => state.count);

	// # 9. useDispatch hook 사용해서 액션을 디스패치 하는 함수 가져오기
	//      ㄴ 이 함수를 이용해 상태 업데이트!
	const dispatch = useDispatch();

	return(
		<div className='box4'>
			<h2>Box4: {count}</h2>
			<button onClick={() => dispatch(plus())}>+</button>
			<button onClick={() => dispatch(minus())}>-</button>
		</div>
	)
}