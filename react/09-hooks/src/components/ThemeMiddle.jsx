import React from 'react'
import ThemedComponents from './ThemedComponents'
// ## 부모 컴포넌트

// props drilling을 의도적으로 시뮬레이션 하기 위한 컴포넌트
const ThemeMiddle = () => {
  return (
	<div style={{padding: "10px", border: "1px solid red"}}>
		<h3> 부모 컴포넌트 (중간 다리) </h3>
		<ThemedComponents />
	</div>
  )
}

export default ThemeMiddle