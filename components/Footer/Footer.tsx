import React from "react";
import { Button } from "../ui/button";

export function Footer({ stickied }: { stickied?: boolean }) {
  return (
    <footer
      className={`${
        stickied ? "sticky bottom-0 z-20" : ""
      } mx-10 flex h-[145px] items-center
      justify-center text-center sm:mx-0`}
    >
      <p className="text-sm font-bold leading-normal text-stone-500">
        Have a question or concern?
        <Button
          asChild
          variant="link"
          className="h-0 px-2 text-sm font-bold leading-normal text-stone-500 underline"
        >
          <a href="mailto:here@coursepolicy.ai" target="blank">
            Email us
          </a>
        </Button>
      </p>
    </footer>
  );
}
