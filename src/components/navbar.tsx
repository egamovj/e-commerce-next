import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white">
      <Link href={"/"} className="text-black font-semibold text-2xl">
        Egamov J
      </Link>
      <div className="flex items-center space-x-2.5 text-sm">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
          <Link href={'/products'} className="mr-5 hover:text-gray-900">All products</Link>
        </nav>
        <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
          Log in
        </button>
        <button className="button bg-transparent border-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
