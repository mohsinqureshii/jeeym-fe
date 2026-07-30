import ProductPageTemplate, {
  productMetadata,
} from "@/components/product/ProductPageTemplate";

export const metadata = productMetadata("notes");

export default function Page() {
  return <ProductPageTemplate id="notes" />;
}
