import Link from "next/link";
import React from "react";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b  from-black via-blue-900/60 to-black ">
      <header className="w-full border-b border-blue-700  ">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/">
            <h2 className="text-3xl font-bold text-white hover:text-cyan-300 transition duration-300 cursor-pointer">
              Botostart CRM
            </h2>
          </Link>
          <Link href="/add-customer">
            <button className="px-6 py-2 border-2 text-green-300 border-green-500   font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              + Add Customer
            </button>
          </Link>
        </div>
      </header>
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        {children}
      </main>
      <footer className="w-full bg-gray-900 border-t border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Botostart CRM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
