import { styled } from "styled-components";
import { Cocktail } from "../../types/cocktail";
import { Link } from "react-router-dom";

const StyledCard = styled.article<{ isSmall?: boolean }>`
	display: flex;
	width: ${({ isSmall }) => (isSmall ? "700px" : "1400px")};
	/* margin-bottom: 20px; */
	border: solid 1px lightgray;
	border-radius: 24px;
	transition: box-shadow 0.4s;

	&:hover {
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
	}

	img {
		width: ${({ isSmall }) => (isSmall ? "220px" : "400px")};
		border-radius: 24px;
	}

	h2 {
		font-size: 32px;
		margin-bottom: 12px;
	}

	p {
		font-size: 14px;
		color: gray;
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 40px;

		a:hover {
			color: red;
		}
	}
`;

type Props = {
	cocktail: Cocktail;
	isSmall?: boolean;
};
export const CocktailsCard = ({ cocktail, isSmall = false }: Props) => {
	return (
		<StyledCard isSmall={isSmall}>
			<img src={cocktail.strDrinkThumb} loading="lazy" />
			<div>
				<h2>{cocktail.strDrink}</h2>
				<p className="description line-clamp-3">{cocktail.strInstructions}</p>
				<Link
					to={`/cocktails/${cocktail.idDrink}?showPic=${Boolean(
						Math.floor(Math.random() * (1 - 0 + 1) + 0)
					)}&showDescription=${Boolean(
						Math.floor(Math.random() * (1 - 0 + 1) + 0)
					)}`}
				>
					See more
				</Link>
			</div>
		</StyledCard>
	);
};
