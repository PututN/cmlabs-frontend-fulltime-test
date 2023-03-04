import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar bg-gradient-to-r from-green-400 to-blue-500 p-4 fixed z-50">
      <div className="flex-1">
        <Link
          href={"/"}
          className="font-bold btn btn-ghost normal-case text-xl"
        >
          Meals App
        </Link>
      </div>
      <Link href={"/"} className="px-3 py-2 rounded-lg btn-primary hover:btn-warning font-bold text-lg">
        Home
      </Link>
    </nav>
  );
}

export default Navbar;
