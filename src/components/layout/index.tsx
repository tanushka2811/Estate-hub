import type { FC, ReactNode } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import CTE from '../common/CTE';
import FAQ from '../common/FAQ';
import Testimonials from '../common/Testimonials';
import ChatBot from '../../pages/chatBot';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[108px] md:pt-[80px]">
        {children}
      </main>
      <Testimonials />
      <FAQ />
      <CTE />
      <Footer />
      <ChatBot/>
    </div>
  );
};

export default Layout;
