import Commitment from "../components/services/commitment";
import Process from "../components/services/process";
import ServiceHero from "../components/services/serviceHero";
import ServiceTrust from "../components/services/serviceTrust";
import Service from "../components/services/service";
import StatsSection from "../components/common/StatsSection";
import Certifications from "../components/common/Certifications";


export default function Services() {
  return (
    <>
      <ServiceHero />
      <ServiceTrust />
      <StatsSection />
      <Service />
      <Process />
      <Commitment />
      <Certifications />



    </>
  );
}