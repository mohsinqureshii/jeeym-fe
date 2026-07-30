import ProductPageTemplate, {
  productMetadata,
} from "@/components/product/ProductPageTemplate";

export const metadata = productMetadata("calendar");

export default function Page() {
  return <ProductPageTemplate id="calendar" />;
}
