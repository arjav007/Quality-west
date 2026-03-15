import { useState } from 'react';
import { Check, ChevronRight, ChevronLeft, Leaf, TrendingUp, Shield, Handshake, Building2, Layers, Droplets, Sprout, Sun, Phone, MessageCircle, Heart } from 'lucide-react';
import Slider from 'react-slick';
import { products, categories } from '../data/productData';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { LeadForm } from '../components/LeadForm';
import { ProductModal } from '../components/ProductModal';
import { Footer } from '../components/Footer';
import imgWhatsAppIcon from 'figma:asset/d006c6a64198400f28f7f57d831274dc9fa439b3.png';

// Category color mapping
const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Biological Insecticide':
      return 'bg-[#FF6B6B]/20 text-[#D63031]'; // Red tones
    case 'Biological Nematicide':
      return 'bg-[#A29BFE]/20 text-[#6C5CE7]'; // Purple tones
    case 'Biological Fungicide':
      return 'bg-[#FD79A8]/20 text-[#E84393]'; // Pink tones
    case 'Organic Fertilizer':
      return 'bg-[#4CAF50]/20 text-[#1F7A4A]'; // Green tones
    case 'Biostimulant':
      return 'bg-[#FDCB6E]/20 text-[#E17055]'; // Orange tones
    case 'Biofertilizer':
      return 'bg-[#55EFC4]/20 text-[#00B894]'; // Teal tones
    default:
      return 'bg-[#F8F9F6] text-[#1F7A4A]'; // Default green
  }
};

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [preSelectedProducts, setPreSelectedProducts] = useState<string[]>([]);

  const openProductModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const handleEnquireProduct = (productId: string) => {
    // Close modal
    closeProductModal();
    
    // Set pre-selected product
    setPreSelectedProducts([productId]);
    
    // Scroll to form
    setTimeout(() => {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Custom arrow components for slider
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-[#1F7A4A] rounded-full p-3 shadow-lg transition-all hidden lg:flex items-center justify-center"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-[#1F7A4A] rounded-full p-3 shadow-lg transition-all hidden lg:flex items-center justify-center"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    );
  };

  // Slider settings for product carousel
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-[#00401E] via-[#1a6b40] to-[#532A00] text-white pt-20">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1755931359594-852c73c6609c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXN0cmFsaWFuJTIwZmFybSUyMGNyb3BzJTIwZmllbGR8ZW58MXx8fHwxNzY4NjQxMjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Australian farm"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-6 py-12 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Hero Content */}
            <div className="flex flex-col gap-6 lg:gap-12">
              <div className="space-y-4 lg:space-y-6">
                <h1 
                  className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#F8F9F6]"
                  style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Organic Fertilizer Solutions for Healthier Crops & Better Yield
                </h1>
                <p 
                  className="text-base sm:text-lg lg:text-xl text-white/90"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 14" }}
                >
                  Premium organic fertilizers and agricultural inputs imported from India — helping Australian farmers improve soil health, crop quality, and sustainable productivity.
                </p>
              </div>

              {/* Benefit Points */}
              <div className="flex flex-col gap-5 lg:gap-8">
                <div className="flex items-start gap-3">
                  <div className="bg-[rgba(255,255,255,0.2)] p-2.5 lg:p-3 rounded-[14px] flex-shrink-0">
                    <Leaf className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <h3 
                      className="font-semibold mb-1 text-base lg:text-lg text-white"
                      style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                    >
                      100% Organic & Sustainable
                    </h3>
                    <p 
                      className="text-white/80 text-sm"
                      style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
                    >
                      Certified organic products that protect your soil and environment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[rgba(255,255,255,0.2)] p-2.5 lg:p-3 rounded-[14px] flex-shrink-0">
                    <TrendingUp className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <h3 
                      className="font-semibold mb-1 text-base lg:text-lg text-white"
                      style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                    >
                      Proven Results
                    </h3>
                    <p 
                      className="text-white/80 text-sm"
                      style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
                    >
                      Trusted by farmers across Australia for better yields and quality
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[rgba(255,255,255,0.2)] p-2.5 lg:p-3 rounded-[14px] flex-shrink-0">
                    <Shield className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <h3 
                      className="font-semibold mb-1 text-base lg:text-lg text-white"
                      style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                    >
                      Quality Guaranteed
                    </h3>
                    <p 
                      className="text-white/80 text-sm"
                      style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
                    >
                      Premium imports from India with consistent quality standards
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-0">
                <a
                  href="tel:+61400000000"
                  className="bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.4)] text-white px-6 py-3 rounded-[10px] font-medium transition-colors inline-flex items-center gap-2"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 14" }}
                >
                  <Phone size={18} />
                  <span className="hidden sm:inline">Call Us</span>
                  <span className="sm:hidden">Call</span>
                </a>
                <a
                  href="https://wa.me/61400000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0DC853] hover:bg-[#0bb847] text-white px-6 py-3 rounded-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 14" }}
                >
                  <div className="relative shrink-0 w-[18px] h-[18px]">
                    <div 
                      className="absolute inset-0 bg-white" 
                      style={{ 
                        maskImage: `url(${imgWhatsAppIcon})`,
                        maskSize: '18px 18px',
                        maskPosition: 'center',
                        maskRepeat: 'no-repeat',
                        WebkitMaskImage: `url(${imgWhatsAppIcon})`,
                        WebkitMaskSize: '18px 18px',
                        WebkitMaskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat'
                      }} 
                    />
                  </div>
                  <span className="font-medium text-base">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column - Lead Form */}
            <div id="contact-form">
              <LeadForm 
                products={products.map(p => ({ id: p.id, name: p.name }))} 
                preSelectedProducts={preSelectedProducts} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Quality West */}
      <section id="why-choose" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-6">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl sm:text-4xl font-semibold text-[#7a4d1f] mb-4"
              style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Why Choose Quality West
            </h2>
            <p 
              className="text-lg text-[#6B6B6B] max-w-2xl mx-auto"
              style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
            >
              We're committed to providing Australian farmers with the finest organic agricultural solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#F8F9F6] p-6 rounded-xl border border-gray-200 transition-all"
            >
              <div className="bg-[#1F7A4A] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F7A4A] mb-2">
                Largest Bio-Dynamic Product Range
              </h3>
              <p className="text-[#6B6B6B]">
                Offering one of the most comprehensive bio-dynamic fertilizer portfolios to support diverse crops and soil needs.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#F8F9F6] p-6 rounded-xl border border-gray-200 transition-all"
            >
              <div className="bg-[#1F7A4A] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F7A4A] mb-2">
                Strong Product Stewardship
              </h3>
              <p className="text-[#6B6B6B]">
                We follow responsible sourcing, handling and guidance to ensure safe and effective use on every farm.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#F8F9F6] p-6 rounded-xl border border-gray-200 transition-all"
            >
              <div className="bg-[#1F7A4A] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F7A4A] mb-2">
                Supporting Farmer Co-Prosperity
              </h3>
              <p className="text-[#6B6B6B]">
                Committed to sustainable growth by improving farmer livelihoods and promoting long-term agricultural success.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#F8F9F6] p-6 rounded-xl border border-gray-200 transition-all"
            >
              <div className="bg-[#1F7A4A] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F7A4A] mb-2">
                Safe & Sustainable Infrastructure
              </h3>
              <p className="text-[#6B6B6B]">
                Built on practices that prioritise safety, environmental care and reliable supply for farmers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section id="products" className="py-16 sm:py-20 bg-[#F8F9F6]">
        <div className="container mx-auto px-4 md:px-8 lg:px-6">
          <div className="text-center mb-8">
            <h2 
              className="text-3xl sm:text-4xl font-semibold text-[#7a4d1f] mb-4"
              style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Our Product Range
            </h2>
            <p 
              className="text-lg text-[#6B6B6B] max-w-2xl mx-auto"
              style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
            >
              Carefully selected organic products to meet all your farming needs
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex gap-3 justify-start lg:justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category
                    ? 'bg-[#1F7A4A] text-white'
                    : 'bg-white text-[#6B6B6B] border border-[#d1d5dc]'
                }`}
                style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 14" }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Carousel - Desktop */}
          <div className="hidden md:block relative">
            <Slider {...sliderSettings} arrows={false} dots={true}>
              {filteredProducts.map((product) => (
                <div key={product.id} className="px-3">
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-200 transition-all h-full">
                    {/* Product Image */}
                    <div className="h-64 overflow-hidden bg-gray-100">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(product.category)}`}>
                          {product.category}
                        </span>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-[#1F7A4A] mb-2">{product.name}</h3>
                        <p className="text-[#6B6B6B]">{product.tagline}</p>
                      </div>

                      {/* Key Features */}
                      <div className="mb-5 space-y-2">
                        {product.keyFeatures.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
                            <span className="text-[#6B6B6B]">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => openProductModal(product)}
                        className="w-full bg-[#1F7A4A] hover:bg-[#165a36] text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        View Full Details
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Product Grid - Mobile */}
          <div className="md:hidden grid grid-cols-1 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
                {/* Product Image */}
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(product.category)}`}>
                      {product.category}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-[#1F7A4A] mb-2">{product.name}</h3>
                    <p className="text-[#6B6B6B]">{product.tagline}</p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-5 space-y-2">
                    {product.keyFeatures.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-[#4CAF50] flex-shrink-0" />
                        <span className="text-[#6B6B6B]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => openProductModal(product)}
                    className="w-full bg-[#1F7A4A] hover:bg-[#165a36] text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    View Full Details
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact hint */}
          <div className="text-center mt-10">
            <p className="text-[#6B6B6B] text-[16px]">
              Need something specific? <a href="#contact-form" className="text-[#1F7A4A] font-medium hover:underline font-bold">Contact us</a> for personalized recommendations
            </p>
          </div>
        </div>
      </section>

      {/* How Our Products Help */}
      <section id="benefits" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-6">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl sm:text-4xl font-semibold text-[#7a4d1f] mb-4"
              style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              How Our Products Help Farmers
            </h2>
            <p 
              className="text-lg text-[#6B6B6B] max-w-2xl mx-auto"
              style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
            >
              Real benefits that make a difference to your farm's success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Healthier Soil */}
            <div className="text-center space-y-4">
              <div className="bg-[#F8F9F6] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Droplets className="w-10 h-10 text-[#1F7A4A]" />
              </div>
              <h3 
                className="text-xl font-semibold text-[#1F7A4A]"
                style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Healthier Soil
              </h3>
              <p 
                className="text-[#6B6B6B] max-w-[322px] mx-auto"
                style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
              >
                Improves soil structure and enhances water retention for long-term fertility
              </p>
            </div>

            {/* Stronger Crops */}
            <div className="text-center space-y-4">
              <div className="bg-[#F8F9F6] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Sprout className="w-10 h-10 text-[#1F7A4A]" />
              </div>
              <h3 
                className="text-xl font-semibold text-[#1F7A4A]"
                style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Stronger Crops
              </h3>
              <p 
                className="text-[#6B6B6B] max-w-[322px] mx-auto"
                style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
              >
                Promotes vigorous growth, better root systems, and increased resistance to pests and diseases
              </p>
            </div>

            {/* Better Yield & Quality */}
            <div className="text-center space-y-4">
              <div className="bg-[#F8F9F6] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-10 h-10 text-[#1F7A4A]" />
              </div>
              <h3 
                className="text-xl font-semibold text-[#1F7A4A]"
                style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Better Yield & Quality
              </h3>
              <p 
                className="text-[#6B6B6B] max-w-[322px] mx-auto"
                style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
              >
                Increases crop yields while improving taste, color, shelf life, and overall market value
              </p>
            </div>

            {/* Sustainable Farming */}
            <div className="text-center space-y-4">
              <div className="bg-[#F8F9F6] w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Sun className="w-10 h-10 text-[#1F7A4A]" />
              </div>
              <h3 
                className="text-xl font-semibold text-[#1F7A4A]"
                style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Sustainable Farming
              </h3>
              <p 
                className="text-[#6B6B6B] max-w-[322px] mx-auto"
                style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
              >
                Reduces chemical dependence, protects the environment, and supports organic certification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 sm:py-20 bg-[#F8F9F6]">
        <div className="container mx-auto px-4 md:px-8 lg:px-6">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl sm:text-4xl font-semibold text-[#7a4d1f] mb-4"
              style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              What Farmers Say
            </h2>
            <p 
              className="text-lg text-[#6B6B6B] max-w-2xl mx-auto"
              style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
            >
              Trusted by Australian farmers across the country
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#E6B65C] text-xl">★</span>
                ))}
              </div>
              <p className="text-[#6B6B6B] mb-4 italic">
                "Since using Tag K20 on our vineyard, we've seen a remarkable improvement in grape quality. The fruit is sweeter and the vines are healthier. Highly recommend!"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-[#1F7A4A]">Michael Thompson</p>
                <p className="text-sm text-[#6B6B6B]">Vineyard Owner, Barossa Valley, SA</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#E6B65C] text-xl">★</span>
                ))}
              </div>
              <p className="text-[#6B6B6B] mb-4 italic">
                "Tag Poly has been a game-changer for our organic certification journey. The soil health has improved dramatically and our yields are up by 15%. Great product!"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-[#1F7A4A]">Sarah Chen</p>
                <p className="text-sm text-[#6B6B6B]">Organic Vegetable Farm, VIC</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#E6B65C] text-xl">★</span>
                ))}
              </div>
              <p className="text-[#6B6B6B] mb-4 italic">
                "Quality West has been fantastic to deal with. Their products work as promised and their support team is always ready to help. Very happy with the results."
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-[#1F7A4A]">David Williams</p>
                <p className="text-sm text-[#6B6B6B]">Wheat & Grain Farmer, NSW</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Quality West */}
      <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#F8F9F6]">
        <div className="container mx-auto px-4 md:px-8 lg:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 
              className="text-3xl sm:text-4xl font-semibold text-[#7a4d1f] mb-4"
              style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              About Quality West Company
            </h2>
            <p 
              className="text-lg text-[#6B6B6B] max-w-2xl mx-auto"
              style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
            >
              Australia's trusted partner in organic agriculture
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left: Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#1F7A4A] mb-4">
                  Premium Organic Solutions from India
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed mb-4">
                  <span className="font-semibold text-[#1F7A4A]">Quality West Company Pty. Ltd.</span> specializes in importing premium organic fertilizers and agricultural solutions from India — a global leader in sustainable farming practices.
                </p>
                <p className="text-[#6B6B6B] leading-relaxed">
                  Our mission is to empower Australian farmers with effective, eco-friendly products that improve soil health, boost crop quality, and support long-term sustainability.
                </p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 py-6 px-6 bg-white rounded-xl border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1F7A4A] mb-1">100%</div>
                  <div className="text-sm text-[#6B6B6B]">Organic</div>
                </div>
                <div className="text-center border-x border-gray-200">
                  <div className="text-3xl font-bold text-[#1F7A4A] mb-1">15+</div>
                  <div className="text-sm text-[#6B6B6B]">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1F7A4A] mb-1">1000+</div>
                  <div className="text-sm text-[#6B6B6B]">Happy Farmers</div>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-[#1F7A4A]/5 border-l-4 border-[#1F7A4A] p-6 rounded-r-xl">
                <p className="text-[#1F7A4A] italic font-medium">
                  "We don't just import products—we build partnerships with farmers committed to sustainable, profitable agriculture."
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1601408648796-349272138e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhvbGRpbmclMjBzb2lsJTIwcGxhbnRzfGVufDF8fHx8MTc2ODk5ODE4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Nurturing healthy soil"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C17855] rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>

          {/* Core Values - Clean 3 Column */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1F7A4A] to-[#4CAF50] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-[#1F7A4A] mb-2">Quality First</h4>
              <p className="text-sm text-[#6B6B6B]">Rigorous testing ensures only premium products reach your farm</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1F7A4A] to-[#4CAF50] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-[#1F7A4A] mb-2">Farmer First</h4>
              <p className="text-sm text-[#6B6B6B]">Your success is our priority—we're here to support you</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1F7A4A] to-[#4CAF50] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-[#1F7A4A] mb-2">Sustainable</h4>
              <p className="text-sm text-[#6B6B6B]">Protecting land and environment for future generations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      

      {/* Footer */}
      <Footer />

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductModal}
        onEnquire={handleEnquireProduct}
      />
    </div>
  );
}