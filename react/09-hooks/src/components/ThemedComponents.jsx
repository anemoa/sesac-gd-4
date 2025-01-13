import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
// ## 자식 컴포넌트 (소비)

const ThemedComponents = () => {
	// # 4. useContext 훅을 사용해서 ThemeContext 값 직접 가져와서 사용

	const {theme, toggleTheme} = useContext(ThemeContext);

  return (
	<div style={{backgroundColor: theme === 'light' ? '#fff' : "#000", color: theme === 'light' ? '#000' : "#fff" ,padding: "20px", textAlign: "center", border: "1px solid green"}}>
		<h3>자식 컴포넌트</h3>
		<p>현재 테마: {theme}</p>
		<button onClick={toggleTheme}>테마 변경</button>

	</div>
  )
}

export default ThemedComponents