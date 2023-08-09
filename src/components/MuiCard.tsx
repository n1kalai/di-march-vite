import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Cocktail } from "../types/cocktail";
import { useNavigate } from "react-router-dom";

export default function MediaCard({ cocktail }: { cocktail: Cocktail }) {
	const navigate = useNavigate();
	return (
		<Card sx={{ maxWidth: 345, pb: 2 }}>
			<CardMedia
				sx={{ height: 190 }}
				image={cocktail.strDrinkThumb}
				title="green iguana"
			/>
			<CardContent sx={{ position: "relative" }}>
				<Typography gutterBottom variant="h5" component="h2">
					{cocktail.strDrink}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					className="line-clamp-1 hover:line-clamp-3"
				>
					{cocktail.strInstructions}
				</Typography>
			</CardContent>
			<CardActions>
				<Button variant="contained" size="small">
					Share
				</Button>
				<Button
					onClick={() => {
						navigate(`/cocktails/${cocktail.idDrink}`);
					}}
					variant="contained"
					size="small"
				>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}
