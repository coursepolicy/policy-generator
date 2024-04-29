"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import CarouselSlide1 from "./CarouselSlide1";
import CarouselSlide2 from "./CarouselSlide2";
import CarouselSlide3 from "./CarouselSlide3";

const components: React.FC<React.HTMLProps<HTMLDivElement>>[] = [
  CarouselSlide1,
  CarouselSlide2,
  CarouselSlide3,
];

export default function Carousel() {
  const [viewportRef, embla]: UseEmblaCarouselType = useEmblaCarousel({}, [
    Autoplay({ delay: 10_000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>(
    components.map((_, index) => index),
  );

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla],
  );

  const onInit = useCallback((embla: UseEmblaCarouselType[1]) => {
    if (!embla) return;
    setScrollSnaps(embla.scrollSnapList());
  }, []);

  const onSelect = useCallback((embla: UseEmblaCarouselType[1]) => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, []);
  useEffect(() => {
    if (!embla) return;

    embla.on("reInit", onInit);
    embla.on("reInit", onSelect);
    embla.on("select", onSelect);
  }, [embla, onInit, onSelect]);

  return (
    <section
      aria-label="hero carousel"
      className="grid items-center justify-center xl:justify-start"
    >
      <div
        ref={viewportRef}
        className="relative min-h-[356px] w-screen max-w-[573px] overflow-hidden sm:min-h-[284px] lg:w-[573px] lg:max-w-[458px]
        xl:min-h-[356px] xl:max-w-[573px]
        "
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
        <div className="absolute bottom-8 left-1/2 mb-[2px] ml-[8px] grid -translate-x-1/2 -translate-y-12 transform grid-flow-col justify-center gap-3">
          {scrollSnaps.map((_, index) => (
            <Button
              variant={"outline"}
              key={index}
              aria-current={index === selectedIndex ? "true" : "false"}
              aria-label={`scroll to slide ${index + 1}`}
              onClick={() => scrollTo(index)}
              className={` h-[2px]
             w-[23px] cursor-pointer touch-manipulation rounded-none border-none ${
               index === selectedIndex ? "bg-[#8b95ca]" : "bg-[#dedede]"
             }  p-0`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
