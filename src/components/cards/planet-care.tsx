import { Zap } from "lucide-react";
import React from "react";

export default function PlanetCare() {
  return (
      <div className="flex flex-col w-full bg-muted p-6 h-full items-start">
        <span className="p-3 rounded-xl text-white bg-green-600 mb-16">
          <Zap />
        </span>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          Green energy
        </h3>
        <div className="flex flex-col h-full justify-between space-y-5">
          <p className="text-muted-foreground text-base">
            We use Ecotricity for our power, the first company in the UK to
            offer true 100% renewable energy.
          </p>
        </div>
      </div>
  );
}
