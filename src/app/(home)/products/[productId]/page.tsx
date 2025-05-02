import { notFound } from "next/navigation";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  if (productId > "60") {
    notFound();
  }
  return <div>Product Details for {productId}</div>;
}
