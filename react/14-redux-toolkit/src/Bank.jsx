import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus } from './store/BankSlice';

const Bank = () => {
    const money = useSelector((state) => state.bank.money);
    const dispatch = useDispatch();

    const [inputMoney, setInputMoney] = useState('');

    const handleChange = (e) => {
        setInputMoney(e.target.value);
    };

    const moneyPlus = () => {
        dispatch(plus(Number(inputMoney)));
        setInputMoney('');
    };

    const moneyMinus = () => {
        dispatch(minus(Number(inputMoney)));
        setInputMoney('');
    };

    return (
        <div>
            <h1>은행</h1>
            <h2>잔액: {money}원 입니다.</h2>
            <input type='text' value={inputMoney} onChange={handleChange} />
            <button onClick={moneyPlus}>입금</button>
            <button onClick={moneyMinus}>출금</button>
        </div>
    );
};

export default Bank;
