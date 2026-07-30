import ProductPageTemplate, {
  productMetadata,
} from "@/components/product/ProductPageTemplate";

export const metadata = productMetadata("mail");

export default function Page() {
  return <ProductPageTemplate id="mail" />;
}
