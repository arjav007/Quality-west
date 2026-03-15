import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { ChevronRight, ChevronLeft, AlertTriangle, CheckCircle } from 'lucide-react';
import Slider from 'react-slick';
import { Header } from '@/app/components/Header';
import { ProductModal } from '@/app/components/ProductModal';
import { Footer } from '@/app/components/Footer';
import { crops } from '@/app/data/cropData';
import { products } from '@/app/data/productData';

// Crop detail page with problem-solution layout
export default function CropDetailPage() {
  const { cropId } = useParams();
  const crop = crops.find(c => c.id === cropId);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!crop) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-[#6B6B6B]">Crop not found</p>
      </div>
    );
  }

  const openProductModal = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    }
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const handleEnquireProduct = (productId: string) => {
    closeProductModal();
    // Navigate to home page with form pre-selected
    window.location.href = `/#contact-form`;
  };

  // Custom arrow components for product carousel
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-[#1F7A4A] rounded-full p-2 shadow-lg transition-all -ml-3"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-[#1F7A4A] rounded-full p-2 shadow-lg transition-all -mr-3"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    );
  };

  // Slider settings for product carousel
  const getSliderSettings = (productCount: number) => ({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(3, productCount),
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: Math.min(2, productCount),
          slidesToScroll: 1,
        }
      }
    ]
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1F7A4A] via-[#1a6b40] to-[#8B6F47] text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
              {crop.name}
            </h1>
            <p className="text-xl text-white/90">
              Common problems and our recommended organic solutions
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F8F9F6] py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <Link to="/" className="hover:text-[#1F7A4A] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/crop-solution" className="hover:text-[#1F7A4A] transition-colors">Crop Solution</Link>
            <span>/</span>
            <span className="text-[#1F7A4A] font-medium">{crop.name}</span>
          </div>
        </div>
      </div>

      {/* Problems & Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Single Card with Header */}
            <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden">
              {/* Card Header */}
              <div className="grid lg:grid-cols-2 gap-0 border-b-2 border-gray-200 bg-[#F8F9F6]">
                {/* Left Header */}
                <div className="p-6 lg:border-r-2 border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#DC6B19] rounded-full p-2">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    <h3 
                      className="text-xl font-bold text-[#DC6B19]"
                      style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                    >
                      The Problem
                    </h3>
                  </div>
                </div>
                
                {/* Right Header */}
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#1F7A4A] rounded-full p-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 
                      className="text-xl font-bold text-[#1F7A4A]"
                      style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                    >
                      Our Organic Solutions
                    </h3>
                  </div>
                </div>
              </div>

              {/* Problem Rows */}
              {crop.problems.map((problem, index) => (
                <div key={problem.id}>
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Left: Problem Info */}
                    <div className="p-6 md:p-8 flex flex-col lg:border-r-2 border-gray-200 bg-[#f8f9f6]">
                      <h4 
                        className="font-semibold text-[#1F7A4A] mb-3"
                        style={{ 
                          fontSize: '20px',
                          fontFamily: 'Fraunces, serif', 
                          fontVariationSettings: "'SOFT' 0, 'WONK' 1" 
                        }}
                      >
                        {problem.name}
                      </h4>
                      <p 
                        className="text-[#6B6B6B] leading-relaxed mb-6"
                        style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
                      >
                        {problem.description}
                      </p>
                      <div className="rounded-xl overflow-hidden">
                        <img
                          src={problem.image}
                          alt={problem.name}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </div>

                    {/* Right: Product Solutions - Table Style */}
                    <div className="p-6 md:p-8 flex flex-col">
                      {/* Product Rows */}
                      <div className="space-y-4">
                        {problem.recommendedProducts.map((productId) => {
                          const product = products.find(p => p.id === productId);
                          if (!product) return null;
                          
                          // Determine badge color based on category
                          const getBadgeColor = (category: string) => {
                            switch (category) {
                              case 'Biological Insecticide':
                                return 'bg-[#FF6B6B]/20 text-[#D63031]';
                              case 'Biological Nematicide':
                                return 'bg-[#A29BFE]/20 text-[#6C5CE7]';
                              case 'Biological Fungicide':
                                return 'bg-[#FD79A8]/20 text-[#E84393]';
                              case 'Organic Fertilizer':
                                return 'bg-[#4CAF50]/20 text-[#1F7A4A]';
                              case 'Biostimulant':
                                return 'bg-[#FDCB6E]/20 text-[#E17055]';
                              case 'Biofertilizer':
                                return 'bg-[#55EFC4]/20 text-[#00B894]';
                              default:
                                return 'bg-gray-100 text-gray-700';
                            }
                          };

                          return (
                            <button
                              key={productId}
                              onClick={() => openProductModal(productId)}
                              className="w-full group"
                            >
                              <div className="flex items-center justify-between gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#1F7A4A] transition-all">
                                {/* Product Name and Badge */}
                                <div className="flex items-center gap-3 flex-1">
                                  <h5 
                                    className="font-semibold text-[#1F7A4A] text-left"
                                    style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                                  >
                                    {product.name}
                                  </h5>
                                  <span 
                                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getBadgeColor(product.category)}`}
                                    style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 14" }}
                                  >
                                    {product.category}
                                  </span>
                                </div>
                                
                                {/* Arrow Icon */}
                                <div className="flex-shrink-0">
                                  <ChevronRight className="w-5 h-5 text-[#1F7A4A] group-hover:translate-x-1 transition-transform" />
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  
                  {/* Separator line between problems (not after last one) */}
                  {index < crop.problems.length - 1 && (
                    <div className="border-t-2 border-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductModal}
        onEnquire={handleEnquireProduct}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}