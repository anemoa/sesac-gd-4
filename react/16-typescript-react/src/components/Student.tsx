import React from 'react'

// # 1. interface 사용을 위한 props 타입 정의
// 학생 데이터를 위한 인터페이스

interface StudentData {
	name: string;
	age: number;
	major: string;
}

// 부모로부터 받을 props 타입 정의
interface StudentProps {
	data: StudentData; // 객체 형태로 전달된 data prop
	children?: React.ReactNode;
	handleClick: (name: string, major: string) => void;
}

const Student = ({data, children, handleClick}: StudentProps) => {
	const {name, age, major} = data;
  return (
	<div>
		<h1>자식 컴포넌트</h1>
		<ul onClick={() => handleClick(name, major)}>
			<li>이름: {name}</li>
			<li>나이: {age}</li>
			<li>전공: {major}</li>
		</ul>
		{children}
	</div>
  )
}

export default Student