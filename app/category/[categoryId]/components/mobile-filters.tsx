"use client";

import { FC, useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import { Color, Size } from "@/lib/types";
import Filter from "./filter";

interface MobileFiltersProps {
	sizes: Size[];
	colors: Color[];
}

const MobileFilters: FC<MobileFiltersProps> = ({ sizes, colors }) => {
	const [open, setOpen] = useState(false);

	const onOpen = () => setOpen(true);
	const onClose = () => setOpen(false);

	return (
		<>
			<Button
				onClick={onOpen}
				className="flex items-center gap-x-2 lg:hidden"
			>
				Filters
				<Plus size={20} />
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
							<span className="font-medium">Filters</span>
							<IconButton
								icon={<X size={15} />}
								onClick={onClose}
							/>
						</div>

						<div className="p-4">
							<Filter
								valueKey="sizeId"
								name="Sizes"
								data={sizes}
							/>
							<Filter
								valueKey="colorId"
								name="Colors"
								data={colors}
							/>
						</div>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
};

export default MobileFilters;
