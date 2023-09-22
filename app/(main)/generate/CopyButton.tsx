"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function CopyButton({ text, ...rest }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  const copyTextToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  return (
    <>
      {copied ? (
        <Button
          {...rest}
          variant={"ghost"}
          size={"icon"}
          className="h-[30px] hover:bg-[#EEDDCB]"
          onClick={async () => {
            try {
              await copyTextToClipboard(text);
              setCopied(() => true);
              setTimeout(() => setCopied(() => false), 1000);
            } catch (error) {
              throw new Error("Failed to copy text: " + error);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </Button>
      ) : (
        <Button
          {...rest}
          variant={"ghost"}
          size={"icon"}
          className="h-[30px] hover:bg-[#EEDDCB]"
          onClick={async () => {
            try {
              await copyTextToClipboard(text);
              setCopied(() => true);
              setTimeout(() => setCopied(() => false), 1000);
            } catch (error) {
              throw new Error("Failed to copy text: " + error);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-copy"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        </Button>
      )}
    </>
  );
}
