import React, { useState } from 'react';
import { HardHat, MapPin, Phone, Mail, ArrowRight, Building2, Ruler, Hammer } from 'lucide-react';

export default function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const formData = new FormData(e.target);

    // Add your Web3Forms access key
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("from_name", "Samarrtha Construction Website");
    formData.append("subject", "New Project Inquiry - Samarrtha Construction");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setFormSubmitted(true);
      } else {
        alert("Something went wrong. Please call us directly.");
      }
    } catch (error) {
      alert("Submission failed. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Accent color from the Wix design (Rust/Orange)
  const btnStyle = "bg-[#c65133] hover:bg-[#a64228] text-white transition-colors px-6 py-3 rounded-sm font-medium";

  return (
    <div className="min-h-screen bg-[#e5e5e5] text-[#1a1a1a] font-sans selection:bg-[#c65133] selection:text-white">
      
      {/* HEADER */}
      <header className="px-6 py-5 flex items-center justify-between bg-[#e5e5e5] sticky top-0 z-50 ">
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter">
          <HardHat size={28} className="text-[#c65133]" />
          <div className="leading-none">
            SAMARRTHA <br />
            <span className="text-sm tracking-widest font-bold text-gray-500 uppercase">Construction</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 font-medium text-sm px-3">
          <a href="#" className="hover:text-[#c65133] transition">Home</a>
          <a href="#portfolio" className="hover:text-[#c65133] transition">Portfolio</a>
          <a href="#services" className="hover:text-[#c65133] transition">Services</a>
          <a href="#contact" className="hover:text-[#c65133] transition">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh] bg-[#e5e5e5]">
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.95] mb-6">
            RCC Load-<br/>Bearing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-md mb-8 leading-relaxed font-medium">
            We deliver high-precision structural engineering and civil contracting, specializing in the design and construction of robust RCC load-bearing structures in Dapoli.
          </p>
          <div>
            <a href="#portfolio" className={btnStyle}>Our Work</a>
          </div>
        </div>
        <div className="h-[50vh] md:h-auto bg-gray-200">
          <img 
            src="/images/hero-img.avif" 
            alt="Concrete Architecture" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 px-8 md:px-16 lg:px-24 bg-[#e5e5e5]">
        <div className="border-b-2 border-black pb-4 mb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Selected Portfolios</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Project 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-4/5 overflow-hidden bg-gray-100 mb-4">
              <img 
                src="/images/residential-villa.avif" 
                alt="Residential Villa" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-2xl font-black tracking-tight">Residential Villas</h3>
              <span className="text-xl font-bold font-serif text-gray-400">01</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              End-to-end civil contracting for modern coastal bungalows. Features custom retaining walls, deep foundations, and high-grade RCC frameworks designed for longevity.
            </p>
          </div>

          {/* Project 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-4/5 overflow-hidden bg-gray-100 mb-4">
              <img 
                src="/images/commercial-framework.webp" 
                alt="Commercial Framework" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-2xl font-black tracking-tight">Commercial Sites</h3>
              <span className="text-xl font-bold font-serif text-gray-400">02</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Heavy load-bearing columns and beams for multi-story commercial properties. Strict adherence to safety codes and material curing timelines.
            </p>
          </div>

          {/* Project 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-4/5 overflow-hidden bg-gray-100 mb-4">
              <img 
                src="/images/mansory-brickwork.avif" 
                alt="Masonry & Brickwork" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-2xl font-black tracking-tight">Load-Bearing Masonry</h3>
              <span className="text-xl font-bold font-serif text-gray-400">03</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Traditional and modern load-bearing stone/brick construction. Engineered for thermal efficiency and superior structural weight distribution.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-8 md:px-16 lg:px-24 bg-[#e5e5e5]">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-16">
          Core Engineering Solutions
        </h2>

        <div className="max-w-5xl mx-auto bg-[#f4f4f4] shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-5 items-center border-b border-gray-200 p-6 hover:bg-gray-50 transition">
            <div className="col-span-1 hidden md:block">
              <div className="h-24 w-24 bg-gray-100 flex items-center justify-center rounded">
                <Building2 size={40} className="text-[#c65133]" />
              </div>
            </div>
            <div className="col-span-3">
              <h3 className="text-2xl font-black tracking-tight mb-2">RCC Frame Construction</h3>
              <p className="text-gray-600 text-sm">Footings, columns, beams, and slabs cast with precision.</p>
            </div>
            <div className="col-span-1 text-right mt-4 md:mt-0">
              <a href="#contact" className="border border-gray-300 px-6 py-2 text-sm font-semibold hover:border-black transition">Consult Now</a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 items-center border-b border-gray-200 p-6 hover:bg-gray-50 transition">
            <div className="col-span-1 hidden md:block">
              <div className="h-24 w-24 bg-gray-100 flex items-center justify-center rounded">
                <Hammer size={40} className="text-[#c65133]" />
              </div>
            </div>
            <div className="col-span-3">
              <h3 className="text-2xl font-black tracking-tight mb-2">Structural Repair</h3>
              <p className="text-gray-600 text-sm">Jacketing, retrofitting, and deep waterproofing for existing sites.</p>
            </div>
            <div className="col-span-1 text-right mt-4 md:mt-0">
              <a href="#contact" className="border border-gray-300 px-6 py-2 text-sm font-semibold hover:border-black transition">Consult Now</a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 items-center p-6 hover:bg-gray-50 transition">
            <div className="col-span-1 hidden md:block">
              <div className="h-24 w-24 bg-gray-100 flex items-center justify-center rounded">
                <Ruler size={40} className="text-[#c65133]" />
              </div>
            </div>
            <div className="col-span-3">
              <h3 className="text-2xl font-black tracking-tight mb-2">Site Planning & Layout</h3>
              <p className="text-gray-600 text-sm">Earthwork, level marking, and foundation excavation preparation.</p>
            </div>
            <div className="col-span-1 text-right mt-4 md:mt-0">
              <a href="#contact" className="border border-gray-300 px-6 py-2 text-sm font-semibold hover:border-black transition">Consult Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#c65133] py-20 text-center px-4">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">Ready to Build?</h2>
        <a href="#contact" className="bg-white text-[#c65133] px-8 py-3 font-bold text-lg rounded-sm hover:bg-gray-100 transition shadow-lg inline-block">
          Get a Quote
        </a>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-8 md:px-16 lg:px-24 bg-[#f4f4f4]">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Left: Form */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-10">Request a<br/>Quote</h2>
            {formSubmitted ? (
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="font-bold text-green-800 text-xl mb-2">Inquiry Sent!</h3>
                <p className="text-green-700">Thank you. Our technical team will review your requirements and call you back shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">First Name *</label>
                    <input type="text" name="firstName" required className="w-full border border-gray-300 p-3 bg-transparent focus:border-black focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Last Name *</label>
                    <input type="text" name="lastName" required className="w-full border border-gray-300 p-3 bg-transparent focus:border-black focus:outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Email Address *</label>
                    <input type="email" name="email" required className="w-full border border-gray-300 p-3 bg-transparent focus:border-black focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Phone Number</label>
                    <input type="tel" name="phone" className="w-full border border-gray-300 p-3 bg-transparent focus:border-black focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2">Project Type *</label>
                  <select name="projectType" className="w-full border border-gray-300 p-3 bg-transparent focus:border-black focus:outline-none appearance-none">
                    <option>RCC Structural Framework</option>
                    <option>Load-Bearing Masonry</option>
                    <option>Residential Construction</option>
                    <option>Structural Repair</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <textarea name="message" rows="4" placeholder="Tell us about your project, plot location, etc..." className="w-full border border-gray-300 p-3 bg-transparent focus:border-black focus:outline-none"></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-[#c65133] hover:bg-[#a64228] text-white font-medium py-4 text-lg transition">
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Details */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-10">Connect With Us</h2>
            <p className="text-gray-600 text-lg mb-12">
              We provide high-precision structural engineering and civil contracting solutions. Reach out to our technical team for expert advice on RCC load-bearing structures and project planning.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-black tracking-tight mb-2">Office</h4>
                <p className="text-gray-600 flex items-center gap-2">
                  <MapPin size={18} /> Survey 69, Dehen, Tal-Dapoli 415712.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-black tracking-tight mb-2">Email</h4>
                <a href="mailto:samarrthaconstruction@gmail.com" className="text-gray-600 hover:text-[#c65133] flex items-center gap-2">
                  <Mail size={18} /> samarrthaconstruction@gmail.com
                </a>
              </div>
              <div>
                <h4 className="text-2xl font-black tracking-tight mb-2">Phone</h4>
                <p className="text-gray-600 space-y-1">
                  <a href="tel:+917030832675" className="hover:text-[#c65133] flex items-center gap-2">
                    <Phone size={18} /> +91 7030832675
                  </a>
                  <a href="tel:+919322183725" className="hover:text-[#c65133] flex items-center gap-2">
                    <Phone size={18} /> +91 9322183725
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 px-8 md:px-16 lg:px-24 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter">
            <HardHat size={28} className="text-[#c65133]" />
            <div className="leading-none text-left">
              SAMARTHA <br />
              <span className="text-sm tracking-widest font-bold text-gray-500 uppercase">Construction</span>
            </div>
          </div>
          <div className="text-center md:text-right text-sm text-gray-600">
            <p>Dehen, Dapoli, Maharashtra</p>
            <p>PAN / Reg: ABX2323</p>
            <a href="mailto:samarrthaconstruction@gmail.com" className="hover:text-[#c65133]">samarrthaconstruction@gmail.com</a>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 font-medium">
          © 2026 Samartha Construction. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}