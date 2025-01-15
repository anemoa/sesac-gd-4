import React from 'react';
import styled, { keyframes } from 'styled-components';
// styled 라는 객체 안에  **HTML 태그에 대응하는 메소드 (div, button 등등)** 를 제공하는 방식으로 동작

// # 4. styled-component 사용
/**
 * - CSS in JS 방식의 라이브러리 (= 패키지 설치)
 *   ㄴ js 안에 css를 작성함
 * - 컴포넌트 단위로 스타일 관리 가능
 * - 자동으로 고유한 클래스명이 생성 (스타일 충돌 방지)
 * - props 기반으로 동적인 스타일 변경 가능
 */


/**
 * [장점]
 * - JS 파일 안에서 CSS를 정의해서 스타일과 컴포넌트를 하나의 단위로 관리 가능
 * 
 * [단점]
 * - 런타임 성능 이슈
 *   ㄴ 스타일이 런타임에 적용됨! 큰 프로젝트 에서는 문제가 발생할 수 있음
 */

console.log(styled);

// 1) 스타일 정의 (HTML 태그 + 백틱(``) 형식 )
const StyledContainer = styled.div`
    display: flex;
`;

const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.bgColor || 'lime'};
    &:hover {
        transform: translateY(20px);
    }
`;

const Button = styled.button`
    background-color: ${(props) => (props.primary ? 'green' : 'gray')};
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            props.primary ? 'darkgreen' : 'darkgray'};
    }
`;

// # 1. 애니메이션 정의
const divMove = keyframes`
	from{
		opacity: 0;
	}to{
		opacity: 1;
	}
`;

// # 2. 애니메이션 적용한 컴포넌트 정의
const AniDiv = styled.div`
	width: 100px;
	height: 100px;
	background-color: pink;
	animation: ${divMove} 2000ms ease-in;
`

const StyledComponent = () => {
    return (
        <>
            <StyledContainer>
                <StyledBox bgColor='red'>2232</StyledBox>
                <StyledBox bgColor='green'>2232</StyledBox>
                <StyledBox bgColor='purple'>2232</StyledBox>
                <StyledBox>없어</StyledBox>
            </StyledContainer>
            <Button primary> 하하핫 클릿이라</Button>
            <Button> 하하핫 클릿이라</Button>
			<AniDiv>dddfs</AniDiv>
        </>
    );
};

export default StyledComponent;

/**
 * - StyledBox는 styled.div로 생성된 React 컴포넌트
 * - 일반 React 컴포넌트 처럼 props를 받을 수 있다
 * - props가 styled-components 내부로 전달되면 스타일 블록 내에서 사용할 수 있도록 처리함
 * - ${} 문자열 보간 방법
 */
