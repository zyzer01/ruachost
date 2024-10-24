"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { benefitCards, slideFeatures } from "@/lib/items";

export default function TargetMarket() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
      align: "start",
    },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false })]
  );

  return (
    <section>
      <div className="px-8 py-32 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
        <div className="text-center max-w-2xl mx-auto lg:text-balance flex flex-col items-center justify-center">
          <p className="text-sm leading-normal font-medium uppercase text-chart-2 bg-chart-2/10 px-3 py-1 rounded-xl">
            Market
          </p>
          <h2 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-foreground lg:text-balance">
            Hosting solutions built for everyone
          </h2>
          <p className="leading-normal mt-4 text-base-500 font-medium">
            The fastest method for working together on staging and temporary
            environments.
          </p>
        </div>

        <div className="relative py-12 mx-auto overflow-hidden 2xl:max-w-screen-xl">
          <div className="grid justify-between w-full">
            <div className="absolute inset-0 left-0 z-10 from-background via-transparent w-44 bg-gradient-to-r"></div>
            <div className="absolute inset-0 left-0 z-10 ml-auto from-background via-transparent w-44 bg-gradient-to-l"></div>
          </div>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {slideFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`flex-none inline-flex items-center font-medium relative text-base-700 bg-muted px-4 py-1.5 text-sm rounded-lg ${
                    index === slideFeatures.length - 1 ? "ml-auto" : ""
                  }`}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-2 text-center gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-y-16 mt-12">
          {benefitCards.map((card, index) => (
            <div key={index}>
              <div className="flex flex-col gap-3 justify-center items-center">
                <span className="text-foreground bg-muted rounded-xl w-10 h-10 p-2 border border-border">
                  {card.icon}
                </span>
                <dt>
                  <h3 className="leading-normal sm:text-lg md:text-xl text-foreground font-semibold">
                    {card.title}
                  </h3>
                </dt>
              </div>
              <dd>
                <p className="leading-normal mt-2 text-muted-foreground">
                  {card.description}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
