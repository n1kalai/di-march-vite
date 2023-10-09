import { Button, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../types/hooks";
import { handleLogin } from "../../features/userSlice";
import { handleShowModal } from "../../features/otherSlice";
import { useNavigate } from "react-router-dom";
import { userSignIn } from "../../service/userSignIn";
import jwt_decode from "jwt-decode";
import { UserType } from "../../types/UserType";
import { useDispatch } from "react-redux";

const Login = () => {
	const [logIn, setLogIn] = useState({
		name: "", // email
		password: "",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLogIn((prev) => ({ ...prev, [name]: value }));
	};

	const onLogin = async () => {
		const { password } = logIn;
		const user = await userSignIn({ password, email: logIn.name });
		if (user.data.jwt) {
			localStorage.setItem("token", user.data.jwt);
			const decoded: UserType = jwt_decode(user.data.jwt);

			dispatch(handleLogin(decoded));
			dispatch(handleShowModal());
			window.location.href = "/account";
		}
	};

	return (
		<div className="flex flex-col gap-4">
			<TextField
				name="name"
				placeholder="nickname"
				onChange={handleChangeInput}
			/>
			<TextField name="password" type="password" onChange={handleChangeInput} />
			<Button onClick={onLogin}>Log in </Button>
		</div>
	);
};

export default Login;
