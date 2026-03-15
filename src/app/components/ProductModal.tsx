import { X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import imgWhatsAppIcon from "../../assets/d006c6a64198400f28f7f57d831274dc9fa439b3.png";
interface Product {
  id: string;
  name: string;
  tagline: string;
  image: string;
  overview: string;
  composition: string[];
  benefits: string[];
  dosage?: string[];
  applicationMethod?: string[];
  precautions?: string[];
  controls?: string;
  recommendedCrops: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire?: (productId: string) => void;
}

export function ProductModal({ product, isOpen, onClose, onEnquire }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-xl border border-gray-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-[#1F7A4A] text-white p-6 rounded-t-xl flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-semibold mb-1">{product.name}</h2>
                  <p className="text-white/90">{product.tagline}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white transition-colors p-1"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Product Image */}
                <div className="rounded-xl overflow-hidden border border-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Overview */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1F7A4A] mb-2">Product Overview</h3>
                  <p className="text-[#6B6B6B]">{product.overview}</p>
                </div>

                {/* Composition - Smart Display */}
                {(() => {
                  const activeIngredient = product.composition.find(item => item.startsWith('Active Ingredient:'));
                  const productForm = product.composition.find(item => item.startsWith('Product Form:'));
                  const productType = product.composition.find(item => item.startsWith('Product Type:'));
                  const regularComposition = product.composition.filter(
                    item => !item.startsWith('Active Ingredient:') && !item.startsWith('Product Form:') && !item.startsWith('Product Type:')
                  );

                  return (
                    <>
                      {activeIngredient && (
                        <div>
                          <h3 className="text-lg font-semibold text-[#1F7A4A] mb-2">Active Ingredient</h3>
                          <p className="text-[#6B6B6B]">{activeIngredient.replace('Active Ingredient: ', '')}</p>
                        </div>
                      )}

                      {productForm && (
                        <div>
                          <h3 className="text-lg font-semibold text-[#1F7A4A] mb-2">Product Form</h3>
                          <p className="text-[#6B6B6B]">{productForm.replace('Product Form: ', '')}</p>
                        </div>
                      )}

                      {productType && (
                        <div>
                          <h3 className="text-lg font-semibold text-[#1F7A4A] mb-2">Product Type</h3>
                          <p className="text-[#6B6B6B]">{productType.replace('Product Type: ', '')}</p>
                        </div>
                      )}

                      {regularComposition.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-[#1F7A4A] mb-2">Composition</h3>
                          <ul className="space-y-1">
                            {regularComposition.map((item, index) => (
                              <li key={index} className="text-[#6B6B6B] flex items-start">
                                <span className="text-[#4CAF50] mr-2">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  );
                })()}

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1F7A4A] mb-2">Key Benefits</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="text-[#6B6B6B] flex items-start">
                        <span className="text-[#4CAF50] mr-2 mt-1">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dosage */}
                {product.dosage && (
                  <div>
                    <h3 className="text-lg font-semibold text-[#1F7A4A] mb-2">Dosage</h3>
                    <ul className="space-y-2">
                      {product.dosage.map((dosage, index) => (
                        <li key={index} className="text-[#6B6B6B] flex items-start">
                          <span className="text-[#4CAF50] mr-2 mt-1">✓</span>
                          {dosage}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Application Method */}
                {product.applicationMethod && (
                  <div>
                    <h3 className="text-lg font-semibold text-[#1F7A4A] mb-2">Application Method</h3>
                    <ul className="space-y-2">
                      {product.applicationMethod.map((method, index) => (
                        <li key={index} className="text-[#6B6B6B] flex items-start">
                          <span className="text-[#4CAF50] mr-2 mt-1">✓</span>
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Precautions */}
                {product.precautions && (
                  <div>
                    <h3 className="text-lg font-semibold text-[#1F7A4A] mb-2">Precautions</h3>
                    <ul className="space-y-2">
                      {product.precautions.map((precaution, index) => (
                        <li key={index} className="text-[#6B6B6B] flex items-start">
                          <span className="text-[#4CAF50] mr-2 mt-1">✓</span>
                          {precaution}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Controls */}
                {product.controls && (
                  <div>
                    <h3 className="text-lg font-semibold text-[#1F7A4A] mb-2">Controls</h3>
                    <p className="text-[#6B6B6B]">{product.controls}</p>
                  </div>
                )}

                {/* Recommended Crops */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1F7A4A] mb-2">Recommended Crops</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.recommendedCrops.map((crop, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#F8F9F6] text-[#1F7A4A] rounded-full text-sm border border-gray-200"
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-center text-[#6B6B6B] mb-4">
                    Interested in {product.name}? Get in touch with us today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => onEnquire && onEnquire(product.id)}
                      className="flex-1 bg-[#1F7A4A] hover:bg-[#165a36] text-white py-3 px-6 rounded-[10px] transition-colors flex items-center justify-center gap-2"
                    >
                      Enquire Now
                    </button>
                    <a
                      href="tel:+61405052588"
                      className="flex-1 bg-white border-2 border-[#1F7A4A] text-[#1F7A4A] hover:bg-[#F8F9F6] py-3 px-6 rounded-[10px] transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone size={18} />
                      Call Us
                    </a>
                    <a
                      href="https://wa.me/61405052588"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#0DC853] hover:bg-[#0bb847] text-white px-6 py-3 rounded-lg transition-all flex items-center gap-2 justify-center"
                    >
                      <div className="relative shrink-0 w-[18px] h-[18px]">
                        <div 
                          className="absolute inset-0 bg-white" 
                          style={{ 
                            maskImage: `url('${imgWhatsAppIcon}')`,
                            maskSize: '18px 18px',
                            maskPosition: 'center',
                            maskRepeat: 'no-repeat',
                            WebkitMaskImage: `url('${imgWhatsAppIcon}')`,
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
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}