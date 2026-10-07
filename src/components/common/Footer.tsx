import { useState } from 'react';
import { Link } from 'react-router-dom';
import {  ArrowRight } from 'lucide-react';
import logo from '../../assets/logo/logo.png';
import { subscribeApi } from "../../features/subscribe/api.subscribe"

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubscribe = async () => {
    setError('');
    setSuccess('');

    if (!email) {
      setError('Email is required');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address');
      return;
    }
    try {
      await subscribeApi.create({ email: email.trim() });
      setSuccess('Thank you for subscribing!');
      setEmail('');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
    }
  };
  return (
    <footer className="bg-white pt-5 sm:pt-8 md:pt-7 lg:pt-10 pb-8 relative overflow-hidden font-sans">
      <div className="px-4 sm:px-8 md:px-[50px] relative z-50">
        <div className="grid grid-cols-2 lg:grid-cols-[minmax(260px,1.35fr)_minmax(140px,0.85fr)_minmax(140px,0.85fr)_minmax(230px,1fr)] gap-x-5 gap-y-10 sm:gap-x-8 md:gap-x-12 md:gap-y-12 lg:gap-x-8 mb-12 md:mb-16 lg:mb-20">
          {/* Column 1: Brand & Newsletter */}
          <div className="col-span-2 lg:col-span-1 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 min-w-0">
            <div className="flex flex-row items-center gap-2">
             
              <img src={logo} alt="Estate Hub Logo" className="h-11 sm:h-12 md:h-14 w-auto self-start" /> Estate Hub
            </div>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal pr-0 lg:pr-4 mb-3 md:mb-4">
              Subscribe To Our Newsletter To Stay Updated on Our Work!
            </p>
            <div className="space-y-2 relative z-[100]">
              <div className="flex flex-row items-center gap-2 sm:gap-3 max-w-[425px]">
                <div className="w-full sm:flex-1 min-w-0">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourexample@gmail.com"
                    className={`w-full border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-600 focus:outline-none placeholder:text-gray-400 ${error ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  className="bg-[#002244] text-white py-2.5 sm:py-3 px-4 sm:px-5 rounded-lg hover:bg-[#001529] transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center sm:w-auto"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              {error && <p className="text-red-500 text-xs font-medium pl-1">{error}</p>}
              {success && <p className="text-green-600 text-xs font-medium pl-1">{success}</p>}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="col-span-1 min-w-0 lg:pl-15">
            <h4 className="text-[#333] text-base sm:text-lg md:text-xl font-semibold mb-3 md:mb-4">Services</h4>
            <ul className="space-y-1.5 md:space-y-2 text-[12px] sm:text-[14px] md:text-[15px] leading-relaxed md:leading-[2.1] font-medium">
              <li><Link to="/services/residential-development" className="hover:text-[#b89b5e] transition-colors">Residential</Link></li>
              <li><Link to="/services/commercial-retail" className="hover:text-[#b89b5e] transition-colors">Commercial</Link></li>
              <li><Link to="/services/institutional-property" className="hover:text-[#b89b5e] transition-colors">Institutional</Link></li>
              <li><Link to="/services/ai-smart-solution" className="hover:text-[#b89b5e] transition-colors">AI & Smart Solution</Link></li>
              <li><Link to="/services/end-to-end-development" className="hover:text-[#b89b5e] transition-colors">End to End Solutions</Link></li>
              <li><Link to="/services/land-development" className="hover:text-[#b89b5e] transition-colors">Land Development</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="col-span-1 min-w-0 ">
            <h4 className="text-[#333] text-base sm:text-lg md:text-xl font-semibold mb-3 md:mb-4 flex justify-end">Quick Links</h4>
            <div className="flex justify-end">
            <ul className="space-y-1.5 md:space-y-2 text-[12px] sm:text-[14px] md:text-[15px] leading-relaxed md:leading-[2.1] font-medium">
              <li><Link to="/" className="hover:text-[#b89b5e] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#b89b5e] transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-[#b89b5e] transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-[#b89b5e] transition-colors">Careers</Link></li>
              <li><Link to="/case-study" className="hover:text-[#b89b5e] transition-colors">Case Study</Link></li>
            </ul>
            </div>
          </div>
         
        </div>

        {/* Watermark Background Text */}
        <div
          className="absolute bottom-[-13px] left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.05] whitespace-nowrap z-0"
          style={{
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 70%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 70%)'
          }}
        >
          <span className="text-[9vw] sm:text-[9.5vw] md:text-[10vw] lg:text-[10.5vw] xl:text-[10.5rem] font-[600] tracking-tighter text-gray-900">Estate Hub</span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 mt-12 md:mt-16 lg:mt-24 border-t border-gray-100 flex flex-col items-center justify-center text-gray-500 gap-3 md:gap-4 relative z-20 text-center">
          <p className="text-xs sm:text-sm">
            © 2025 Estate Hub. All Rights Reserved. <span className="hidden sm:inline">|</span> <br className="sm:hidden" /> Powered by <span className="font-semibold text-gray-700">Delogy</span>
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <Link to="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
            <span className="text-gray-400">·</span>
            <Link to="/terms-conditions" className="hover:text-gray-900">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
