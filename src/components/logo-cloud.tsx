import Image from "next/image";
import React from "react";

export default function LogoCloud() {
  return (
    <section>
    <div className="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
      <div className="mx-auto p-10 lg:p-20 rounded-lg bg-chart-3">
        <div
          className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          <Image
            className="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
            src="/images/brands/1.svg"
            alt="#_"
            width="158"
            height="48"
          /><Image
            className="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
            src="/images/brands/2.svg"
            alt="#_"
            width="158"
            height="48"
          /><Image
            className="col-span-2 lg:col-span-1 max-h-12 w-full object-contain"
            src="/images/brands/4.svg"
            alt="#_"
            width="158"
            height="48"
          /><Image
            className="col-span-2 sm:col-start-2 lg:col-span-1 max-h-12 w-full object-contain"
            src="/images/brands/5.svg"
            alt="#_"
            width="158"
            height="48"
          /><Image
            className="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1 max-h-12 w-full object-contain"
            src="/images/brands/9.svg"
            alt="#_"
            width="158"
            height="48"
          />
        </div>
      </div>
    </div>
  </section>
   
  );
}
