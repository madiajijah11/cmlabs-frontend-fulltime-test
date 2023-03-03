import React from "react";
import Link from "next/link";

function Breadcrumbs({ path }: { path: string }) {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href={`/ingredient/${path}`}>
            {path?.charAt(0) + path?.slice(1)}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
