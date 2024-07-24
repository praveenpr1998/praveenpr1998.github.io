"use client";

import { cn } from "../../../../lib/utils";
import React, { useEffect, useState } from "react";
import Link from "next/link";
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "300s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller   max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_10%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <Link target="_blank" href={item.url}>
            <li
              className="w-[350px]  max-w-full z-90 rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] hover:cursor-pointer"
              style={{
                background:
                  "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
              }}
              key={item.title}
            >
              <blockquote onClick={() => alert("test")}>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_40px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                  {item.description || item.title}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                      {item.author}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
