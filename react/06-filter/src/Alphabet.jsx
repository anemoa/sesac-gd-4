import React, { useState } from 'react';

export default function Alphabet() {
    // 배열 ex
    // const [alphabet, setAlphabet] = useState(['D', 'e', 'm', 'O']);

    // 배열, 안에는 객체 형태 ex
    const [alphabet, setAlphabet] = useState([
        { id: 1, alpha: 'a' },
        { id: 2, alpha: 'p' },
        { id: 3, alpha: 'p' },
        { id: 4, alpha: 'l' },
        { id: 5, alpha: 'e' },
    ]);

    // input 데이터 상태 관리
    const [inputAlpha, setInputAlpha] = useState('');

    // #1. 글자 추가 기능
    const addAlpha = () => {
        // [Quiz] input이 빈 값이라면 alphabet 상태가 변경되지 않도록 하기.
        if (!inputAlpha || inputAlpha.trim().length === 0) {
            return;
        }

        // * concat
        // - (배열, 문자열)을 결합하는데 사용되는 메서드.
        // - 기존 (배열, 문자열)을 변경하지 않고, 주어진 배열이나 값들을 "새로운" (배열이나 문자열)로 결합하여 반환.

        const newAlpha = alphabet.concat({
            id: alphabet.length + 1,
            alpha: inputAlpha,
        });

        setAlphabet(newAlpha);
        setInputAlpha('');
    };

    // Q2) 엔터 키 눌러서 추가되도록
    const handleKey = (e) => {
        console.log(e.nativeEvent.isComposing);

        /**
         * (!) 한글 입력시 2개씩 입력되는 현상
         * - IME(입력기) 사용시 발생하는 현상
         *
         * - e.nativeEvent.isComposing: 입력중인 상태를 나타내는 속성
         *
         * e.nativeEvent.isComposing === true: 사용자가 아직 IME로 아직 문자 입력중
         * e.nativeEvent.isComposing === false: 입력이 확정되어 최종 문자로 처리 가능 상태
         */

        // IME 입력 중일 때는 처리하지 않는다.
        if (e.nativeEvent.isComposing) {
            return;
        }

        if (e.key === 'Enter') {
            addAlpha();
        }
    };

    // # 3. 글자 삭제 기능
    const deleteAlpha = (targetId) => {
        console.log(targetId); // targetId: 더블클릭 하여 삭제될 요소의 key id
		
		// 삭제할 아이디와 일치하지 않는 새로운 배열 생성
		const newAlpha = alphabet.filter((alpha) => {
			return alpha.id !== targetId; // id가 4일 경우 [1, 2, 3, 5] 
		})

		setAlphabet(newAlpha);
    };

    return (
        <>
            <h1>Map & Filter</h1>
            <ol>
                {/* 배열 ex */}
                {/* return 키워드 o */}
                {/* {alphabet.map((value, idx) => {
                    return <li key={idx}>{value}</li>;
                })} */}
                {/* return 키워드 x, 중괄호 x 소괄호 o */}
                {/* {alphabet.map((value, idx) => (
                    <li key={idx}>{value}</li>
                ))} */}
                {/* 배열 in 객체 ex */}
                {/* {alphabet.map((value) => {
                    return <li key={value.id}>{value.alpha}</li>;
                })} */}
            </ol>

            {/* #1. 알파벳 추가하기 기능 */}
            <input
                type='text'
                placeholder='알파벳 입력'
                value={inputAlpha}
                onChange={(e) => {
                    setInputAlpha(e.target.value);
                }}
                onKeyDown={(e) => handleKey(e)}
            />
            <button onClick={addAlpha}>ADD</button>

            {/* 3. 알파벳 삭제하기 기능 */}
            <ol>
                {alphabet.map((value) => {
                    return (
                        <li
                            key={value.id}
                            onDoubleClick={() => deleteAlpha(value.id)}
                        >
                            {value.alpha}
                        </li>
                    );
                })}
            </ol>
        </>
    );
}

// *concat 예제
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3); // [1, 2, 3, 4, 5, 6]
