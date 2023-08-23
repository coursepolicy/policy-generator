import React from "react";

export default function PolicySection({
  section,
}: {
  section: {
    id: number;
    sectionTitle: string;
    subSections: {
      id: number;
      subSectionTitle: string;
      content: React.ReactElement;
    }[];
  };
}) {
  return (
    <>
      {section.subSections.map((subSection) => (
        <React.Fragment key={subSection.id}>
          {subSection.content}
        </React.Fragment>
      ))}
    </>
  );
}
