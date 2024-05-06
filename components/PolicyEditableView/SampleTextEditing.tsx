import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function SampleTextEditing({
  noChanges,
  handleUpdatePolicy,
  isLoading,
}: {
  noChanges: boolean;
  handleUpdatePolicy: () => void;
  isLoading: boolean;
}) {
  return (
    <div className="ml-[8px]">
      {noChanges ? (
        <Button
          asChild
          className="inline-flex h-9 w-[92px] items-center justify-center gap-1.5 rounded-[3px] bg-coursePolicyGreen px-3 py-1.5 hover:bg-coursePolicyHoverGreen"
        >
          <Link
            href={process.env.SAMPLE_PDF_URL as string}
            target="_blank"
            className="text-center text-xs font-bold leading-normal text-white"
          >
            View PDF
          </Link>
        </Button>
      ) : (
        <Button
          loading={isLoading}
          onClick={() => {
            handleUpdatePolicy();
          }}
          className="inline-flex h-9 w-[92px] items-center justify-center gap-1.5 rounded-[3px] bg-coursePolicyGreen px-3 py-1.5 text-center text-xs font-bold leading-normal text-white hover:bg-coursePolicyHoverGreen"
        >
          Save Policy
        </Button>
      )}
    </div>
  );
}
