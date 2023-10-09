import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "../types/hooks";
import { ChangeEvent, useState } from "react";
import { handleInputChange } from "../features/userSlice";
import { Button, Checkbox, Divider } from "@mui/material";

import { updateUser } from "../service/user/updateUser";

export const UserAccount = () => {
	const { email, unique_name, nameid } = useAppSelector((state) => state.user);
	const [checked, setChecked] = useState(false);

	const dispatch = useAppDispatch();

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		dispatch(handleInputChange({ name, value }));
	};

	const handleSubmitForm = async () => {
		const req = updateUser({ userName: unique_name, id: nameid });
	};

	[
		// checked
		{ type: "TextField", key: 1, props: { label: "first input" } }, // 1 visible
		{ type: "TextField", key: 2, props: { label: "second input" } }, // 2 null
	];

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
			<Divider />
			<Box>
				<Box>
					<Checkbox
						checked={checked}
						onChange={() => setChecked((pre) => !pre)}
					/>
					{checked ? (
						<TextField label="first input" key={1} />
					) : (
						<TextField label="second input" key={2} />
					)}

					{/* {checked && <TextField label="first input" />}

					{!checked && <TextField label="second input" />} */}
				</Box>
			</Box>
		</Box>
	);
};
