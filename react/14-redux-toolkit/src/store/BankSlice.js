import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
	name: 'bank',
	initialState: {money: 0},
	reducers: {
		plus: (state, action) => {
			state.money += action.payload;
		},
		minus: (state, action) => {
			state.money -= action.payload;
		}
	}
})

export const {plus, minus} = bankSlice.actions;
export default bankSlice.reducer;