import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { addToCart } from "../service/addToCart";

import {
	handleAddProduct,
	handleRemoveOptimisticProduct,
	removeCartItem,
} from "../features/userSlice";
import { useAppDispatch, useAppSelector } from "../types/hooks";

import { Box } from "@mui/material";
import { Price } from "./Card/Price";

export default function ProductCard({ products }: { products: Product }) {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const prod = useAppSelector(
		(state) => state.user.cartItems.data[products.id]
	);

	const handleAddToCart = async () => {
		try {
			dispatch(handleAddProduct(products)); // redux
			await addToCart(products); // promise
		} catch (error: any) {
			dispatch(handleRemoveOptimisticProduct(products.id));
			if (error.response.status === 401) {
				// unauthorized
				// remove from redux
			}
			console.log(error);
		}
	};

	const handleReemoveFromCart = () => {
		dispatch(removeCartItem(products.id));
	};

	return (
		<Card sx={{ pb: 2 }}>
			<CardMedia
				sx={{ height: 250 }}
				image={products.image || products.images?.[0]}
				title="green iguana"
			/>
			<CardContent sx={{ position: "relative" }}>
				<Typography
					gutterBottom
					variant="h5"
					component="h2"
					className="line-clamp-2"
				>
					{products.name}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					className="line-clamp-5"
					sx={{ py: 3 }}
				>
					{products.description}
				</Typography>
			</CardContent>
			<CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
				<Box sx={{ display: "flex", gap: 2 }}>
					<Button
						onClick={prod ? handleReemoveFromCart : handleAddToCart}
						startIcon={<AddShoppingCartIcon />}
						variant="contained"
						size="small"
					>
						{prod ? "remove" : "add"}
					</Button>
					<Button
						onClick={() => {
							navigate(`/products/${products.id}`);
						}}
						variant="contained"
						size="small"
					>
						View
					</Button>
				</Box>
				<Price
					price={products.price}
					oldPrice={products.oldPrice}
					newPrice={products.newPrice}
				/>
			</CardActions>
		</Card>
	);
}
