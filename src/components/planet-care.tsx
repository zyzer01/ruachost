import React from "react";
import HeadingApart from "./ui/heading-apart";
import { planetCare } from "@/lib/items";

const PlanetCare = () => {
  return (
    <div className="p-8 mt-10">
      <HeadingApart
        title="Planet-first"
        desc="Yes, we obsess over our tech. But we also protect our planet."
        buttonText="Get Started"
        href="/signup"
      />
      <div className="grid grid-cols-8 gap-12 sm:gap-10 lg:gap-6">
        {planetCare.map((item, index) => (
          <div className="col-span-8 md:col-span-4 lg:col-span-2" key={index}>
            <div className="flex flex-col w-full bg-muted p-6 h-full items-start">
              <span className="p-3 rounded-xl text-white bg-green-600 mb-16">
                {item.icon}
              </span>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <div className="flex flex-col h-full justify-between space-y-5">
                <p className="text-muted-foreground text-base">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetCare;
