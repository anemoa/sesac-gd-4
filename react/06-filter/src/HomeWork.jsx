import React, { useState } from 'react';

const HomeWork = () => {
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    const [user, setUser] = useState([
        { id: 1, name: '코디', email: 'codi@email.com' },
        { id: 2, name: '소희', email: 'sohee@email.com' },
    ]);

    const addList = () => {
        const newList = user.concat({
            id: user.length + 1,
            name: inputName,
            email: inputEmail,
        });

        setUser(newList);
        setInputEmail('');
        setInputName('');
    };

	// 엔터키 누르면 추가
	const handleKeyDown = (e) => {
		if (e.nativeEvent.isComposing) {
            return;
        }

        if (e.key === 'Enter') {
            addList();
        }
	}

	// 삭제 기능

	const deleteUser = (targetId) => {
		const newList = user.filter((use) => {
			return use.id !== targetId;
		})
		setUser(newList);
	}

	const doubleClickDelete = (e) => {
		if(e.target.tagName === "LI"){
			const targetId = Number(e.target.id);
			deleteUser(targetId);
		}
	}

    return (
        <div>
            <input
                type='text'
                placeholder='이름'
                onChange={(e) => {
                    setInputName(e.target.value);
                }}
            />
            <input
                type='email'
                name=''
                id=''
                placeholder='이메일'
                onChange={(e) => {
                    setInputEmail(e.target.value);
                }}

				onKeyDown={(e) => handleKeyDown(e)}
            />
            <button onClick={addList}>입력</button>

            <ul onDoubleClick={doubleClickDelete}>
                {user.map((use) => {
                    return (
                        <li key={use.id} id={use.id}>
                            {use.name}: {use.email}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default HomeWork;
