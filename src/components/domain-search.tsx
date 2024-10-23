import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function DomainSearch() {
  const domains = [".ng", ".com", "org", ".net", '.me'];
  return (
    <div className="py-16 space-y-16 md:py-24 md:space-y-24">
      <div className="overflow-x-hidden">
        <div className="mx-auto px-4 md:px-8">
          <div className="bg-muted border border-ring max-w-fit mx-auto p-8 md:px-16 md:py-12 relative space-y-6 after:block after:h-px after:w-screen after:absolute after:top-1/2 after:left-full after:-translate-y-1/2 after:bg-ring before:block before:h-px before:w-screen before:absolute before:top-1/2 before:right-full before:-translate-y-1/2 before:bg-ring">
            <h2 className="text-md lg:text-3xl font-semibold">
              Search for a domain or transfer your own
            </h2>
            <div className="space-y-3">
              <form className="flex items-stretch">
                <div className="flex items-stretch rounded-lg flex-1">
                  <Input 
                  className="bg-background rounded-r-none py-6 focus:outline-none focus-visible:ring-0"
                  type="text"
                  id="domainName"
                  name="domainName"
                  placeholder="Find your dream domain"
                  />
                </div>
                <Button className="rounded-l-none py-6" type="submit">
                Search domain
                </Button>
              </form>
              <div className="flex gap-4 items-center">
                <ul className="flex items-center gap-4">
                  {domains.map((domain, index) => (
                    <li
                    key={index}
                      className="text-lg md:text-xl font-semibold"
                    >
                      {domain}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">From just N2,000/year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
