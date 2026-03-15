import { useState, useEffect, useRef } from 'react';
import { ChevronDown, X } from 'lucide-react';
import svgPaths from '../../imports/svg-u2o1s3hs8j';

interface Product {
  id: string;
  name: string;
}

interface LeadFormProps {
  variant?: 'hero' | 'section';
  products?: Product[];
  preSelectedProducts?: string[];
}

export function LeadForm({ variant = 'section', products = [], preSelectedProducts = [] }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    farmName: '',
    products: [] as string[],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({
    phone: '',
    email: '',
  });
  const [touched, setTouched] = useState({
    phone: false,
    email: false,
  });
  const productDropdownRef = useRef<HTMLDivElement>(null);

  // Update selected products when preSelectedProducts changes
  useEffect(() => {
    if (preSelectedProducts.length > 0) {
      setFormData(prev => ({
        ...prev,
        products: [...new Set([...prev.products, ...preSelectedProducts])]
      }));
    }
  }, [preSelectedProducts]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productDropdownRef.current && !productDropdownRef.current.contains(event.target as Node)) {
        setIsProductDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Map selected product IDs to their actual names for the email
    const selectedProductNames = formData.products
      .map(id => products.find(p => p.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b2f40345-b8dc-4841-bf56-0c008be83bb4",
          subject: `New Lead from ${formData.name} - Quality West`,
          from_name: "Quality West Website",
          Name: formData.name,
          Phone: formData.phone,
          Email: formData.email,
          "Farm/Organisation": formData.farmName || "Not provided",
          "Interested Products": selectedProductNames || "None selected",
          Message: formData.message || "No additional message",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({
            name: '',
            phone: '',
            email: '',
            farmName: '',
            products: [],
            message: '',
          });
          setSubmitted(false);
        }, 3000);
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Oops! There was a network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProductToggle = (productId: string) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(productId)
        ? prev.products.filter(id => id !== productId)
        : [...prev.products, productId]
    }));
  };

  const validatePhone = (value: string) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (!phoneRegex.test(value)) {
      return 'Please enter a valid phone number.';
    }
    return '';
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true,
    }));
    if (name === 'phone') {
      setErrors(prev => ({
        ...prev,
        phone: validatePhone(value),
      }));
    } else if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: validateEmail(value),
      }));
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
        <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#1F7A4A] mb-2">Thank You!</h3>
        <p className="text-[#6B6B6B]">We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white pt-[32px] px-[32px] pb-[32px] rounded-[14px] flex flex-col gap-[16px]">
      {/* Your Name */}
      <div className="flex flex-col gap-[4px]">
        <label htmlFor="name" className="font-['DM_Sans',sans-serif] font-medium text-[14px] text-[#1f7a4a] leading-[20px]">
          Your Name <span className="text-[#ff383c]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="h-[50px] w-full px-[16px] py-[12px] border border-[#d1d5dc] rounded-[10px] focus:ring-2 focus:ring-[#1F7A4A] focus:border-transparent outline-none transition-all font-['DM_Sans',sans-serif] text-[16px] text-[#1f1f1f] caret-[#1f1f1f]"
          placeholder="John Smith"
        />
      </div>

      {/* Phone and Email Row */}
      <div className="flex gap-[16px] flex-col sm:flex-row">
        {/* Phone Number */}
        <div className="flex flex-col gap-[4px] flex-1">
          <label htmlFor="phone" className="font-['DM_Sans',sans-serif] font-medium text-[14px] text-[#1f7a4a] leading-[20px]">
            Phone Number <span className="text-[#ff383c]">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`h-[50px] w-full px-[16px] py-[12px] border rounded-[10px] focus:ring-2 outline-none transition-all font-['DM_Sans',sans-serif] text-[16px] text-[#1f1f1f] caret-[#1f1f1f] ${
              touched.phone && errors.phone
                ? 'border-[#ff383c] focus:ring-[#ff383c] focus:border-[#ff383c]'
                : 'border-[#d1d5dc] focus:ring-[#1F7A4A] focus:border-transparent'
            }`}
            placeholder="+61 400 000 000"
          />
          {touched.phone && errors.phone && (
            <p className="font-['DM_Sans',sans-serif] text-[12px] text-[#ff383c] leading-[16px]">{errors.phone}</p>
          )}
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-[4px] flex-1">
          <label htmlFor="email" className="font-['DM_Sans',sans-serif] font-medium text-[14px] text-[#1f7a4a] leading-[20px]">
            Email Address <span className="text-[#ff383c]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`h-[50px] w-full px-[16px] py-[12px] border rounded-[10px] focus:ring-2 outline-none transition-all font-['DM_Sans',sans-serif] text-[16px] text-[#1f1f1f] caret-[#1f1f1f] ${
              touched.email && errors.email
                ? 'border-[#ff383c] focus:ring-[#ff383c] focus:border-[#ff383c]'
                : 'border-[#d1d5dc] focus:ring-[#1F7A4A] focus:border-transparent'
            }`}
            placeholder="john@example.com"
          />
          {touched.email && errors.email && (
            <p className="font-['DM_Sans',sans-serif] text-[12px] text-[#ff383c] leading-[16px]">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Product Selection Dropdown */}
      {products.length > 0 && (
        <div className="flex flex-col gap-[4px]">
          <label className="font-['DM_Sans',sans-serif] font-medium text-[14px] text-[#1f7a4a] leading-[20px]">
            Products you would like to enquire about
          </label>
          <div className="relative" ref={productDropdownRef}>
            {/* Custom Multi-Select Input */}
            <div
              className="min-h-[50px] w-full px-[16px] py-[8px] border border-[#d1d5dc] rounded-[10px] focus-within:ring-2 focus-within:ring-[#1F7A4A] focus-within:border-transparent outline-none transition-all bg-white cursor-pointer flex flex-wrap gap-2 items-center"
              onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
            >
              {formData.products.length === 0 ? (
                <span className="font-['DM_Sans',sans-serif] text-[16px] text-[#9ca3af]">Select products...</span>
              ) : (
                formData.products.map((productId) => {
                  const product = products.find(p => p.id === productId);
                  return product ? (
                    <span
                      key={productId}
                      className="inline-flex items-center gap-1 bg-[#1f7a4a] text-white px-3 py-1 rounded-full text-[14px] font-['DM_Sans',sans-serif]"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductToggle(productId);
                      }}
                    >
                      {product.name}
                      <X size={14} className="cursor-pointer hover:bg-[#165a36] rounded-full" />
                    </span>
                  ) : null;
                })
              )}
              <div className="absolute right-[13px] top-[13px] pointer-events-none">
                <ChevronDown size={24} className={`text-[#6b6b6b] transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {/* Dropdown Menu */}
            {isProductDropdownOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%+4px)] bg-white border border-[#d1d5dc] rounded-[10px] shadow-lg z-10 max-h-[240px] overflow-y-auto">
                {products.map((product) => (
                  <label
                    key={product.id}
                    className="flex items-center gap-3 px-[16px] py-[12px] cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="checkbox"
                      checked={formData.products.includes(product.id)}
                      onChange={() => handleProductToggle(product.id)}
                      className="w-4 h-4 appearance-none border border-gray-300 rounded bg-white cursor-pointer checked:bg-[#1F7A4A] checked:border-[#1F7A4A] checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgNEw0LjUgNy41TDExIDEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] checked:bg-center checked:bg-no-repeat focus:ring-2 focus:ring-[#1F7A4A]"
                    />
                    <span className="font-['DM_Sans',sans-serif] text-[16px] text-[#1f1f1f]">{product.name}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Farm / Organisation Name */}
      <div className="flex flex-col gap-[4px]">
        <label htmlFor="farmName" className="font-['DM_Sans',sans-serif] font-medium text-[14px] text-[#1f7a4a] leading-[20px]">
          Farm / Organisation Name
        </label>
        <input
          type="text"
          id="farmName"
          name="farmName"
          value={formData.farmName}
          onChange={handleChange}
          className="h-[50px] w-full px-[16px] py-[12px] border border-[#d1d5dc] rounded-[10px] focus:ring-2 focus:ring-[#1F7A4A] focus:border-transparent outline-none transition-all font-['DM_Sans',sans-serif] text-[16px] text-[#1f1f1f] caret-[#1f1f1f]"
          placeholder="Green Valley Farm"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-[4px]">
        <label htmlFor="message" className="font-['DM_Sans',sans-serif] font-medium text-[14px] text-[#1f7a4a] leading-[20px]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="h-[122px] w-full px-[16px] py-[12px] border border-[#d1d5dc] rounded-[10px] focus:ring-2 focus:ring-[#1F7A4A] focus:border-transparent outline-none transition-all resize-none font-['DM_Sans',sans-serif] text-[16px] text-[#1f1f1f] caret-[#1f1f1f]"
          placeholder="Tell us about your needs..."
        />
        <p className="font-['DM_Sans',sans-serif] text-[12px] text-[#6a7282] leading-[16px]">
          Optional: Share any specific requirements or questions
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-[#1f7a4a] hover:bg-[#165a36] text-white h-[56px] w-full rounded-[10px] font-['DM_Sans',sans-serif] font-medium text-[16px] transition-colors flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? (
          <span>Submitting...</span>
        ) : (
          <>
            <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
              <g clipPath="url(#clip0_57_1077)">
                <path d={svgPaths.p3a8355f0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p280f2c80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
              <defs>
                <clipPath id="clip0_57_1077">
                  <rect fill="white" height="18" width="18" />
                </clipPath>
              </defs>
            </svg>
            Submit Enquiry
          </>
        )}
      </button>
    </form>
  );
}