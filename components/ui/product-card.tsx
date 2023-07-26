"use client";

import Image from "next/image";
import { FC, MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/lib/types";

interface ProductCard {
	data: Product;
}

const ProductCard: FC<ProductCard> = ({ data }) => {
	const router = useRouter();
	const previewModal = usePreviewModal();
	const cart = useCart();

	const handleClick = () => {
		router.push(`/product/${data?.id}`);
	};

	const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();
		previewModal.onOpen(data);
	};

	const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();
		cart.addItem(data);
	};

	return (
		<div
			onClick={handleClick}
			className="bg-slate-100 hover:shadow-md group cursor-pointer rounded-xl border p-3 space-y-3 flex flex-col justify-between"
		>
			{/* Image & actions */}
			<div className="aspect-square rounded-xl bg-slate-100 relative">
				<Image
					src={data?.images?.[0]?.url}
					alt="Product Image"
					fill
					className="aspect-square object-cover rounded-md"
				/>
				<div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
					<div className="flex gap-x-6 justify-center">
						<IconButton
							onClick={onPreview}
							icon={
								<Expand size={20} className="text-slate-600" />
							}
						/>
						<IconButton
							onClick={onAddToCart}
							icon={
								<ShoppingCart
									size={20}
									className="text-slate-600"
								/>
							}
						/>
					</div>
				</div>
			</div>
			{/* Description & Price */}
			<p className="font-semibold text-lg">{data.name}</p>
			<div className="flex items-center justify-between">
				<p className="text-sm text-slate-600">{data.category?.name}</p>
				<Currency value={data?.price} />
			</div>
		</div>
	);
};

export default ProductCard;
