"use client";
import React from "react";
import { motion, AnimatePresence, spring } from "framer-motion";
import { useState, useEffect } from "react";

const SlideAnimation = () => {
  const items = [
    {
      for: "professionals",
      not: "identity thieves",
    },
    {
      for: "developers",
      not: "attackers",
    },
    {
      for: "everyone",
      not: "just anyone",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const measureRef = React.useRef(null);
  const [width, setWidth] = useState({ for: 0, not: 0 });

  // Update width when text changes
  useEffect(() => {
    if (measureRef.current) {
      const forElement = document.getElementById("measure-for");
      const notElement = document.getElementById("measure-not");

      setWidth({
        for: forElement ? forElement.offsetWidth + 32 : 0,
        not: notElement ? notElement.offsetWidth + 32 : 0,
      });
    }
  }, [currentIndex]);

  return (
    <div className="min-h-[100px] flex flex-col gap-4">
      <h1 className="text-4xl">
        Domain & Hosting Solution
      </h1>

      <div ref={measureRef} className="absolute -left-[9999px]">
        <span id="measure-for" className="text-3xl md:text-4xl">
          {items[currentIndex].for}
        </span>
        <span id="measure-not" className="text-3xl md:text-4xl">
          {items[currentIndex].not}
        </span>
      </div>

      <div className="relative h-16">
        <div className="text-white text-3xl md:text-4xl flex items-center gap-2">
          for
          <div className="relative h-14 inline-flex items-center">
            <motion.div
              className="absolute rounded-xl border border-gray-600 h-full"
              animate={{ width: width.for }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={items[currentIndex].for}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="px-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-600"
              >
                {items[currentIndex].for}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="relative h-16">
        <div className="text-white text-3xl md:text-4xl flex items-center gap-2">
          But not
          <div className="relative h-14 inline-flex items-center">
            <motion.div
              className="absolute rounded-xl border border-gray-600 h-full"
              animate={{ width: width.not }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={items[currentIndex].not}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="px-4"
              >
                {items[currentIndex].not}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideAnimation;
