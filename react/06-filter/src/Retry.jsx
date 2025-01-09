import React, { useState } from 'react';

const Retry = () => {
    const [inputNameValue, setInputNameValue] = useState('');
    const [inputTitleValue, setInputTitleValue] = useState('');

	const [lists, setLists] = useState([]);

	const addLists = () => {
		const newLists = lists.concat({
			id: lists.length + 1,
			name: inputNameValue,
			title: inputTitleValue,
		});

		setLists(newLists);
		setInputNameValue('');
		setInputTitleValue('');
	}

    return (
        <div>
            <label htmlFor='name'>이름</label>
            <input
                type='text'
                id='name'
                value={inputNameValue}
                onChange={(e) => setInputNameValue(e.target.value)}
            />
            <label htmlFor='title'>제목</label>
            <input
                type='text'
                id='title'
                value={inputTitleValue}
                onChange={(e) => setInputTitleValue(e.target.value)}
            />
            <br />
            <button onClick={addLists}>제출</button>

            <ul>
                {
					lists.map((list) => {
						return(
							<li key={list.id}>
								{list.name}: {list.title}
							</li>
						)
					})
				}
            </ul>
        </div>
    );
};

export default Retry;
