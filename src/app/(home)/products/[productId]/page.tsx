import { notFound } from "next/navigation";

type Params = { productId: string };

// Correct: `params` is a Promise only in `generateMetadata`
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { productId } = await params;
  return {
    title: `Product ${productId}`,
    description: `Details about product ${productId}`,
  };
}

// Correct: `params` is a plain object in the actual page
export default async function ProductDetails({ params }: { params: Params }) {
  const { productId } = params;

  if (Number(productId) > 60) {
    notFound();
  }

  return <div>Product Details for {productId}</div>;
}
