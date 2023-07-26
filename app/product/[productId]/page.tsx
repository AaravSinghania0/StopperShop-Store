import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

interface ProductPageProps {
	params: {
		productId: string;
	};
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
	const product = await getProduct(params.productId);
	const suggestedProducts = await getProducts({
		categoryId: product?.category?.id,
	}).then((products) =>
		products.filter((product) => product.id !== params.productId)
	);

	if (!product) {
		return null;
	}

	return (
		<Container>
			<div className="px-4 py-10 sm:px-6 lg:px-8 bg-slate-50">
				<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
					<Gallery images={product.images} />
					<div className="mt-8 px-4 sm:px-0 lg:mt-0 text-slate-900">
						<Info data={product} />
					</div>
				</div>
				<hr className="my-8 border" />
				<ProductList title="Related Items" items={suggestedProducts} />
			</div>
		</Container>
	);
};

export default ProductPage;
