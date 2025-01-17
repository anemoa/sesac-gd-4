import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { minus, plus } from '../store/actions/counterAction';
// import { changeVisibility } from '../store/actions/isVisibleAction';
// 추가 액션 한 번에 가져오기
import {plus, minus, changeVisibility} from '../store/actions';

const UseRedux2 = () => {
	// # 6. redux 사용
	const count = useSelector((state) => state.counter.count);
	console.log('count >>>', count);
	

  return (
	<div><h1>UseRedux2</h1>
		<h2>Redux 사용 2</h2>
		<h2>리듀서 새로 추가</h2>
		<h2>count: {count}</h2>
		<Box1 />
	</div>
  )
}

export default UseRedux2;

// Box1 컴포넌트
const Box1 = () => {
	return(
		<div className='box'>
			<h2>Box1: </h2>
			<Box2  />
		</div>
	)
}

const Box2 = () => {
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
	const count = useSelector((state) => state.counter.count);
	const isVisible = useSelector((state) => state.isVisible);

	// # 7. dispatch 사용
	const dispatch = useDispatch();
	return(
		<div className='box4'>
			<h2>Box4: {count}</h2>
			<h2>isVisible 값은 {isVisible ? '참' : '거짓'} 이다</h2>
			<button onClick={() => dispatch(plus()) }>플러스</button>
			<button onClick={() => dispatch(minus()) }>마이너스</button>
			<button onClick={() => dispatch(changeVisibility())}>참거짓</button>
		</div>
	)
}