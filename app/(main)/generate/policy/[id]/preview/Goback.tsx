"use client";

import Link from "next/link";

export default function Goback({ policyId }: { policyId: string }) {
  return (
    <div className="preview-goback hover:underline ">
      <button
        onClick={() => {
          window.location.href = `/generate/policy/${policyId}`;
        }}
      >
        <strong>Go back</strong>
      </button>
    </div>
  );
}
