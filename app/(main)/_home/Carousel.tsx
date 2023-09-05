"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import CarouselSlide from "./CarouselSlide";

const components: React.FC<React.HTMLProps<HTMLDivElement>>[] = [
  CarouselSlide,
  CarouselSlide,
  CarouselSlide,
];

export default function Carousel() {
  const [viewportRef, embla] = useEmblaCarousel({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>(
    components.map((_, index) => index),
  );

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla],
  );

  const onInit = useCallback((embla: EmblaCarouselType) => {
    setScrollSnaps(embla.scrollSnapList());
  }, []);

  const onSelect = useCallback((embla: EmblaCarouselType) => {
    setSelectedIndex(embla.selectedScrollSnap());
  }, []);
  useEffect(() => {
    if (!embla) return;

    embla.on("reInit", onInit);
    embla.on("reInit", onSelect);
    embla.on("select", onSelect);
  }, [embla, onInit, onSelect]);

  console.log(scrollSnaps);
  return (
    <section aria-label="hero carousel">
      <div
        ref={viewportRef}
        className="relative min-h-[356px] w-screen max-w-[573px] overflow-hidden sm:w-[573px]"
      >
        <div className=" flex touch-pan-x">
          {components.map((Component, index) => (
            <article
              key={index}
              className="min-w-0 shrink-0 grow-0 basis-[100%]"
            >
              <Component
                role="group"
                tabIndex={selectedIndex === index ? 0 : -1}
                aria-hidden={selectedIndex === index ? "false" : "true"}
                aria-label={`slide ${index + 1} of ${components.length}`}
              />
            </article>
          ))}
        </div>
        <div className="absolute bottom-8 left-1/2 grid -translate-x-1/2 -translate-y-1/2 transform grid-flow-col justify-center gap-3">
          {scrollSnaps.map((_, index) => (
            <Button
              variant={"outline"}
              key={index}
              aria-current={index === selectedIndex ? "true" : "false"}
              onClick={() => scrollTo(index)}
              className={` h-[12px]
             w-[12px] cursor-pointer touch-manipulation rounded-full border-none ${
               index === selectedIndex ? "#D6D6D6" : "bg-[#888888]"
             }  p-0`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
