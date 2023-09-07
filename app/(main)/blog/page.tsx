"use client";

import React from "react";
import Iframe from "react-iframe";

export default function Blog() {
  return (
    <div
      className="h-[calc(100vh_-_50px)] overflow-y-auto
      md:h-[calc(100vh_-_205px)]"
    >
      <Iframe
        url="https://observablehq.com/embed/d0362de8e6708bab?cell=*"
        className="h-full w-full border-0"
        width="100%"
        frameBorder={0}
      />
    </div>
  );
}
