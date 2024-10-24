/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import SlideAnimation from "./slide-animation";

export default function AltHero() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="relative">
        <div className="aspect-cinema relative md:absolute md:aspect-auto md:h-full md:w-full">
          <Image
            alt=""
            role="presentation"
            fetchpriority="high"
            decoding="async"
            data-nimg="fill"
            className="aspect-cinema block border-gray-800 border-b object-right w-full md:absolute md:aspect-auto md:border-0 md:h-full md:inset-0 md:object-right object-cover next-exported-image-blur-svg"
            sizes="100vw"
            src="/images/hero entry.jpg"
            width={704}
            height={384}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </div>
        <div className="grid items-stretch relative md:grid-cols-[0fr_1fr_10vh_0fr] lg:grid-cols-[1fr_936px_344px_1fr]">
          <div className="border-gray-800 border-r col-start-2 hidden md:block md:h-[30vh] object-right lg:h-[min(calc(50vh),640px)]"></div>
          <div className="md:row-start-2 md:border-t md:border-gray-800"></div>
          <div className="bg-background col-span-1 row-start-2 md:border-gray-800 md:border-t">
            <div className="max-w-[936px] pt-6 px-4 space-y-6 sm:pt-8 md:border-gray-800 md:border-r md:pt-16 md:px-8 md:space-y-8 lg:space-y-12">
              <div className="space-y-3">
                <SlideAnimation />
              </div>
            </div>
          </div>
          <div className="border-gray-800 col-span-2 col-start-3 row-start-2 md:border-b md:border-t"></div>
        </div>
      </div>

      <div>
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl balance max-w-[808px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                molestias fugit eos, libero et cum, culpa eveniet consectetur
                aperiam quia excepturi quam dolores asperiores odit laudantium,
                maiores repudiandae similique dolor!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                molestias fugit eos, libero et cum, culpa eveniet consectetur
                aperiam quia excepturi quam dolores asperiores odit laudantium,
                maiores repudiandae similique dolor!
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-6 max-w-[808px]">
              <div className="flex flex-col gap-y-3 grow shrink-0">
                {/* <img
                  alt="Signature"
                  role="presentation"
                  loading="lazy"
                  width="210"
                  height="26"
                  decoding="async"
                  data-nimg="1"
                  className="block shrink-0 next-exported-image-blur-svg"
                  src="https://krystal.io/_next/static/media/signature.cc00fea5.svg"
                  style={{ color: "transparent" }}
                /> */}
                <div className="flex gap-x-2.5 items-center">
                  <p className="text-md md:text-lg font-semibold text-muted-foreground">
                    Rotimi Onifade — Founder
                  </p>
                  <a
                    href="https://www.linkedin.com/in/simonblackler"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      className="block shrink-0 stroke-2 h-[18px] text-gray-900 w-[18px]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <use xlinkHref="/sprites/socials-a2513088.svg#linkedin"></use>
                    </svg>
                    <span className="sr-only">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-start md:flex-row">
              <div className="gap-2 md:flex-row md:gap-4 md:items-center flex flex-col items-start">
                <p className="font-medium text-foreground">
                  Let's embark on a journey to fulfilment together
                </p>
              </div>
              <div className="md:border-gray-200 md:border-l md:pl-4">
                <Button>Get started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
