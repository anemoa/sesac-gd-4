// 함수형 컴포넌트에서의 이벤트 사용
// - 이벤트 핸들러를 함수로 정의한 뒤, JSX의 이벤트 속성 전달
import React, { useState } from 'react';

export const FuncComponent = () => {
    const [number, setNumber] = useState(0);

    // #1. 인자 X
    const increase = () => {
        setNumber(number + 1);
    };

    // #2. 인자 1개
    const alertMsg = (msg) => {
        alert(`${msg}~ 현재 숫자는 ${number} 입니다.`);
    };

    // #3. 인자 2개
    const consoleMsg = (e, msg) => {
        console.log(e.target);
        console.log(`${msg}~ 현재 숫자는 ${number} 입니다.`);
    };

    // #4. e.target vs e.currentTarget
    // - e.target : 부모로부터 이벤트가 위임되어 발생하는 자식의 위치,
    //              즉, 내가 클릭한 자식 요소.
    // - e.currentTarget : 이벤트 핸들러가 있는 요소.
    const handleEvent = (e) => {
        console.log('e.target >>> ', e.target);
        console.log('e.currentTarget >>> ', e.currentTarget);
    };
    return (
        <>
            <div>FuncComponent</div>
            <h1>Number Counter</h1>
            <h2>{number}</h2>

            {/* #1. 함수에 인자가 없는 경우 : 함수 이름만 전달 */}
            <button onClick={increase}>더하기</button>

            {/* #2. 함수에 인자 1개 */}
            <button
                onClick={() => {
                    alertMsg('hello');
                }}
            >
                alert 출력
            </button>

            {/* #3. 함수에 인자 2개 */}
            <button
                onClick={(e) => {
                    consoleMsg(e, 'hello');
                }}
            >
                console 출력
            </button>

            {/* #4. e.target vs e.currentTarget */}
            <button onClick={handleEvent}>
                <span>handle Event</span>
            </button>
        </>
    );
};