import React, { useState } from 'react';

const FuncCompo = () => {
    const [num, setNum] = useState(0);

    const plus = () => {
        setNum(num + 1);
    };

    const minus = () => {
        setNum(num - 2);
    };
    return (
        <div>
            <h1>count: {num}</h1>
			<button onClick={plus}>+1</button>
			<br />
			<button onClick={minus}>-2</button>
        </div>
    );
};

export default FuncCompo;
