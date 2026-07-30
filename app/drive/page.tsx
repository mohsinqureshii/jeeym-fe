import ProductPageTemplate, {
  productMetadata,
} from "@/components/product/ProductPageTemplate";

export const metadata = productMetadata("drive");

export default function Page() {
  return <ProductPageTemplate id="drive" />;
}
