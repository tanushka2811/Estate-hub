
import AboutHome from "../components/about-page/aboutHome";
import Success from "../components/about-page/success";
import MileStone from "../components/about-page/milestone";
import WhyChoose from "../components/about-page/whychoose";
import MeetVisionary from "../components/about-page/meetVisionary";
import StatsSection from "../components/common/StatsSection";
import Certifications from "../components/common/Certifications";

function About() {
  return (
    <div>
      <AboutHome />
      <Success />
      <StatsSection />
      <WhyChoose />
      <MileStone />
      <Certifications />
      <MeetVisionary />
    </div>
  );
}

export default About;