import React from "react";
import Header from "./Header";

// this is the main Layout where all the children are rendered inside it and it reamins the same o all pages
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className="flex gap-10 bg-blue-400 p-3">
        © 2025 FunkySouq E-commerce
      </footer>
    </>
  );
};

export default Layout;
