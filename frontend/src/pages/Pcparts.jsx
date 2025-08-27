import React from 'react'
import { Link } from 'react-router-dom'

const Pcparts = () => {
  const componentCategories = [
    {
      name: "Monitors",
      description: "High-quality displays for every need",
      icon: (
        <img src="/monitor final.webp" alt="Monitor Display" className="w-full h-full object-contain" />
      ),
      features: ["Gaming Monitors", "4K Displays", "Ultrawide Screens", "Professional Monitors"],
      priceRange: "₹8,999 - ₹85,999",
      link: "/pc-parts/monitors",
      gradient: "from-blue-500 to-purple-600",
      hoverColor: "hover:border-blue-400"
    },
    {
      name: "Motherboards",
      description: "Foundation of your perfect build",
      icon: (
        <img src="/motherboard final.webp" alt="Motherboard" className="w-full h-full object-contain" />
      ),
      features: ["ATX Motherboards", "Micro-ATX", "Mini-ITX", "Gaming Boards"],
      priceRange: "₹4,999 - ₹35,999",
      link: "/pc-parts/motherboards",
      gradient: "from-green-500 to-teal-600",
      hoverColor: "hover:border-green-400"
    },
    {
      name: "Processors (CPU)",
      description: "Power your system with top CPUs",
      icon: (
        <img src="/cpu final.webp" alt="CPU Processor" className="w-full h-full object-contain" />
      ),
      features: ["Intel Core Series", "AMD Ryzen", "Gaming CPUs", "Workstation CPUs"],
      priceRange: "₹6,999 - ₹89,999",
      link: "/pc-parts/processors",
      gradient: "from-red-500 to-pink-600",
      hoverColor: "hover:border-red-400"
    },
    {
      name: "Memory (RAM)",
      description: "High-speed memory for smooth performance",
      icon: (
        <img src="/ram final.webp" alt="RAM Memory" className="w-full h-full object-contain" />
      ),
      features: ["DDR4 Memory", "DDR5 Memory", "Gaming RAM", "RGB Memory"],
      priceRange: "₹2,999 - ₹25,999",
      link: "/pc-parts/memory",
      gradient: "from-yellow-500 to-orange-600",
      hoverColor: "hover:border-yellow-400"
    },
    {
      name: "Graphics Cards",
      description: "Ultimate gaming and rendering power",
      icon: (
        <img src="/graphic final.webp" alt="Graphics Card" className="w-full h-full object-contain" />
      ),
      features: ["High Performance", "Gaming Ready", "4K Support", "Ray Tracing"],
      priceRange: "₹12,999 - ₹1,99,999",
      link: "/pc-parts/graphics-card",
      gradient: "from-purple-500 to-indigo-600",
      hoverColor: "hover:border-purple-400"
    },
    {
      name: "Storage (SSD)",
      description: "Fast and reliable storage solutions",
      icon: (
        <img src="/ssd final.webp" alt="SSD Storage" className="w-full h-full object-contain" />
      ),
      features: ["NVMe SSDs", "SATA SSDs", "Gaming SSDs", "High-Capacity Drives"],
      priceRange: "₹3,499 - ₹45,999",
      link: "/pc-parts/storage",
      gradient: "from-cyan-500 to-blue-600",
      hoverColor: "hover:border-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            PC <span className="text-cyan-600">Components</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover premium computer components from top brands. Build your dream PC with 
            high-quality parts backed by warranty and expert support.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {componentCategories.map((component, index) => (
            <Link
              key={index}
              to={component.link}
              className={`bg-white rounded-2xl p-6 shadow-xl border border-gray-200 ${component.hoverColor} transition-all duration-300 transform hover:scale-105 cursor-pointer block`}
            >
              {/* Special layout for all components with images */}
              <div className="mb-6">
                <div className="w-full h-48 flex items-center justify-center mb-4 bg-gray-50 rounded-xl">
                  {component.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{component.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {component.description}
                </p>
              </div>
              <div 
                className={`w-full bg-gradient-to-r ${component.gradient} text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:scale-[1.02]`}
              >
                Browse {component.name}
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Components?</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">Authentic Products</h4>
                <p className="text-gray-600 text-sm">100% genuine components from authorized dealers</p>
              </div>
              <div>
                <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">Quality Assurance</h4>
                <p className="text-gray-600 text-sm">Every component tested before shipping</p>
              </div>
              <div>
                <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1l2 7a1 1 0 001 1h6.5l2.74-5.49A1 1 0 0015 8H7l-.22-.89A1 1 0 006 6H3V4z" />
                  </svg>
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">Fast Delivery</h4>
                <p className="text-gray-600 text-sm">Quick and secure shipping nationwide</p>
              </div>
              <div>
                <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">Expert Support</h4>
                <p className="text-gray-600 text-sm">Technical guidance for optimal performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pcparts
