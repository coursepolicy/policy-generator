"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import copyImage from "@/public/images/copy.svg";
import doneImage from "@/public/images/done.svg";

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
    <Button
      {...rest}
      variant={"ghost"}
      size={"icon"}
      className="h-[30px] hover:bg-red-100"
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
      {copied ? (
        <Image alt="done copying" src={doneImage} />
      ) : (
        <Image alt="copy image" src={copyImage} />
      )}
    </Button>
  );
}
