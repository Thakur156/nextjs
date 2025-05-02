// src/app/products/[productId]/reviews/[reviewId]/page.tsx

export default async function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = await params;

  return (
    <div>
      Review <strong>{reviewId}</strong> for Product{" "}
      <strong>{productId}</strong>
    </div>
  );
}
