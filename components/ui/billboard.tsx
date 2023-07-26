"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Billboard } from "@/lib/types";

interface BillboardProps {
	data: Billboard[];
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
	return (
		<div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
			<Swiper
				centeredSlides={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
			>
				{data.map((billboard) => (
					<SwiperSlide
						key={billboard?.id}
						style={{
							backgroundImage: `url(${billboard?.imageUrl})`,
						}}
						className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-no-repeat shadow-lg group"
					>
						<div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 group-hover:backdrop-blur-[2px] transition">
							<h3 className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-slate-900 px-2 shadow-lg bg-white/40 border backdrop-blur-sm rounded-md">
								{billboard?.label}
							</h3>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Billboard;
