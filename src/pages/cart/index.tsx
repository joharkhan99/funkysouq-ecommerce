import {
  clearCart,
  decrementItem,
  incrementItem,
  removeItem,
  selectedCartItems,
  selectedCartItemsCount,
} from "@/store/cartSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const items = useSelector(selectedCartItems);
  const totalCount: any = useSelector(selectedCartItemsCount);
  const dispatch = useDispatch();

  // if no items in cart then display this
  if (items.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="my-10 p-6">
      <h1 className="text-2xl font-bold mb-4">
        Your Cart has {totalCount} items
      </h1>

      <ul className="w-1/2 m-auto">
        {items.map((item: any) => (
          <li
            key={item.product.productId}
            className="flex items-center space-x-4"
          >
            <Image
              src={item.product.imageUrl}
              alt={item.product.name}
              className="object-cover rounded-lg"
              width={100}
              height={100}
            />
            <div className="flex-1">
              <h2 className="font-semibold">{item.product.name}</h2>
              <p className="text-gray-600">Qty: {item.quantity}</p>
            </div>

            <div className="space-x-2">
              <button
                onClick={() => dispatch(incrementItem(item.product.productId))}
                className="px-2 py-1 border rounded cursor-pointer"
              >
                +
              </button>
              <button
                onClick={() => dispatch(decrementItem(item.product.productId))}
                className="px-2 py-1 border rounded cursor-pointer"
              >
                -
              </button>
              <button
                onClick={() => dispatch(removeItem(item.product.productId))}
                className="px-2 py-1 text-red-600 cursor-pointer"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
        <div className="mt-6">
          <button
            onClick={() => dispatch(clearCart())}
            className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer"
          >
            Clear Cart
          </button>
        </div>
      </ul>
    </div>
  );
};

export default CartPage;
