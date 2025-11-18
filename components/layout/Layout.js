import Link from "next/link";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <header className="w-full flex justify-between items-center p-6 rounded-b-xl  bg-cyan-950">
        <h2 className="text-2xl ">Botostart CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <main>{children}</main>
      <footer>
        <p>Copyright 2025 Botostart CRM &copy;</p>
      </footer>
    </>
  );
}

export default Layout;
