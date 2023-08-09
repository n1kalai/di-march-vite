import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { ChangeEvent, MouseEvent, useState } from "react";
import { baseAPI } from "../../service/baseAPI";

export const Registration = () => {
	const [userRegistrationInput, setUserRegistrationInput] = useState({
		userName: "",
		password: "",
		email: "",
	});

	const [showSuccessMessage, setSuccessMessage] = useState(false);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setUserRegistrationInput((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleRegister = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		try {
			await baseAPI.post("api/user/registerUser", userRegistrationInput);
			setSuccessMessage(true);
		} catch (e) {
			// ....
		}
	};

	return (
		<Box
			component="form"
			sx={{ display: "flex", flexDirection: "column", gap: 2 }}
		>
			<Divider
				sx={{
					backgroundColor: (theme) => theme.palette.background.default,
					my: 2,
				}}
			/>
			<Typography component="p">Registration</Typography>
			<TextField
				onChange={handleInputChange}
				name="userName"
				label="Name"
				variant="outlined"
			/>
			<TextField
				onChange={handleInputChange}
				name="password"
				label="Password"
				variant="outlined"
				type="password"
			/>
			<TextField
				onChange={handleInputChange}
				name="email"
				label="E-mail"
				variant="outlined"
				type="email"
			/>
			<Button type="submit" onClick={handleRegister}>
				Register
			</Button>
			<Divider
				sx={{
					backgroundColor: (theme) => theme.palette.background.default,
					my: 2,
				}}
			/>

			{showSuccessMessage && (
				<Typography color="success" component="p">
					Succesfully registered
				</Typography>
			)}
		</Box>
	);
};
