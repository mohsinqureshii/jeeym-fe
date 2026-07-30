import ProductPageTemplate, {
  productMetadata,
} from "@/components/product/ProductPageTemplate";

export const metadata = productMetadata("search");

export default function Page() {
  return <ProductPageTemplate id="search" />;
}
