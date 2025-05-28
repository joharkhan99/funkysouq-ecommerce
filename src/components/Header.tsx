"use client";

import { selectedCartItemsCount } from "@/store/cartSlice";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const itemCount: any = useSelector(selectedCartItemsCount);

  return (
    <header>
      <nav className="flex gap-10 bg-blue-400 p-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/cart"}>Cart ({itemCount})</Link>
      </nav>
    </header>
  );
};

export default Header;
