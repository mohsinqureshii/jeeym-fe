import ProductPageTemplate, {
  productMetadata,
} from "@/components/product/ProductPageTemplate";

export const metadata = productMetadata("presentations");

export default function Page() {
  return <ProductPageTemplate id="presentations" />;
}
