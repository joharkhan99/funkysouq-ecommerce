import { AddToCartButton } from "@/components/AddToCartButton";
import { Product } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";

// send a server/api request to get the product details according to productId
export const getServerSideProps = async (incomingMessage: any) => {
  const rawId = incomingMessage.query.productId;
  const res = await fetch(
    `http://localhost:3000/api/products?productId=${encodeURIComponent(rawId)}`
  );
  const product: Product = await res.json();
  return {
    props: {
      product,
    },
  };
};

export default function ProductDetailPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  // get the product from props and render it below
  return (
    <div className="p-6 m-5">
      <div className="relative w-full md:w-1/2 h-80">
        <Image
          src={props.product.imageUrl}
          alt={props.product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h1 className="text-3xl font-bold">{props.product.name}</h1>
      <p className="text-gray-600">{props.product.description}</p>
      <AddToCartButton product={props.product} />
    </div>
  );
}
