"use client";

import { addItem } from "@/store/cartSlice";
import { Product } from "@/types";
import { useDispatch } from "react-redux";

interface Props {
  product: Product;
}

export const AddToCartButton = ({ product }: Props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addItem({ product, quantity: 1 }));
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
    >
      Add to Cart
    </button>
  );
};
