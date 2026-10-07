import HomeHero from "../components/home-page/homeHero";
import Projects from "../components/home-page/projects";
import Trust from "../components/home-page/trust";
import Value from "../components/home-page/value";
import Services from "../components/home-page/services";

import StatsSection from "../components/common/StatsSection";

export default function Home() {
  return (
    <div>
   
      <HomeHero />
      <Trust />
      <StatsSection />
   
      <Services />
         <Value />
      <Projects />
    </div>
  )
}
