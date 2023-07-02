"use client";

import Image from "next/image";
import Typography from "@/_components/Typography";
import Button from "@/_components/Button";
import { useLayoutEffect, useRef } from "react";

const MARKETS_IMAGES = [
  "/images/image1.jpeg",
  "/images/image2.jpeg",
  "/images/image2.jpeg",
  "/images/image2.jpeg",
  "/images/image1.jpeg",
  "/images/image1.jpeg",
];

export default function MarketStories() {
  const storiesRef = useRef(null);


    useLayoutEffect(() => {
      function updateSize() {
      if(window.innerWidth>1024) {
      storiesRef.current.style.height = `calc(100vh - ${
        storiesRef.current.getBoundingClientRect().top + 16
      }px)`;
    }
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);

 

  return (
    <div className="w-full md:w-2/6 md:h-screen">
      <Typography
        component="h1"
        family="bold"
        className="hidden md:block text-red-700"
        textTransform="uppercase"
      >
        Market Stories
      </Typography>
      <div
        className="grid grid-cols-2 gap-6 mt-[48px] pb-4 overflow-auto"
        ref={storiesRef}
      >
        {MARKETS_IMAGES.map((market, index) => (
          <div className="relative h-44">
            <Image
              src={market}
              width={400}
              height={150}
              style={{ height: "100%", width: "100%" }}
              alt="Picture of market"
            />
            <div className="absolute bottom-0 w-full bg-slate-900 text-white p-2 bg-opacity-70">
              <Typography component="body1" className="h-14 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                purus efficitur, ornare arcu condimentum, porttitor eros. Nam
                tellus ligula, faucibus nec luctus non,
              </Typography>
            </div>
            {index === MARKETS_IMAGES.length - 1 && (
              <Button
                label="+"
                size="large"
                className="absolute right-4 -bottom-4 rounded-full !bg-blue-950"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
