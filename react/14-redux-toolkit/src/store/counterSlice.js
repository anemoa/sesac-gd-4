import {createSlice} from '@reduxjs/toolkit';
// # 1. Slice 객체 정의
// * createSlice 함수 사용
// - 리듀서와 액션 생성자를 한 번에 정의할 수 있게 됨 (리듀서 + 액션)

/**
 * - name: 슬라이스의 이름 정의 / 액션 타입의 네임스페이스로 사용
 * - initialState: 상태 초기값 정의
 * - reducers: 상태를 업데이트 하는 리듀서 함수 정의
 */

const counterSlice = createSlice({
	name: 'counter',
	initialState: {count: 100},
	reducers: {
		// 'counter/plus'
		plus: (state) => {
			state.count += 1; // 직접 상태값 변경(redux toolkit immer 라이브러리가 내부적으로 생성하는데 immer가 원본 데이터는 안 건드리고 원본 불변성 지켜짐)
		},
		minus: (state) => {
			state.count -= 1;
		},
		amount: (state, action) => {
			state.count += action.payload; // action의 payload 사용
		},
	},
});

console.log(counterSlice);


export const {plus, minus, amount} = counterSlice.actions; // 액션 값 내보내기
export default counterSlice.reducer; // 리듀서 내보내기