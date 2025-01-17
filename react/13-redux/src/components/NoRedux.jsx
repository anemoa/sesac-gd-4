import React, { useState } from 'react';
import '../styles/Box.css';

const NoRedux = () => {
	const [number, setNumber] = useState(100);

	const plus = () => {
		setNumber(number + 1);
	}

	const minus = () => {
		setNumber(number - 1);
	}

    return (
        <div>
            <h1>NoRedux</h1>
            <h2>Redux 사용 안하고 props로 전달</h2>
			<Box1 number={number} plus={plus} minus={minus} />
        </div>
    );
};

export default NoRedux;


// Box1 컴포넌트
const Box1 = ({number, plus, minus}) => {
	return(
		<div className='box'>
			<h2>Box1: {number}</h2>
			<Box2  number={number} plus={plus} minus={minus} />
		</div>
	)
}

const Box2 = ({number, plus, minus}) => {
	return(
		<div className='box2'>
			<h2>Box2: </h2>
			<Box3 number={number} plus={plus} minus={minus} />
		</div>
	)
}

const Box3 = ({number, plus, minus}) => {
	return(
		<div className='box3'>
			<h2>Box3: </h2>
			<Box4 number={number} plus={plus} minus={minus} />
		</div>
	)
}

const Box4 = ({number, plus, minus}) => {
	return(
		<div className='box4'>
			<h2>Box4: {number} </h2>
			<button onClick={plus}>+</button>
			<button onClick={minus}>-</button>
		</div>
	)
}