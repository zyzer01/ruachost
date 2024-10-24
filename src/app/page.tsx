import DomainSearch from "@/components/domain-search";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PlansOverview from "@/components/cards/plans-overview";
import LogoCloud from "@/components/logo-cloud";
import FeatureOne from "@/components/feature-one";
import PlanetCare from "@/components/planet-care";
import { generalPlans } from "@/lib/items";
import AltHero from "@/components/alt-hero";
import HeroSection from "@/components/new-hero";
import TargetMarket from "@/components/target-market";
import StatSection from "@/components/stat-section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AltHero />
      <DomainSearch />
      <div className="grid grid-cols-8 p-8 gap-12 sm:gap-10 lg:gap-6">
        {generalPlans.map((plan, index) => (
          <div className="col-span-8 sm:col-span-4 lg:col-span-2" key={index}>
            <PlansOverview
              icon={plan.icon}
              title={plan.title}
              desc={plan.desc}
              buttonText={plan.buttonText}
              href={plan.href}
            />
          </div>
        ))}
      </div>
      <StatSection />
      <FeatureOne />
      <PlanetCare />
      <TargetMarket />
      <LogoCloud />
    </div>
  );
}
