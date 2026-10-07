import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full fixed top-0 z-[999] shadow-sm font-sans">
     

      {/* Main Navbar */}
      <nav className="bg-white border-b-2 border-[#C29B40] py-4 px-4 md:px-[50px] flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img src={logo} alt="Estate Hub Logo" className="h-10 md:h-12 w-auto" />Estate Hub
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex items-center gap-8 text-[#333] font-medium text-sm uppercase tracking-wide">
          <li><Link to="/about" className="hover:text-[#C29B40] transition-colors">About us</Link></li>
          <li><Link to="/services" className="hover:text-[#C29B40] transition-colors">Services</Link></li>
          <li><Link to="/portfolio" className="hover:text-[#C29B40] transition-colors">Portfolio</Link></li>
          <li><Link to="/ai-technology" className="hover:text-[#C29B40] transition-colors">AI Technology</Link></li>
          <li><Link to="/investors" className="hover:text-[#C29B40] transition-colors">Investors</Link></li>
          <li><Link to="/collab" className="hover:text-[#C29B40] transition-colors">Collab</Link></li>
        </ul>

        {/* Action Button (Desktop) & Hamburger Icon (Mobile) */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Link to="/contact">
              <button className="border-2 border-[#C29B40] text-[#002349] px-6 py-2 rounded-lg font-semibold hover:bg-[#C29B40] hover:text-white transition-all duration-300">
                Contact us
              </button>
            </Link>
          </div>

          {/* Hamburger Toggle */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden text-[#002349] p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          className={`fixed inset-x-0 top-[108px] md:top-[116px] bottom-0 bg-white z-40 lg:hidden flex flex-col justify-between py-8 px-6 border-t border-gray-100 shadow-xl transition-all duration-300 overflow-y-auto ${
            isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col gap-6 text-[#333] font-semibold text-lg uppercase tracking-wide">
            <li>
              <Link to="/about" className="hover:text-[#C29B40] transition-colors block py-2" onClick={closeMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#C29B40] transition-colors block py-2" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-[#C29B40] transition-colors block py-2" onClick={closeMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/ai-technology" className="hover:text-[#C29B40] transition-colors block py-2" onClick={closeMenu}>
                AI Technology
              </Link>
            </li>
            <li>
              <Link to="/investors" className="hover:text-[#C29B40] transition-colors block py-2" onClick={closeMenu}>
                Investors
              </Link>
            </li>
            <li>
              <Link to="/collab" className="hover:text-[#C29B40] transition-colors block py-2" onClick={closeMenu}>
                Collab
              </Link>
            </li>
          </ul>

          <div className="w-full pt-4 border-t border-gray-100 flex flex-col gap-4">
            <div className="text-gray-500 text-sm text-center">
              Call Us: <span className="text-[#002349] font-bold">9217548695</span>
            </div>
            <Link to="/contact" className="w-full sm:hidden" onClick={closeMenu}>
              <button className="w-full border-2 border-[#C29B40] text-[#002349] py-3 rounded-xl font-bold hover:bg-[#C29B40] hover:text-white transition-all duration-300">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
