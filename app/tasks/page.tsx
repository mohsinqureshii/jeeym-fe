import ProductPageTemplate, {
  productMetadata,
} from "@/components/product/ProductPageTemplate";

export const metadata = productMetadata("tasks");

export default function Page() {
  return <ProductPageTemplate id="tasks" />;
}
