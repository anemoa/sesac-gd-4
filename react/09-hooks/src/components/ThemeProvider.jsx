import React, { useState } from 'react';
import ThemeMiddle from './ThemeMiddle';
import ThemeContext from '../context/ThemeContext';
// ## 조상 컴포넌트
// # 2. Provider 컴포넌트 정의
// ThemeProvider는 자식 컴포넌트 에게 ThemeContext의 값을 전달하는 역할을 한다.


const ThemeProvider = ({children}) => {
	// theme 상태 관리
	const [theme, setTheme] = useState('light');

	// 테마를 토글 하는 함수 정의
	const toggleTheme = () => {
		setTheme((current) => {
			return current === 'light' ? 'dark' : 'light';
		})
	}
  return (
	<div style={{padding: "10px", border: "1px solid blue"}}>
		{/* 
			# 3. .Context 객체.Provider로 감싸서 하위 컴포넌트에 값 전달
			value로 전달하는 객체에는 theme 상태 값과 토글 함수가 포함
		*/}
		<h1>조상 컴포넌트</h1>
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	</div>
  )
}

export default ThemeProvider