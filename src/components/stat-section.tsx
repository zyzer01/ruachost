'use client'
import React from "react";
import { Button } from "./ui/button";
import CountUp from 'react-countup';
import HeadingApart from "./ui/heading-apart";

export default function StatSection() {
  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div className="flex justify-between rounded-3xl bg-muted flex-col lg:gap-12">
            <div className="p-8 order-last border-t w-full border-muted-foreground/20">
              <p className="text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-6xl text-accent-700 font-medium">
                <CountUp end={3389} enableScrollSpy scrollSpyOnce/>   
              </p>
            </div>
            <div className="sm:shrink lg:flex-none p-8">
              <h3 className="leading-normal sm:text-lg md:text-xl text-base-900 font-medium">
                Active Customers
              </h3>
              <p className="leading-normal mt-2 text-base-500 font-medium">
                We’re dedicated to delivering outstanding service and value.
              </p>
            </div>
          </div>
          <div className="flex justify-between rounded-3xl bg-blue-600 flex-col lg:gap-28">
            <div className="p-8 order-last border-t border-border/20 w-full">
              <p className="text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-6xl text-white font-medium">
              
              <CountUp end={7093} enableScrollSpy scrollSpyOnce/>
              </p>
            </div>
            <div className="sm:shrink lg:flex-none p-8">
              <h3 className="leading-normal sm:text-lg md:text-xl text-white font-medium">
                Domains Managed
              </h3>
              <p className="leading-normal mt-2 text-white font-medium">
                Reap the benefits with substantial returns.
              </p>
            </div>
          </div>
          <div className="flex justify-between rounded-3xl bg-foreground flex-col lg:gap-44 text-background">
            <div className="p-8 order-last border-t border-border/20 w-full">
              <p className="text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-6xl font-medium">
              <CountUp end={10453} enableScrollSpy scrollSpyOnce/>
              </p>
            </div>
            <div className="sm:shrink lg:flex-none p-8">
              <h3 className="leading-normal sm:text-lg md:text-xl font-medium">
              Websites Hosted
              </h3>
              <p className="leading-normal mt-2 font-medium">
                Enjoy significant savings with our extremely low fee structure.
              </p>
            </div>
          </div>
        </div>
        <HeadingApart title="Unmatched power with exclusive service." tagline="Power" buttonText="Get Started" href="/signup" />
      </div>
    </section>
  );
}
