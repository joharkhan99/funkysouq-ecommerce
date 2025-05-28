import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { AddToCartButton } from "./AddToCartButton";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="border rounded-lg p-3">
      <Link
        href={`/products/${product.productId}`}
        className="block overflow-hidden"
      >
        <div className="relative w-full h-48">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-semibold text-lg text-blue-500">
            {product.name}
          </h2>
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        </div>
      </Link>

      <div className="mt-4">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};
