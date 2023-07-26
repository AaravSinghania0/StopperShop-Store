import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import ProductList from "@/components/product-list";
import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const Home = async () => {
	const billboards = await getBillboards();
	const products = await getProducts({ isFeatured: true });

	return (
		<Container>
			<div className="space-y-10 pb-10">
				<Billboard data={billboards} />
				<div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
					<ProductList title="Featured Products" items={products} />
				</div>
			</div>
		</Container>
	);
};

export default Home;
