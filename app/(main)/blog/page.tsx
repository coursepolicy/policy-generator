import React from "react";
import Iframe from "react-iframe";

export default function Blog() {
  return (
    <main className="mx-auto my-0 w-[100%] max-w-[1040px] bg-white px-[20px] py-[30px] md:mt-[60px]">
      <Iframe
        url="https://observablehq.com/embed/d0362de8e6708bab?cell=*"
        className="h-[65vh] w-[100%] overflow-hidden border-none"
        width="100%"
        height="500"
        frameBorder={0}
      />
    </main>
  );
}
