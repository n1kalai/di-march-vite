import { Typography } from "@mui/material";

type PriceType = { price?: string } | { oldPrice?: string; newPrice?: string };

export const Price = ({ price, oldPrice, newPrice }: PriceType) => {
	// const { price, oldPrice, newPrice } = props; // Destructure p
	// const { price, oldPrice, newPrice } = props; // Destructure p

	return (
		<Typography component="span">
			{price ? (
				price
			) : (
				<div>
					<span className="line-through pr-2">{oldPrice}</span>
					{newPrice}
				</div>
			)}
			GEL
		</Typography>
	);
};
