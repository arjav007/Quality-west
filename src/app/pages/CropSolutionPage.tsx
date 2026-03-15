import { useState } from 'react';
import { Link } from 'react-router';
import { Phone, ChevronRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { crops } from '../data/cropData';

export default function CropSolutionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="pt-24 pb-12 text-center"
        style={{
          backgroundImage: 'linear-gradient(99.5429deg, rgb(31, 122, 74) 0.70988%, rgb(26, 107, 64) 49.645%, rgb(139, 111, 71) 100%)'
        }}
      >
        <div className="container mx-auto px-4">
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4"
            style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
          >Crop Solution</h1>
          <p 
            className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto px-4"
            style={{ fontFamily: 'DM Sans, sans-serif', fontVariationSettings: "'opsz' 9" }}
          >
            Select your crop to discover tailored solutions for common problems and recommended organic products
          </p>
        </div>
      </section>

      {/* Crop Grid */}
      <section className="pt-12 pb-12 bg-white">
        <div className="container mx-auto px-4 lg:px-28">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-5">
            {crops.map((crop) => (
              <Link
                key={crop.id}
                to={`/crop-solution/${crop.id}`}
                className="group"
              >
                <div className="bg-white border border-[#E5E7EB] rounded-[14px] h-[300px] overflow-hidden">
                  <div className="relative h-[250px]">
                    <img
                      src={crop.image}
                      alt={crop.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center h-[50px]">
                    <p 
                      className="text-[#1F7A4A] text-lg font-semibold text-center"
                      style={{ fontFamily: 'Fraunces, serif', fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                    >
                      {crop.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}