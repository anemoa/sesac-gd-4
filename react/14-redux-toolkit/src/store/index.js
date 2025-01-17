// #2. 스토어 생성 및 리듀서 연결!

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import isVisibleReducer from "./isVisibleSlice";

// # configureStore
// - store 생성
// - 여러 리듀서 결합 (reducer 옵션으로 전달)
//   ㄴ 객체 형태로 전달, 키는 상태 이름이 된다.

const store = configureStore({
	reducer: {
		counter: counterReducer, // "counter" 라는 counterReducer로 관리. // 변수명 마음대로 이건 원래 counterSlice.reducer임
		isVisible: isVisibleReducer,
	}
});

export default store;