import ProductPageTemplate, {
  productMetadata,
} from "@/components/product/ProductPageTemplate";

export const metadata = productMetadata("documents");

export default function Page() {
  return <ProductPageTemplate id="documents" />;
}
