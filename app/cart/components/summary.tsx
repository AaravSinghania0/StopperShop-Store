"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { RefreshCw } from "lucide-react";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

const Summary = () => {
	const searchParams = useSearchParams();
	const items = useCart((state) => state.items);
	const removeAll = useCart((state) => state.removeAll);

	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (searchParams.get("success")) {
			toast.success("Payment successful.");
			removeAll();
		}

		if (searchParams.get("canceled")) {
			toast.error("Payment failed.");
		}
	}, [searchParams, removeAll]);

	const totalPrice = items.reduce((total, item) => {
		return total + Number(item.price);
	}, 0);

	const onCheckout = async () => {
		setLoading(true);
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}/checkout`,
			{
				productIds: items.map((item) => item.id),
			}
		);

		window.location = response.data.url;
	};

	return (
		<div className="sticky top-32 mt-16 rounded-lg bg-slate-200 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 border border-slate-400 shadow-sm">
			<h2 className="text-lg font-medium text-slate-900 flex items-center justify-between">
				Order summary
				<span className="text-slate-600">{items.length} items</span>
			</h2>
			<div className="mt-6 space-y-4 flex items-center justify-between border-t border-slate-400 pt-4">
				<div className="text-base font-medium text-slate-900">
					Order total
				</div>
				<Currency value={totalPrice} />
			</div>
			<Button
				onClick={onCheckout}
				disabled={items.length === 0 || loading}
				className="w-full mt-6"
			>
				{loading ? (
					<div className="flex justify-center cursor-wait space-x-2">
						<RefreshCw className="w-6 h-6 animate-spin" />
						<p>Redirecting....</p>
					</div>
				) : (
					"Checkout"
				)}
			</Button>
			<p className="text-sm text-slate-600 mt-6 flex flex-col gap-y-2">
				<span>
					Try the following Test Cards on the Payment Gateway, with
					any valid date and CVC:
				</span>
				<code>Click to copy</code>
				<code
					className="bg-slate-300 rounded-md text-center hover:cursor-pointer"
					onClick={() =>
						navigator.clipboard.writeText("4000 0035 6000 0008")
					}
				>
					4000 0035 6000 0008 (IN)
				</code>
				<code
					className="bg-slate-300 rounded-md text-center hover:cursor-pointer"
					onClick={() =>
						navigator.clipboard.writeText("4242 4242 4242 4242")
					}
				>
					4242 4242 4242 4242 (US)
				</code>
			</p>
		</div>
	);
};

export default Summary;
