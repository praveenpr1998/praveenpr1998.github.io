"use client";
import React, { useEffect, useLayoutEffect } from "react";

function SplashScreen() {
  useLayoutEffect(() => {
    setTimeout(() => {
      document.getElementById("temp-div").style.height = 0;
      document
        .getElementById("transition-container")
        .classList.add("animate-shrinkHeight");
      document.getElementById("fade-text").classList.add("animate-fadeOut");
    }, 0); // Delay before the transition starts
  }, []);

  return (
    <>
      <div id="temp-div" class="h-screen w-screen bg-black"></div>
      <div
        id="transition-container"
        class="   bg-slate-900 transition-all duration-1000"
      >
        <div class="flex items-center justify-center h-full bg-black">
          <span
            id="fade-text"
            class=" text-center text-transparent bg-clip-text bg-gradient-to-r from-[#662D8C] to-[#ED1E79] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold "
          >
            WELCOME TO MY PORTFOLIO
          </span>
        </div>
      </div>
    </>
  );
}

export default SplashScreen;
