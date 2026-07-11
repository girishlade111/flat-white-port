import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { CaseStudies } from "@/components/sections/case-studies";
import { StrategyTimeline } from "@/components/sections/strategy-timeline";
import { Results } from "@/components/sections/results";
import { PartnershipBanner } from "@/components/sections/partnership-banner";
import { Team } from "@/components/sections/team";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/layouts/footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <CaseStudies />
      <StrategyTimeline />
      <Results />
      <PartnershipBanner />
      <Team />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
}
