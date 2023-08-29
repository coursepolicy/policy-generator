"use client";
import { useEffect } from "react";

export function usePreventDragDownRefreshAndTopScroll() {
  useEffect(() => {
    let lastTouchY = 0;
    let preventPullToRefresh = false;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      lastTouchY = e.touches[0].clientY;
      preventPullToRefresh = window.pageYOffset === 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const touchYDelta = touchY - lastTouchY;
      lastTouchY = touchY;

      if (preventPullToRefresh && touchYDelta > 0) {
        e.preventDefault();
        return;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY < 0 && window.pageYOffset === 0) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);
}
