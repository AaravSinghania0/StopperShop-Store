import Link from "next/link";
import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
	const categories = await getCategories();

	return (
		<div className="border-b fixed w-screen shadow-sm z-20 bg-white">
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
					<Link href="/" className="flex gap-x-2">
						<h1 className="font-bold text-xl">StopperShop</h1>
					</Link>
					<MainNav data={categories} />
					<NavbarActions />
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
