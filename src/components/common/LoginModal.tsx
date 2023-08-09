import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { handleShowModal } from "../../features/otherSlice";
import { RootState } from "../../store/store";
import { handleLogin } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import { Registration } from "./Registration";
import { Button } from "@mui/material";
import BasicTabs from "./Tabs";

const StyledModal = styled.div`
	width: 400px;
	min-height: 400px;
	padding-bottom: 30px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	position: fixed;
	left: calc(50% - 200px);
	top: calc(50% - 200px);
	background-color: white;
	box-shadow: 0 0 10px lightgray;
	z-index: 1;
`;

export const LoginModal = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const showModal = useSelector((state: RootState) => state.others.showModal);

	return showModal ? (
		<StyledModal>
			<BasicTabs />
			<Button color="error" onClick={() => dispatch(handleShowModal())}>
				close modal
			</Button>
		</StyledModal>
	) : null;
};
