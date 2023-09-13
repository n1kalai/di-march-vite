import { useQuery } from "@tanstack/react-query";
import { ProductsContainer } from "../components/products/ProductsContainer";
import { getMostDemands } from "../service/products/mostDemandProducts";
import { getOffers } from "../service/products/getOffers";

const MostDemandAndOffers = () => {
	const { data: mostDemandsData, isLoading: mostDemandsDataIsLoading } =
		useQuery(["most-demands"], getMostDemands);
	const { data: offersData, isLoading: offersAreLoading } = useQuery(
		["offer"],
		getOffers
	);

	return (
		<div>
			{mostDemandsData && (
				<ProductsContainer
					isLoading={mostDemandsDataIsLoading}
					data={mostDemandsData}
				/>
			)}
			{offersData && (
				<ProductsContainer data={offersData} isLoading={offersAreLoading} />
			)}
		</div>
	);
};

export default MostDemandAndOffers;
