"use client";

import { useState } from "react";

export default function TextEditing() {
  const [editing, setEditing] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setEditing(!editing);
        }}
      >
        {editing ? "Finish Edits" : "Edit"}
      </button>
    </div>
  );
}
