import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

// get the categoryId from url and send nan api requst to backedn to get all items in that category
export const getServerSideProps = async (incomingMessage: any) => {
  const rawId = incomingMessage.query.categoryId;
  const idStr = Array.isArray(rawId) ? rawId[0] : rawId;
  console.log(idStr);
  const res = await fetch(
    `http://localhost:3000/api/products?categoryId=${encodeURIComponent(idStr)}`
  );
  const products: Product[] = await res.json();
  console.log(products);
  return {
    props: {
      products,
    },
  };
};

export default function ProductsPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  // this is just a fancy thing. I wanted to show the categoryId as well on frontend, so I got it from the useRouter hook
  const { query } = useRouter();
  const categoryId = Array.isArray(query.categoryId)
    ? query.categoryId[0]
    : query.categoryId;

  // render the products in category from the props
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">
        Products in Category: {categoryId}
      </h1>

      {props.products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {props.products.map((p) => (
            <ProductCard key={p.productId} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
