import React from "react";

export default function Footer() {
  return (
    <footer className="flex h-[145px] items-center justify-center">
      <p className="text-sm font-bold leading-normal text-stone-500">
        Have a question or concern? Email us{" "}
        <a
          href="#"
          target="blank"
          className="text-sm font-bold leading-normal text-stone-500 underline"
        >
          here
        </a>{" "}
        or fill out an anonymous feedback form{" "}
        <a
          href="#"
          target="blank"
          className="text-sm font-bold leading-normal text-stone-500 underline"
        >
          here
        </a>
        .
      </p>
    </footer>
  );
}
