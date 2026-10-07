import WhyChoose from "../components/collab-page/whyChoose";
import Eligible from "../components/collab-page/eligible";
import CollabHero from "../components/collab-page/collabHero";
import CollabForm from "../components/forms/collabForm";
import Timeline from "../components/collab-page/timeLine";
import LandCollaboration from "../components/collab-page/landCollaboration";
import CardSection from "../components/collab-page/cardSection";




export default function Collab() {
  return (
    <div>

      <CollabHero />
      <CardSection />
      <Timeline />
      <LandCollaboration />
      <WhyChoose />
      <Eligible />
      <CollabForm />

    </div>
  );
}