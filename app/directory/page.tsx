import ProductPageTemplate, {
  productMetadata,
} from "@/components/product/ProductPageTemplate";

export const metadata = productMetadata("directory");

export default function Page() {
  return <ProductPageTemplate id="directory" />;
}
