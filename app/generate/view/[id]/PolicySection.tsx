import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import { Section } from "./PolicyResults";

export default function PolicySection({ section }: { section: Section }) {
  const parentRef = useRef(null);
  useEffect(() => {
    console.log("hello ref");
    parentRef.current && autoAnimate(parentRef.current);
  }, [parentRef]);

  return (
    <section ref={parentRef}>
      {section.subSections.map((subSection) => (
        <React.Fragment key={subSection.id}>
          {subSection.content}
        </React.Fragment>
      ))}
    </section>
  );
}
