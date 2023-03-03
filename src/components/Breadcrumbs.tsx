import React from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

function Breadcrumbs({ path }: { path: string }) {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href="/" className="font-semibold">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li>
          <Link href={`/ingredient/${path}`} className="font-semibold">
            {path?.charAt(0) + path?.slice(1)}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
