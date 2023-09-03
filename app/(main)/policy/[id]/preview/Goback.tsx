"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Goback({ policyId }: { policyId: string }) {
  return (
    <div className="preview-goback hover:underline ">
      <Button
        onClick={() => {
          window.location.href = `/generate/policy/${policyId}`;
        }}
      >
        <strong>Go back</strong>
      </Button>
    </div>
  );
}
