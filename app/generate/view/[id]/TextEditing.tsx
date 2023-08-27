"use client";

import React from "react";
import { useState } from "react";

export default function TextEditing({
  handleUpdatePolicy,
}: {
  handleUpdatePolicy: () => void;
}) {
  return (
    <div className="ml-[8px]">
      <button
        onClick={handleUpdatePolicy}
        className="inline-flex h-9 w-[92px] items-center justify-center gap-1.5 rounded-[3px] bg-coursePolicyGreen px-3 py-1.5 hover:bg-coursePolicyHoverGreen"
      >
        <p className="text-center text-xs font-bold leading-normal text-white">
          Finish Edits
        </p>
      </button>
    </div>
  );
}
