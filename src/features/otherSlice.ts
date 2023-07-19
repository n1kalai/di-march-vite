import { createSlice } from "@reduxjs/toolkit";

interface OtherState {
	showModal: boolean;
}

const initialState: OtherState = {
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
