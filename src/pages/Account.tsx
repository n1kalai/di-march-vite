import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "../types/hooks";
import { ChangeEvent } from "react";
import { handleInputChange } from "../features/userSlice";
import { Button } from "@mui/material";

import { updateUser } from "../service/user/updateUser";

export const UserAccount = () => {
	const { email, unique_name, nameid } = useAppSelector((state) => state.user);

	const dispatch = useAppDispatch();

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		dispatch(handleInputChange({ name, value }));
	};

	const handleSubmitForm = async () => {
		const req = updateUser({ userName: unique_name, id: nameid });
		console.log(req);
	};

	return (
		<Box
			sx={{
				display: "flex",

				gap: 3,
				p: 5,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				component={"form"}
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 3,
					p: 5,
					justifyContent: "center",
					alignItems: "center",

					width: "min(500px,100%)",
				}}
			>
				<TextField
					name="unique_name"
					label="Name"
					value={unique_name}
					onChange={handleChangeInput}
					fullWidth
				/>
				<TextField
					label="E-Mail"
					name="email"
					value={email}
					onChange={handleChangeInput}
					fullWidth
				/>
				<Button onClick={handleSubmitForm} sx={{ alignSelf: "flex-end" }}>
					Submit
				</Button>
			</Box>
		</Box>
	);
};
