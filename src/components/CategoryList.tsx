import { Category } from "@/types";
import Link from "next/link";
import React from "react";

interface Props {
  categories: Category[];
}

// render categories along with the children.; loop until the last child node is reached
const CategoryList = ({ categories }: Props) => {
  return (
    <ul className="ml-4 list-disc">
      {categories.map((cat: Category) => (
        <li key={cat.id} className="my-1">
          <Link href={`/products?categoryId=${cat.id}`}>{cat.name}</Link>

          {/* recursion for looping again on nested children */}
          {cat.children && cat.children.length > 0 && (
            <CategoryList categories={cat.children} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
