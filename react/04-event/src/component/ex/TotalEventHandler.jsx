import React, { useState } from 'react';

const TotalEventHandler = () => {
    const [img, setImg] = useState('logo1');
    const [bgColor, setBgColor] = useState('black');
    const [color, setColor] = useState('white');
    const [textValue, setTextValue] = useState('text');

    const imgHandler = (e) => {
        setImg(e.target.value);
    };

    const bgColorSelect = (e) => {
        setBgColor(e.target.value);
    };

    const colorSelect = (e) => {
        setColor(e.target.value);
    };

    const textValueHandler = (e) => {
        setTextValue(e.target.value);
    };
    return (
        <div>
            <label for='logos'>과일: </label>
            <select name='logos' id='logos' onChange={imgHandler} value={img}>
                <option value='logo1'>Logo 01</option>
                <option value='logo2'>Logo 02</option>
                <option value='logo3'>Logo 03</option>
            </select>

            <label for='bg-color'>배경색: </label>
            <select
                name='bg-color'
                id='bg-color'
                onChange={bgColorSelect}
                value={bgColor}
            >
                <option value='black'>검정</option>
                <option value='green'>초록</option>
                <option value='blue'>파랑</option>
                <option value='yellow'>노랑</option>
            </select>

            <label for='color'>글자색: </label>
            <select
                name='color'
                id='color'
                onChange={colorSelect}
                value={color}
            >
                <option value='white'>흰색</option>
                <option value='red'>빨강</option>
                <option value='gray'>회색</option>
                <option value='lime'>라임</option>
            </select>

            <p>
                <label for='text'>내용: </label>
                <input
                    type='text'
                    id='text'
                    placeholder='내용 입력하시오'
                    onChange={textValueHandler}
                />
            </p>

            <div style={{ width: '200px' }}>
                <img
                    src={`/${img}.jpg`}
                    alt={`${img}`}
                    style={{ width: '100%' }}
                />

                <p style={{ backgroundColor: bgColor, color: color }}>
                    {textValue}
                </p>
            </div>
        </div>
    );
};

export default TotalEventHandler;
