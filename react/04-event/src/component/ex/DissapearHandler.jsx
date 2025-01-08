import React, { useState } from 'react';

const DissapearHandler = () => {
    // const [text, setText] = useState('안녕');
    const [btnText, setBtnText] = useState('사라져라');
    const [display, setDisplay] = useState('block');

    const btnHandler = () => {
		if(display === 'block'){
			setBtnText('보여라');
			setDisplay('none');
		}else{
			setBtnText('사라져라');
			setDisplay('block');
		}
    };
    return (
        <div>
            <button onClick={btnHandler}> {btnText}</button>
            <h2 style={{ display: display }}>안녕</h2>
        </div>
    );
};

export default DissapearHandler;
