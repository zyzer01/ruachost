import React from "react";
import { Button } from "./ui/button";
import { Key, MousePointerClick } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="px-8 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
        <div className="grid items-end grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h2 className="leading-normal sm:text-lg md:text-xl font-semibold">
              Green Hosting for everyone
            </h2>
            <p className="leading-normal mt-4 text-muted-foreground font-medium lg:text-balance">
              Streamline your workflow and collaborate seamlessly on staging and
              temporary environments
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2 sm:ml-auto">
          <Button><MousePointerClick />Get started with us</Button>
          <Button variant='link'><Key />Login to your account</Button>
          </div>
        </div>
        <div className="grid pt-6 mt-6 border-t grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-24">
          <div className="space-y-4">
            <nav aria-labelledby="footer-heading-0">
              <h2
                className="leading-normal font-semibold"
                id="footer-heading-0"
              >
                Company
              </h2>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    Mission
                  </a>
                </li>
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    Leadership Team
                  </a>
                </li>
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    History
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="space-y-4">
            <nav aria-labelledby="footer-heading-1">
              <h2
                className="leading-normal font-semibold"
                id="footer-heading-1"
              >
                Services
              </h2>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    Marketing
                  </a>
                </li>
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    Analytics
                  </a>
                </li>
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    Commerce
                  </a>
                </li>
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    Insights
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="space-y-4">
            <nav aria-labelledby="footer-heading-2">
              <h2
                className="leading-normal font-semibold"
                id="footer-heading-2"
              >
                Resources
              </h2>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    Webinars
                  </a>
                </li>
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    White Papers
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="space-y-4">
            <nav aria-labelledby="footer-heading-3">
              <h2
                className="leading-normal font-semibold"
                id="footer-heading-3"
              >
                Support &amp; Legal
              </h2>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    API Status
                  </a>
                </li>
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    Live Chat
                  </a>
                </li>
                <li>
                  <a
                    className="text-md leading-normal hover:text-accent-500 font-medium text-muted-foreground"
                    href="#_"
                  >
                    Email Support
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="pt-6 mt-12 border-t flex flex-col md:flex-row items-center justify-between">
          <a
            className="text-md leading-normal hover:text-accent-500 font-medium flex items-center gap-2"
            href="#_"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg> 
            <span className="ml-2 text-xl font-bold tracking-wide">
              Ruachost
            </span>
          </a>
          <h2 className="text-sm leading-normal font-medium text-base-400">
            Copyright © 2024 Ruachost. All rights reserved.
          </h2>
        </div>
      </div>
    </footer>
  );
}
