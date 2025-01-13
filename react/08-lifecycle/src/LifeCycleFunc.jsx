import React, { useState } from 'react';
import CycleFuncChild from './CycleFuncChild';

const LifeCycleFunc = () => {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(false);

    const changeNumber = () => {
        setNumber(number + 1);
    };

    const changeVisible = () => {
        setVisible(!visible);
    };
    return (
        <div>
            <button onClick={changeNumber}>Plus</button>
            <button onClick={changeVisible}>on / off</button>
            {visible && <CycleFuncChild number={number} />}
        </div>
    );
};

export default LifeCycleFunc;
