import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showModal: false,
};

const othersSlice = createSlice({
	name: "others",
	initialState,
	reducers: {
		handleShowModal: (state) => {
			state.showModal = !state.showModal;
		},
	},
});

export const { handleShowModal } = othersSlice.actions;
export default othersSlice.reducer;
