import Advantage from "../components/career-page/advantage"
import CareerHero from "../components/career-page/careerHero"
import CareerOpportunity from "../components/career-page/careerOpportunity"
import { CareerForm } from "../components/forms/careerForm"
import Perks from "../components/career-page/perks"

export default function Career() {
  return (
    <>
      <CareerHero />
      <CareerOpportunity />
      <Advantage />
      <Perks />
      <CareerForm />
   
    </>


  )
};  