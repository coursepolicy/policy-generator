import Link from "next/link";
import React from "react";
import { usePreventDragDownRefreshAndTopScroll } from "../_utils";

export default function Home() {
  usePreventDragDownRefreshAndTopScroll();
  return (
    <main>
      Home
      <div>
        <Link href="/sample">
          <strong>Sample Policy</strong>
        </Link>
      </div>
    </main>
  );
}
