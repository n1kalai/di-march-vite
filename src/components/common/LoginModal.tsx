import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { handleShowModal } from "../../features/otherSlice";
import { RootState } from "../../store/store";
import { handleLogin } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

const StyledModal = styled.div`
	width: 400px;
	height: 400px;
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

	const [logIn, setLogIn] = useState({
		name: "",
		password: "",
	});

	const onLogin = () => {
		dispatch(handleLogin(logIn));
		dispatch(handleShowModal());
		navigate("/account");
	};

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLogIn((prev) => ({ ...prev, [name]: value }));
	};

	return showModal ? (
		<StyledModal>
			<input name="name" placeholder="nickname" onChange={handleChangeInput} />
			{/* <input name="password" type="password" onChange={handleChangeInput} /> */}
			<button onClick={onLogin}>Log in </button>
			<button onClick={() => dispatch(handleShowModal())}>close modal</button>
		</StyledModal>
	) : null;
};
