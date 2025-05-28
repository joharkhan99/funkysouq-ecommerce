import CategoryList from "@/components/CategoryList";
import { Category } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

// initial request to backend fr the nested categorues that we want to shpw on frontend
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/categories");
  const categories: Category[] = await res.json();
  return {
    props: {
      categories,
    },
  };
};

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  // read categories from props and render it below
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shop By Category</h1>
      <CategoryList categories={props.categories} />
    </div>
  );
}
