import { createSlice } from "@reduxjs/toolkit";

const isVisibleSlice = createSlice({
	name: 'isVisible',
	initialState: true,
	reducers: {
		change2: (state) => {
			return !state;
		}
	}
})

export const {change2} = isVisibleSlice.actions;
export default isVisibleSlice.reducer;