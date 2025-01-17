// ! 액션 타입 가져오기
import { CHANGE } from "../actions/isVisibleAction";

// #1. state 초기값 정의
const initialState = true;

// #2. 리듀서 작성
const isiVisibleReducer = (state = initialState, action) => {
	if(action.type === CHANGE){
		return !state;
	}
	return state;
}

export default isiVisibleReducer;