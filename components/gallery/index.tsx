"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";
import { Image as ImageType } from "@/lib/types";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
	images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
	return (
		<Tab.Group as="div" className="flex flex-col">
			<Tab.Panels className="aspect-square w-full">
				{images.map((image) => (
					<Tab.Panel key={image.id}>
						<div className="aspect-square relative h-full w-full rounded-lg overflow-hidden bg-white border shadow">
							<Image
								fill
								src={image.url}
								alt="Image"
								className="object-contain object-center"
							/>
						</div>
					</Tab.Panel>
				))}
			</Tab.Panels>
			{images.length > 1 && (
				<div className="mt-6 w-full max-w-2xl sm:block lg:max-w-none">
					<Tab.List className="grid grid-cols-4 gap-6">
						{images.map((image) => (
							<GalleryTab key={image.id} image={image} />
						))}
					</Tab.List>
				</div>
			)}
		</Tab.Group>
	);
};

export default Gallery;
