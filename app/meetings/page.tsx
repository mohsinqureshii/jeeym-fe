import ProductPageTemplate, {
  productMetadata,
} from "@/components/product/ProductPageTemplate";

export const metadata = productMetadata("meetings");

export default function Page() {
  return <ProductPageTemplate id="meetings" />;
}
