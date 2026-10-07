import React from 'react';
import PortfolioHero from '../components/portfolio-page/portfolioHero';
import PortfolioStats from '../components/portfolio-page/portfolioStats';
import Feature from '../components/portfolio-page/feature';
import Explore from "../components/portfolio-page/explore"
import Approach from "../components/portfolio-page/approach"
import OngoingDevelopments from '../components/portfolio-page/developement';
const Portfolio: React.FC = () => {
  return (
    <div className='bg-white font-sans'>
      {/* 1. Hero Section */}
      <PortfolioHero />
      <PortfolioStats />
      <Feature />
      <Explore />
      <Approach />
      <OngoingDevelopments/>


    </div>
  );
};

export default Portfolio;
