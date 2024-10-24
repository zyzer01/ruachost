// import { Cloud } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface PlansOverviewProps {
  icon: React.ReactNode
  title: string;
  desc: string;
  buttonText: string;
  href: string;
}

const PlansOverview: React.FC<PlansOverviewProps> = ({
  icon,
  title,
  desc,
  buttonText,
  href,
}) => {
  return (
    <div className="flex flex-col w-full relative bg-muted p-6 pt-8 rounded-xl h-full border border-border sm:p-8 text-center">
      <span className="text-foreground bg-background rounded-xl w-12 h-12 p-3 flex-center absolute top-[-24px] left-1/2 translate-x-[-50%] border border-border">
       {icon}
      </span>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <div className="flex flex-col h-full justify-between space-y-5">
        <p className="text-muted-foreground text-base">{desc}</p>
        <Link href={href}>
          <Button className="w-full">{buttonText}</Button>
        </Link>
      </div>
    </div>
  );
};

export default PlansOverview;
