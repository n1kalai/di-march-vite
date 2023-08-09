import { Grid, LinearProgress } from "@mui/material";
import ProductCard from "../ProductCard";

type Props = {
	isLoading: boolean;
	data: Product[];
};

export const ProductsContainer = ({ isLoading, data }: Props) => {
	if (isLoading) return <LinearProgress />;
	return (
		<Grid // 12
			component="section"
			container
			p={5}
			rowSpacing={{ xl: 3, md: 4, lg: 4, sm: 2, xs: 1 }}
			// columnSpacing={{ xl: 4, md: 4, sm: 2, xs: 1 }}
			spacing={4}
		>
			{data.map((product) => (
				<Grid
					component="article"
					xl={3}
					lg={3}
					md={4}
					sm={6}
					xs={12}
					item
					key={product.id}
				>
					<ProductCard products={product} />
				</Grid>
			))}
		</Grid>
	);
};
