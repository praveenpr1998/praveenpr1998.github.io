"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteScroll/index";

export function NewsCards({ news }) {
  return (
    <>
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>
      <div className="h-[20rem] mb-10 justify-around rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          Some Latest News
        </span>

        <InfiniteMovingCards items={news} direction="right" speed="slow" />
      </div>
    </>
  );
}
