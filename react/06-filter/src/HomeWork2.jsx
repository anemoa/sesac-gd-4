import React, { use, useRef, useState } from 'react';
import './HomeWork2.css';

const HomeWork2 = () => {
    const [nameInputVal, setNameInputVal] = useState('');
    const [titleInputVal, setTitleInputVal] = useState('');
    const [lists, setLists] = useState([]);

	const nameRef = useRef();
	const titleRef = useRef();

    // 검색 상태 관리
    const [searchType, setSearchType] = useState('name');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchRes, setSearchRes] = useState([]);

    const addList = (e) => {
        e.preventDefault();

		if(! nameInputVal.trim()){
			nameRef.current.focus();
			return;
		}
		if(!titleInputVal.trim()){
			titleRef.current.focus();
			return;
		}

        const newLists = lists.concat({
            id: lists.length + 1,
            title: titleInputVal,
            name: nameInputVal,
        });

        setLists(newLists);
        setTitleInputVal('');
        setNameInputVal('');
    };

    const searchHandler = (e) => {
        e.preventDefault();

        if (!searchKeyword.trim()) {
            alert('검색어를 입력하라 휴먼!');
            return;
        }

        const results = lists.filter((list) => {
            if (searchType === 'name') {
                return list.name.includes(searchKeyword);
            } else {
                return list.title.includes(searchKeyword);
            }
        });

        setSearchRes(results);
    };

	const showAllResHandler = (e) => {
		e.preventDefault();
		setSearchRes(lists);
	}

    return (
        <div className='layout'>
            <form action=''>
                <label htmlFor='name'>작성자: </label>
                <input
                    type='text'
                    id='name'
                    placeholder='이름 입력'
                    value={nameInputVal}
                    onChange={(e) => {
                        setNameInputVal(e.target.value);
                    }}
					ref={nameRef}
                />

                <label htmlFor='title'>제목: </label>
                <input
                    type='text'
                    id='title'
                    placeholder='제목 입력'
                    value={titleInputVal}
                    onChange={(e) => {
                        setTitleInputVal(e.target.value);
                    }}
					ref={titleRef}
                />
                <button onClick={addList}>작성</button>
            </form>

            <form action=''>
                <select
                    name='search'
                    id=''
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                >
                    <option value='name'>작성자</option>
                    <option value='title'>제목</option>
                </select>
                <input
                    type='text'
                    placeholder='검색어'
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <button onClick={searchHandler}>검색</button>
				<button onClick={showAllResHandler}>전체</button>
            </form>

            <table border='1'>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {lists.map((list) => {
                        return (
                            <tr key={list.id} id={list.id}>
                                <td>{list.id}</td>
                                <td>{list.title}</td>
                                <td>{list.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {searchRes.length > 0 ? (
                <div>
                    <h2>결과값</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                            </tr>
                        </thead>

                        <tbody>
                            {searchRes.map((res, idx) => {
                                return (
                                    <tr key={res.id} id={res.id}>
                                        <td>{idx + 1}</td>
                                        <td>{res.title}</td>
                                        <td>{res.name}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h2>검색 결과 없어</h2>
            )}
        </div>
    );
};

export default HomeWork2;
