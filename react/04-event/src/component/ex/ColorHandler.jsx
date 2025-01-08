import React, { useState } from 'react';

const ColorHandler = () => {
    const [text, setText] = useState('검정색 글씨');
    const [color2, setColor2] = useState('black');

	const changeRed = () => {
		setColor2('red');
		setText('빨간 글씨')
	}

	const changeBlue = () => {
		setColor2('blue');
		setText('파란 글씨')
	}
    return (
        <div>
            <h2 style={{color: color2}}>{text}</h2>

            <button onClick={changeRed}> 빨간 글씨 </button>
            <button onClick={changeBlue}>파란 글씨</button>
        </div>
    );
};

export default ColorHandler;
