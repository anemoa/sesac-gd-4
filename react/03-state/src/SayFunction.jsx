import React, { use, useState } from 'react';

export const SayFunction = () => {
    // console.log(useState('welcome'));

    const [msg, setMsg] = useState('welcome');

    const onClickEnter = () => {
        setMsg('안녕하삼');
    };

    const onClickLeave = () => {
        setMsg('잘가라우');
    };

    const handleClick = () => {
        setMsg((currentMsg) => {
            return currentMsg === 'welcome' ? '환영쓰' : 'hihi';
        });
    };
    return (
        <div>
            <div>SayFunction</div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <button onClick={handleClick}>텍스트 바꾸기</button>
            <h1>{msg}</h1>
        </div>
    );
};
