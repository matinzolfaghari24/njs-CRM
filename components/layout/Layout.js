import Link from "next/link";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <header>
        <h2>Botostart CRM</h2>
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
