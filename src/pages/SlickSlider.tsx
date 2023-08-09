import {
	Component,
	MutableRefObject,
	useEffect,
	useRef,
	useState,
} from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CocktailsCard } from "../components/cocktails/Card";

const StyledSlickWrapper = styled.div`
	margin-top: 50px;
	.our_cs {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.slick-list {
		height: 665px !important;
	}

	.slick-next {
		right: 25px;
	}
	.slick-prev {
		left: 5px;
		z-index: 10;
	}

	.slick-prev::before {
		content: url("https://cdn-icons-png.flaticon.com/24/271/271220.png");
		width: 20px;
		height: 20px;
	}

	.slick-next::before {
		content: url("https://cdn-icons-png.flaticon.com/24/271/271228.png");
		width: 20px;
		height: 20px;
	}
`;

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	// rows: 1,
	autoplay: true,
	autoplaySpeed: 1500,
	vertical: true,
	// centerMode: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			},
		},
	],
};

const fetchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const SimpleSlider = () => {
	const sliderRef: MutableRefObject<any> = useRef();

	const [drinks, setDrinks] = useState([]);

	useEffect(() => {
		fetch(fetchURL)
			.then((res) => res.json())
			.then((data) => setDrinks(data.drinks));
	}, []);

	if (!drinks.length) {
		return <div>loading ...</div>;
	}

	return (
		<StyledSlickWrapper>
			<Slider {...settings} ref={sliderRef}>
				{drinks.map((drink) => (
					<div className="gela">
						<div className=" flex justify-center">
							<CocktailsCard cocktail={drink} isSmall />
						</div>
					</div>
				))}
			</Slider>

			{/* <div className="h-screen" /> */}
		</StyledSlickWrapper>
	);
};

export default SimpleSlider;
