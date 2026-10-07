import Growth from "../components/investor-page/growth";
import WhyInvest from "../components/investor-page/whyInvest";
import BuildFoundation from "../components/investor-page/buildFoundation";
import ROI from "../components/investor-page/roi";
import Invertorform from "../components/forms/investorForm";
import InvestHero from "../components/investor-page/investHero";
import HowItWorks from "../components/investor-page/howItWork";

export default function Investors() {
  return (
    <div>
      <InvestHero />
      <BuildFoundation />
      <WhyInvest />
      <ROI />
      <Growth />
      <HowItWorks />
      <Invertorform />
    </div>
  );
}