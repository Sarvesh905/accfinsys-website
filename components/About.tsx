import React, { useState, useEffect } from 'react';
import { Award, TrendingUp, Mic, User, Upload, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(() => {
    const saved = localStorage.getItem("accfinsys_founder_photo");
    return saved || "SarveshPhoto.png";
  });
  
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (imgSrc.startsWith('data:')) {
        try {
            localStorage.setItem("accfinsys_founder_photo", imgSrc);
        } catch (e) {
            console.error("Failed to save image to local storage", e);
        }
    }
  }, [imgSrc]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
          alert("The selected image is too large to save permanently. Please select an image under 3MB.");
          return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImgSrc(result);
        setImgError(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearPhoto = () => {
      if (confirm("Are you sure you want to remove the saved photo and revert to default?")) {
        localStorage.removeItem("accfinsys_founder_photo");
        setImgSrc("SarveshPhoto.png");
        setImgError(false); 
      }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-navy font-display mb-4 relative inline-block"
          >
            About the Founder
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal rounded-full"></div>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Sarvesh KP, recognized as an exemplary Finance Leader, brings over 30 years of global experience steering Financial Strategy across VC-funded Startups to Large-scale Listed companies across Manufacturing, FMCG, IT (Services & Products), BPO and GCC sectors—by building modern finance functions in high-growth environments.
              </p>
              <p>
                He founded this consultancy to deliver C-Suite-caliber Financial Infrastructure for Startups, SMEs, and Mid-sized Enterprises through Value-based Advisory, Fractional CFO leadership, and Modern Team-building Techniques — Empowering to evolve beyond numbers and compliance into a Strategic Growth driver fuelled by Continuous Improvement.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-teal italic text-gray-700">
              <h4 className="font-bold text-navy flex items-center gap-2 mb-2 not-italic">
                <Mic className="w-5 h-5 text-teal" />
                Strategic Advisor & Industry Voice
              </h4>
              <p>
                "Beyond his corporate roles, Sarvesh is a 2024 CFO100 Award winner and a sought-after Guest Speaker and Panellist for prestigious forums including CFO India, Oracle and ACCA."
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72 mb-4 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 flex items-center justify-center group">
                {!imgError ? (
                  <img 
                    src={imgSrc} 
                    alt="Sarvesh KP" 
                    className="w-full h-full object-cover object-top transition-transform duration-300"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-500 p-6 text-center">
                    <div className="w-16 h-16 mb-3 bg-slate-200 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-slate-400" />
                    </div>
                    <h5 className="text-navy font-bold text-sm mb-1">Photo Not Found</h5>
                    <p className="text-xs text-slate-500 mb-4">
                      Could not auto-load "SarveshPhoto.png"
                    </p>
                    
                    <label className="cursor-pointer bg-teal hover:bg-teal/90 text-white text-xs font-bold py-2 px-5 rounded-full flex items-center gap-2 transition-colors shadow-sm ring-2 ring-offset-2 ring-teal/50">
                      <Upload className="w-3 h-3" />
                      Upload Photo
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                )}
              </div>

              {imgSrc.startsWith('data:') && (
                <div className="flex flex-col items-center gap-2 mb-6 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <button 
                    onClick={handleClearPhoto}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors"
                    title="Remove Saved Photo"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Clear Custom Photo
                  </button>
                </div>
              )}

              <div className="flex items-center gap-2 mb-3 bg-teal/10 px-4 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-teal" />
                <span className="text-teal font-bold uppercase tracking-wider text-xs">CFO100 Award Winner 2024</span>
              </div>

              <h3 className="text-3xl font-bold text-navy font-display mb-1">
                Sarvesh KP
              </h3>
              <span className="text-gray-500 text-2xl font-normal">Founder</span>
            </div>

            <div className="w-full mt-10">
              <h4 className="text-2xl font-bold text-navy font-display mb-6 flex items-center justify-center gap-3">
                <TrendingUp className="w-6 h-6 text-teal" />
                A Legacy of Scaling & Transformation
              </h4>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Throughout his career, Sarvesh has been a catalyst for exponential growth and operational excellence:
              </p>

              <div className="space-y-3">
                <p className="text-gray-600 text-lg leading-snug">
                  <span className="font-bold text-navy text-xl">Massive Scalability</span> - Successfully guided companies through journeys from $50 Million to $1 Billion in revenue.
                </p>

                <p className="text-gray-600 text-lg leading-snug">
                  <span className="font-bold text-navy text-xl">Profitability</span> - Guided company to improve EBITDA from 12% to 25% and maintained it steadily over a period of 5 years with no compromise in Quality.
                </p>
                
                <p className="text-gray-600 text-lg leading-snug">
                  <span className="font-bold text-navy text-xl">Workforce Leadership</span> - Expertly managed the financial systems and infrastructure required to scale organizations from inception to over 3,000+ employees in less than three years.
                </p>

                <p className="text-gray-600 text-lg leading-snug">
                  <span className="font-bold text-navy text-xl">Digital Innovation</span> - A staunch advocate for digital transformation, specializing in ERP implementations, RPA, and automations to transform manual processes into future-ready functions.
                </p>

                <p className="text-gray-600 text-lg leading-snug">
                  <span className="font-bold text-navy text-xl">Holistic Business Leadership</span> - Proven capabilities spanning HR, IT, Legal, Admin, CSR, and other Business areas.
                </p>

                <p className="text-gray-600 text-lg leading-snug">
                  <span className="font-bold text-navy text-xl">Global Footprint</span> - Executed high-level strategic assignments across the USA, Europe, and Asia, bringing a sophisticated, cross-border perspective to global business challenges.
                </p>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;