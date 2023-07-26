"use client";

import { FC, useState } from "react";
import { ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
	routes: {
		href: string;
		label: string;
		active: boolean;
	}[];
}

const MobileNav: FC<MobileNavProps> = ({ routes }) => {
	const [open, setOpen] = useState(false);

	const onOpen = () => setOpen(true);
	const onClose = () => setOpen(false);

	return (
		<>
			<Button
				onClick={onOpen}
				className="flex items-center gap-x-2 md:hidden rounded-xl border bg-slate-100 text-slate-900 py-1 px-2"
			>
				Categories
				<ChevronRight size={20} />
			</Button>

			<Dialog
				open={open}
				as="div"
				className="relative z-40 lg:hidden"
				onClose={onClose}
			>
				{/* Background color and opacity */}
				<div className="fixed inset-0 bg-slate-900 bg-opacity-25 backdrop-blur-[2px]" />

				{/* Dialog position */}
				<div className="fixed inset-0 z-40 flex">
					<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-slate-50 py-4 pb-6 shadow-xl border-l">
						{/* Close button */}
						<div className="flex items-center justify-between px-4">
							<span className="font-medium text-lg">
								Choose Category
							</span>
							<IconButton
								icon={<X size={15} />}
								onClick={onClose}
							/>
						</div>

						<div className="p-4 flex flex-col space-y-3">
							{routes.map((route) => (
								<Link
									key={route.href}
									href={route.href}
									onClick={onClose}
									className={cn(
										"border rounded-md bg-slate-100 text-center text-2xl font-medium transition-colors hover:text-slate-900",
										route.active
											? "text-slate-900"
											: "text-slate-500"
									)}
								>
									{route.label}
								</Link>
							))}
						</div>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
};

export default MobileNav;
