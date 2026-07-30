import ProductPageTemplate, {
  productMetadata,
} from "@/components/product/ProductPageTemplate";

export const metadata = productMetadata("chat");

export default function Page() {
  return <ProductPageTemplate id="chat" />;
}
