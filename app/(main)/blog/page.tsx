"use client";

import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";

export default function Blog() {
  const [iframeHeight, setIframeHeight] = useState("auto");

  useEffect(() => {
    function handleResize() {
      const viewportHeight = window.innerHeight;
      const desiredMaxHeight = viewportHeight * 0.3; // 90% of viewport height

      // If the iframe's current height is greater than this calculated value,
      // set the iframe's height to this value.
      if (document.documentElement.scrollHeight > viewportHeight) {
        setIframeHeight(`${desiredMaxHeight}px`);
      }
    }

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Initial check in case the component loads on a small screen
    handleResize();

    // Cleanup: remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-y-auto" style={{ height: "calc(100vh - 350px)" }}>
      <Iframe
        url="https://observablehq.com/embed/d0362de8e6708bab?cell=*"
        className="h-full w-full border-0"
        width="100%"
        height={iframeHeight}
        frameBorder={0}
      />
    </div>
  );
}
