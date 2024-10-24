import React from "react";
import { Button } from "./button";
import Link from "next/link";

interface HeadingApartProps {
  tagline?: string;
  title: string;
  desc?: string;
  buttonText: string;
  href: string;
}

const HeadingApart: React.FC<HeadingApartProps> = ({
  tagline,
  title,
  desc,
  buttonText,
  href,
}) => {
  return (
    <div className="my-12 grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:items-end">
      <div className="lg:col-span-2">
        <p className="text-sm leading-normal font-bold uppercase text-accent-600">
          {tagline}
        </p>
        <h2 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-base-900 lg:text-balance">
          {title}
        </h2>
        <p className="pt-4 text-muted-foreground">{desc}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2 lg:ml-auto">
        <Link href={href}>
        <Button>{buttonText}</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeadingApart;
