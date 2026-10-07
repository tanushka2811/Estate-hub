import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Layout from './components/layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import AITechnology from './pages/AITechnology';
import Investors from './pages/Investors';
import Collab from './pages/Collab';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import CaseStudy from './pages/CaseStudy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ResidentialDevelopment from './pages/services_sub/ResidentialDevelopment';
import InstitutionalProperty from './pages/services_sub/InstitutionalProperty';
import CommercialRetail from './pages/services_sub/CommercialRetail';
import LandDevelopment from './pages/services_sub/LandDevelopment';
import EndToEndDevelopment from './pages/services_sub/EndToEndDevelopment';
import AISmartSolution from './pages/services_sub/AISmartSolution';
import PortfolioDetails from "./pages/portfolioDetail";
import BlogSub from "./pages/blogDetail";
import CaseStudySub from './pages/caseStudyDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetails />} />
          <Route path="/ai-technology" element={<AITechnology />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/collab" element={<Collab />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogSub />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/case-study/:id" element={<CaseStudySub />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/services/residential-development" element={<ResidentialDevelopment />} />
          <Route path="/services/institutional-property" element={<InstitutionalProperty />} />
          <Route path="/services/commercial-retail" element={<CommercialRetail />} />
          <Route path="/services/land-development" element={<LandDevelopment />} />
          <Route path="/services/end-to-end-development" element={<EndToEndDevelopment />} />
          <Route path="/services/ai-smart-solution" element={<AISmartSolution />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
