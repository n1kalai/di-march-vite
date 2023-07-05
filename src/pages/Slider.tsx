import React, { useRef, useState } from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
// @ts-ignore
import { Pagination, Navigation } from "swiper";

export const SliderPage = () => {
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};

	return (
		<>
			<Swiper
				// slidesPerView={5}
				pagination={pagination}
				modules={[Pagination, Navigation]}
				className="mySwiper"
				loop
			>
				<SwiperSlide>
					<div style={{ height: 400, backgroundColor: "red" }}>Slide 1</div>
				</SwiperSlide>
				<SwiperSlide>
					<div style={{ height: 400, backgroundColor: "red" }}>Slide 2</div>
				</SwiperSlide>
				<SwiperSlide>
					<div style={{ height: 400, backgroundColor: "red" }}>Slide 3</div>
				</SwiperSlide>
				<SwiperSlide>
					<div style={{ height: 400, backgroundColor: "red" }}>Slide 4</div>
				</SwiperSlide>
				<SwiperSlide>
					<div style={{ height: 400, backgroundColor: "red" }}>Slide 5</div>
				</SwiperSlide>
				<SwiperSlide>
					<div style={{ height: 400, backgroundColor: "red" }}>Slide 6</div>
				</SwiperSlide>
				<SwiperSlide>
					<div style={{ height: 400, backgroundColor: "red" }}>Slide 7</div>
				</SwiperSlide>
				<SwiperSlide>
					<div style={{ height: 400, backgroundColor: "red" }}>Slide 8</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};
