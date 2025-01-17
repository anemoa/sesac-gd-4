import React from 'react';
import { Link } from 'react-router-dom';
// 와일드카드 라우트
// 404 페이지 설정
// - 사용자가 정의하지 않은 경로로 접근했을 때, Not Found 페이지 보여주기.
export default function NotFound() {
    return (
        <div>
            <h1>NotFound</h1>
            <Link to={'/'}>홈으로 이동하기</Link>
            <br />
            <a href="http://localhost:3000">a 태그로 홈 이동</a>
        </div>
    );
}