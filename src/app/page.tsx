import DomainSearch from "@/components/domain-search";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PlansOverview from "@/components/cards/plans-overview";
import LogoCloud from "@/components/logo-cloud";
import StatSection from "@/components/stat-section";
import PlanetCare from "@/components/cards/planet-care";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DomainSearch />
      <div className="grid grid-cols-8 p-16">
        <div className="col-span-8 md:col-span-4 lg:col-span-2">
          <PlansOverview />
        </div>
      </div>
      <div className="grid grid-cols-8 p-16">
        <div className="col-span-8 md:col-span-4 lg:col-span-2">
          <PlanetCare />
        </div>
      </div>
      <StatSection />
      <LogoCloud />
    </div>
  );
}
