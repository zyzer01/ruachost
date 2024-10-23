import React from "react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    value: "30%",
    title: "Working Individuals",
    desc: "We reached over 30 million users and are growing fast.",
  },
  {
    value: "30%",
    title: "Working Individuals",
    desc: "We reached over 30 million users and are growing fast.",
  },
  {
    value: "70%",
    title: "Working Individuals",
    desc: "We reached over 30 million users and are growing fast.",
  },
  {
    value: "30%",
    title: "Working Individuals",
    desc: "We reached over 30 million users and are growing fast.",
  },
];

export default function StatSection() {
  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:items-center">
          <div className="flex flex-col h-full justify-between gap-8">
            <div className="text-center lg:text-left">
              <p className="text-sm leading-normal font-bold uppercase text-accent-600">
                Tagline
              </p>
              <h2 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-base-900 lg:text-balance">
                Empower your developer with our unmatched value
              </h2>
              <p className="text-base leading-normal mt-4 text-muted-foreground font-medium">
                Experience low fees, unwavering commitment, and massive earnings
                with a service trusted by over 60 million users.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <Button>Get started</Button>
              <Button variant="link">Learn more</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col bg-muted p-8 rounded-lg"
              >
                <div className="flex gap-4 items-baseline">
                  <h3 className="text-base leading-normal sm:text-lg md:text-xl text-chart-2 font-bold">
                    {stat.value}
                  </h3>
                  <h3 className="text-base leading-normal sm:text-lg md:text-xl text-base-900 font-medium">
                    {stat.title}
                  </h3>
                </div>
                <p className="text-base leading-normal mt-2 text-muted-foreground font-medium">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
