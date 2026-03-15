import { Link } from 'react-router';
import { ChevronRight, Phone, MessageCircle } from 'lucide-react';
import svgPaths from '@/imports/svg-jcquk1tgey';

export function Footer() {
  const handleSubmitEnquiry = () => {
    window.location.href = '/#home';
  };

  const handleCallUs = () => {
    window.location.href = 'tel:+61405052588'; // Replace with actual phone number
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/+61405052588', '_blank'); // Replace with actual WhatsApp number
  };

  return (
    <div className="w-full">
      {/* CTA Section */}
      <section 
        className="relative w-full"
        style={{
          background: 'linear-gradient(180deg, #1F7A4A 0%, #165A36 100%)'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-10 sm:py-12 lg:py-16">
          <div className="flex flex-col items-center gap-8 sm:gap-12">
            {/* Heading and Text */}
            <div className="flex flex-col gap-4 items-center text-center max-w-4xl">
              <h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight px-4"
                style={{ 
                  fontFamily: 'Fraunces, serif', 
                  fontVariationSettings: "'SOFT' 0, 'WONK' 1" 
                }}
              >
                Ready to Improve Your Farm's Productivity?
              </h2>
              <p 
                className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed px-4"
                style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
              >
                Get in touch with us today to learn more about our organic fertilizer solutions
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {/* Submit Enquiry Button */}
              <button
                onClick={handleSubmitEnquiry}
                className="bg-white hover:bg-gray-50 text-[#1F7A4A] px-6 py-3 rounded-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span 
                  className="font-medium text-base"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 14" }}
                >
                  Submit Enquiry
                </span>
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Call Us Button */}
              <button
                onClick={handleCallUs}
                className="bg-white/20 hover:bg-white/30 border border-white/40 text-white px-6 py-3 rounded-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
                  <path 
                    d={svgPaths.p27558400} 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5" 
                  />
                </svg>
                <span 
                  className="font-medium text-base"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 14" }}
                >
                  Call Us
                </span>
              </button>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsApp}
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
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="bg-[#1F7A4A] w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-28 py-4">
          <p 
            className="text-sm text-white/70 text-center leading-5"
            style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
          >
            © 2026 Quality West Company Pty. Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}