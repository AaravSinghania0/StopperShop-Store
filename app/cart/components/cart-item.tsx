"use client";

import Image from "next/image";
import { X } from "lucide-react";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/lib/types";

interface CartItemProps {
	data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
	const cart = useCart();

	const onRemove = () => {
		cart.removeItem(data.id);
	};

	return (
		<li className="flex py-6 border-y">
			<div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48 bg-white border shadow">
				<Image
					fill
					src={data.images[0].url}
					alt=""
					className="object-contain object-center"
				/>
			</div>
			<div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
				<div className="absolute z-10 right-0 top-0">
					<IconButton onClick={onRemove} icon={<X size={15} />} />
				</div>
				<div className="relative pr-9">
					<p className="flex justify-between text-lg font-semibold text-slate-900">
						{data.name}
					</p>

					<div className="my-1 flex text-sm">
						<p className="text-slate-600">{data.color.name}</p>
						<p className="ml-4 border-l border-slate-200 pl-4 text-slate-600">
							{data.size.name}
						</p>
					</div>
					<Currency value={data.price} />
				</div>
			</div>
		</li>
	);
};

export default CartItem;
