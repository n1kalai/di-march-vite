import { Grid, Skeleton } from "@mui/material";
import { StyledCard } from "./Card";

const GridSkeleton = Array.from(new Array(19)).map((_, i) => (
	<StyledCard isSmall={true}>
		<Skeleton className="img ml-4" variant="text" animation="wave" />
		<div>
			<Skeleton
				variant="text"
				animation="wave"
				component="h2"
				className="w-[200px]"
			/>
			<Skeleton
				variant="text"
				animation="wave"
				className="description"
				component="p"
			/>
			<Skeleton variant="text" animation="wave" component="a" />
		</div>
	</StyledCard>
));

export const CocktailsSkeleton = () => (
	<Grid
		container
		spacing={5}
		py={5}
		style={{ margin: "0 auto", maxWidth: "100%" }}
	>
		{GridSkeleton}
	</Grid>
);
