import {
	Avatar,
	Box,
	Stack,
	Typography,
	Popover,
	List,
	ListItemButton,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../types/hooks";
import { useState } from "react";
import { handleLogout } from "../../features/userSlice";

const TheProfile = () => {
	const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

	const dispatch = useAppDispatch();

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	const { email, unique_name } = useAppSelector((state) => state.user);
	return (
		<>
			<Box
				component="div"
				aria-describedby={id}
				onClick={handleClick}
				display="flex"
				alignItems="center"
			>
				<Avatar alt={unique_name} />
				<Stack flexDirection="column">
					<Typography>{unique_name}</Typography>
					<Typography>{email}</Typography>
				</Stack>
			</Box>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				<List sx={{ minWidth: "200px" }}>
					<ListItemButton onClick={() => dispatch(handleLogout())}>
						Log out
					</ListItemButton>
				</List>
			</Popover>
		</>
	);
};

export { TheProfile };
