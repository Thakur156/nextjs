import Link from "next/link";

export default function Product() {
  return (
    <div>
      <ul>
        <Link href="/products/product1" replace>
          Product1
        </Link>
        <li>Product2</li>
        <li>Product3</li>
      </ul>
    </div>
  );
}
