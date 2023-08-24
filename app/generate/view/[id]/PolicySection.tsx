import React, { useEffect, useRef, Fragment } from "react";
import autoAnimate from "@formkit/auto-animate";
import { Section } from "./PolicyResults";

export default function PolicySection({ section }: { section: Section }) {
  const parentRef = useRef(null);
  useEffect(() => {
    parentRef.current && autoAnimate(parentRef.current);
  }, [parentRef]);

  return (
    <section ref={parentRef}>
      {section.subSections.map((subSection) => (
        <Fragment key={subSection.id}>{subSection.content}</Fragment>
      ))}
    </section>
  );
}
