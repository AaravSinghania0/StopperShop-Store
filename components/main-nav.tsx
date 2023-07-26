"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/lib/types";
import MobileNav from "./mobile-nav";

interface MainNavProps {
	data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
	const pathname = usePathname();

	const routes = data.map((route) => ({
		href: `/category/${route.id}`,
		label: route.name,
		active: pathname === `/category/${route.id}`,
	}));

	return (
		<nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
			<MobileNav routes={routes} />
			{routes.map((route) => (
				<Link
					key={route.href}
					href={route.href}
					className={cn(
						"hidden md:flex text-base font-medium transition-colors hover:text-slate-900 shrink",
						route.active ? "text-slate-900" : "text-slate-500"
					)}
				>
					{route.label}
				</Link>
			))}
		</nav>
	);
};

export default MainNav;
