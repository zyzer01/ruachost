import { Cloud } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function PlansOverview() {
  return (
    <div className="flex flex-col w-full relative bg-muted p-6 pt-8 rounded-xl h-full border border-gray-200 sm:p-8 text-center">
      <span className="text-foreground bg-background rounded-[10px] w-12 h-12 p-3 font-heading flex-center absolute top-[-24px] left-1/2 translate-x-[-50%] border border-gray-200">
        <Cloud />
      </span>
      <h3 className="text-lg md:text-xl font-semibold mb-2">Web Hosting</h3>
      <div className="flex flex-col h-full justify-between space-y-5">
        <p className="text-muted-foreground text-base">
          Lightning-fast and reliable cPanel hosting for your website.
        </p>
        <Button>Join us today</Button>
      </div>
    </div>
  );
}
