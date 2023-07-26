"use client";

import { FC, useEffect, useState } from "react";
import { formatterIndian } from "@/lib/utils";

interface CurrencyProps {
	value?: string | number;
}

const Currency: FC<CurrencyProps> = ({ value = 0 }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<div className="font-semibold">
			{formatterIndian.format(Number(value))}
		</div>
	);
};

export default Currency;
