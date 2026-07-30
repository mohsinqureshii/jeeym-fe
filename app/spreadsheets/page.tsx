import ProductPageTemplate, {
  productMetadata,
} from "@/components/product/ProductPageTemplate";

export const metadata = productMetadata("spreadsheets");

export default function Page() {
  return <ProductPageTemplate id="spreadsheets" />;
}
