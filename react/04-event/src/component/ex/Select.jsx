import React from 'react';

const Select = ({ setData }) => {
    return (
        <div>
            <label for='logos'>과일: </label>
            <select
                name='logos'
                id='logos'
                onChange={(e) => {
                    // data state 값의 fruit 값을 변경해주기
                    console.log(e.target.value);

                    // spread 연산자 (...연산자)
                    // ...data: 이전 값 그대로
                    // - 객체의 복사본을 만들때 유용한 js 문법
                    // - 객체의 모든 속성을 펼쳐서 새로운 객체를 만들어줌

                    // logo 값만 변경이 일어나서 logo만 바꿔줌
                    // logo 속성만 선택된 값으로 덮어 쓰여짐
                    // => logo 속성만 변경되고 나머지는 그대로 유자\
                    // -> 불변성 유지
                    setData((data) => {
                        return { ...data, logo: e.target.value };
                    });
                }}
            >
                <option value='logo1'>Logo 01</option>
                <option value='logo2'>Logo 02</option>
                <option value='logo3'>Logo 03</option>
            </select>

            <label for='bg-color'>배경색: </label>
            <select
                name='bg-color'
                id='bg-color'
                onChange={(e) => {
                    setData((data) => {
                        return {
                            ...data,
                            bgc: e.target.value,
                        };
                    });
                }}
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
                onChange={(e) => {
                    setData((data) => {
                        return { ...data, color: e.target.value };
                    });
                }}
            >
                <option value='white'>흰색</option>
                <option value='red'>빨강</option>
                <option value='gray'>회색</option>
                <option value='lime'>라임</option>
            </select>
        </div>
    );
};

export default Select;
