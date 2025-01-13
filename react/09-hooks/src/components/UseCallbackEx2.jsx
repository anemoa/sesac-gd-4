import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const UseCallbackEx2 = ({ postId }) => {
    const [post, setPost] = useState({});

    // [before]
    // const getPost = async () => {
    //     console.log('data fetching');
    //     // 데이터 요청
    //     try {
    //         const res = await axios.get(
    //             `https://jsonplaceholder.typicode.com/posts/${postId}`
    //         );
    //         setPost(res.data);
    //         console.log('res >>', res);
    //         console.log('res data >>', res.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    // console.log(post);

    /**
     * * axios
     * - Promise 기반, 외부 라이브러리 => 패키지 설치
     * - async / await 구문과 함께 사용 가능
     * - 자동으로 json 데이터를 파싱
     *   ㄴ 서버로부터 받은 응답을 자동으로 JSON으로 파싱해서 response.data에 저장함
     *   ㄴ fetch와 달리 res.json() 수동으로 호출할 필요가 없음
     */

	// [after]
	// useCallback 훅으로 메모이제이션 -> 의존성 배열에 있는 내용이 변경되지 않는 한 컴포넌트는 리렌더링 되지 않음.
	// 필요한 순간에만 api 요청을 날림!

	const getPost = useCallback(async () => {
        console.log('data fetching');
        // 데이터 요청
        try {
            const res = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${postId}`
            );
            setPost(res.data);
            console.log('res data >>', res.data);
        } catch (error) {
            console.error(error);
        }
    }, [postId]);

	// useEffect 의존성 배열에 "함수"
	// 컴포넌트가 리렌더링 -> 함수 재생성 (주소값 변경) -> getPost 함수를 무한 재호출
    useEffect(() => {
        getPost();
    }, [getPost]);

    return (
        <div>
            <h1>useCallback Ex2</h1>
            {post.id ? post.title : '로딩중'}
        </div>
    );
};

export default UseCallbackEx2;
