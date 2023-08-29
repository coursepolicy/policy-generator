import React from "react";

export default function SampleTextEditing({
  noChanges,
}: {
  noChanges: boolean;
}) {
  return (
    <div className="ml-[8px]">
      <button className="inline-flex h-9 w-[92px] items-center justify-center gap-1.5 rounded-[3px] bg-coursePolicyGreen px-3 py-1.5 hover:bg-coursePolicyHoverGreen">
        <a
          href="https://d2o54i1ssvribj.cloudfront.net/sample-policy.pdf"
          target="_blank"
          className="text-center text-xs font-bold leading-normal text-white"
        >
          {noChanges ? "View PDF" : "Save policy"}
        </a>
      </button>
    </div>
  );
}
