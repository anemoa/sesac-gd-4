import React from 'react';
import Student from './Student';

// 학생 데이터
const studentData = {
    name: 'yves',
    age: 30,
    major: 'design'
};

const handleClick = (name: string, major: string): void => {
	console.log(`내 이름은${name}이고 전공은 ${major}`);
	
}

const Parents = () => {
    return (
        <div>
            <h1>부모 컴포넌트</h1>
            <Student data={studentData} handleClick={handleClick}>
				<p>gkgkgk</p>
			</Student>
        </div>
    );
};

export default Parents;
