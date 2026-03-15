import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#why-choose', label: 'Why Choose Us', type: 'hash' },
    { href: '/#products', label: 'Products', type: 'hash' },
    { href: '/#testimonials', label: 'Testimonials', type: 'hash' },
    { href: '/#about', label: 'About', type: 'hash' },
    { href: '/crop-solution', label: 'Crop Solution', type: 'route' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Handle both '#section' and '/#section' formats
    const isHashLink = href.startsWith('#') || href.startsWith('/#');
    
    if (isHashLink) {
      e.preventDefault();
      
      // If not on home page, navigate to home page with hash
      if (!isHomePage) {
        const hash = href.startsWith('/#') ? href : `/${href}`;
        window.location.href = hash;
        return;
      }
      
      // Extract the element ID (remove '#' or '/#')
      const elementId = href.replace(/^\/?#/, '');
      const element = document.querySelector(`#${elementId}`);
      
      if (element) {
        const offset = 80; // Account for sticky header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-4 xl:px-6">
        <div className="flex items-center justify-between h-20 gap-2">
          {/* Logo/Brand */}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            className="flex items-center flex-shrink-0 hover:opacity-90 transition-opacity"
          >
            <img 
              src="/assets/QualityWest 01.svg" 
              alt="Quality West Logo" 
              className="h-8 sm:h-9 w-auto" 
            />
          </Link>

          {/* Desktop Navigation - Responsive Gaps and Text */}
          <nav className="hidden lg:flex items-center lg:gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[#6B6B6B] hover:text-[#1F7A4A] font-medium transition-colors whitespace-nowrap lg:text-sm xl:text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons - Responsive Padding and Labels */}
          <div className="hidden lg:flex items-center lg:gap-3 xl:gap-4 flex-shrink-0">
            <a
              href="tel:+61405052588"
              className="bg-white border border-[#1F7A4A] text-[#1F7A4A] hover:bg-gray-50 transition-colors inline-flex items-center gap-2 lg:px-4 xl:px-6 lg:py-2.5 xl:py-3 rounded-[10px] font-medium whitespace-nowrap lg:text-sm xl:text-base"
            >
              <Phone className="w-4 h-4 xl:w-[18px] xl:h-[18px]" />
              <span className="hidden xl:inline">Call Us</span>
              <span className="xl:hidden">Call</span>
            </a>
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="bg-[#1F7A4A] hover:bg-[#165a36] text-white lg:px-4 xl:px-6 lg:py-2.5 xl:py-3 rounded-[10px] font-medium transition-colors whitespace-nowrap lg:text-sm xl:text-base"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#1F7A4A] p-2 flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 md:px-8 lg:px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[#6B6B6B] hover:text-[#1F7A4A] font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-gray-200 pt-3 mt-2 space-y-3">
              <a
                href="tel:+61405052588"
                className="bg-white border border-[#1F7A4A] text-[#1F7A4A] hover:bg-gray-50 transition-all inline-flex items-center gap-2 px-6 py-3 rounded-[10px] font-medium w-full sm:w-auto justify-center"
              >
                <Phone size={18} />
                <span 
                  className="font-medium text-base"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 14" }}
                >
                  Call Us
                </span>
              </a>
              <a
                href="https://wa.me/61405052588"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0DC853] hover:bg-[#0bb847] text-white px-6 py-3 rounded-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <div className="relative shrink-0 w-[18px] h-[18px]">
                  <div 
                    className="absolute inset-0 bg-white" 
                    style={{ 
                      maskImage: `url('/assets/d006c6a64198400f28f7f57d831274dc9fa439b3.png')`,
                      maskSize: '18px 18px',
                      maskPosition: 'center',
                      maskRepeat: 'no-repeat',
                      WebkitMaskImage: `url('/assets/d006c6a64198400f28f7f57d831274dc9fa439b3.png')`,
                      WebkitMaskSize: '18px 18px',
                      WebkitMaskPosition: 'center',
                      WebkitMaskRepeat: 'no-repeat'
                    }} 
                  />
                </div>
                <span 
                  className="font-medium text-base"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 14" }}
                >
                  WhatsApp
                </span>
              </a>
              
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, '#home')}
                className="bg-[#1F7A4A] hover:bg-[#165a36] text-white px-5 py-3 rounded-[10px] font-medium transition-colors text-center block"
              >
                Enquire Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}