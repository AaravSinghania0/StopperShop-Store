"use client";

import { ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/lib/types";
import useCart from "@/hooks/use-cart";

interface InfoProps {
	data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
	const cart = useCart();

	const onAddToCart = () => {
		cart.addItem(data);
	};

	return (
		<>
			<h1 className="text-2xl md:text-3xl font-bold">{data.name}</h1>
			<div className="text-xl md:text-2xl mt-3 flex items-end justify-between">
				<Currency value={data?.price} />
			</div>
			<hr className="my-4" />
			<div className="flex flex-col gap-y-5">
				<div className="flex items-center gap-x-4">
					<h3 className="font-semibold">Size:</h3>
					<div>
						{data?.size?.name} ({data?.size?.value})
					</div>
				</div>
				<div className="flex items-center gap-x-4">
					<h3 className="font-semibold">Color:</h3>
					<div>{data?.color?.name}</div>
					<div
						className="h-6 w-6 rounded-full border border-slate-600"
						style={{ backgroundColor: data?.color?.value }}
					/>
				</div>
			</div>
			<div className="mt-10 flex items-center gap-x-3">
				<Button
					onClick={onAddToCart}
					className="flex items-center justify-center gap-x-2 w-full"
				>
					Add To Cart
					<ShoppingCart size={20} />
				</Button>
			</div>
		</>
	);
};

export default Info;
