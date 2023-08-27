"use client";
import React, { useEffect, useRef } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import { usePathname, useSearchParams } from "next/navigation";

interface Props {}

export default function ProgressBar(props: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ref = useRef<LoadingBarRef>(null);
  useEffect(() => {
    if (!ref.current) return;

    ref.current.staticStart(40);
    ref.current.complete();
  }, [pathname, searchParams]);
  return <LoadingBar {...props} ref={ref} />;
}
