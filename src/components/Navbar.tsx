import React from "react";
import SearchInputAndButton from "./SearchInputAndButton";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar bg-base-200 p-4">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          Meals App
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
