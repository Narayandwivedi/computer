import React from 'react'
import { Link } from 'react-router-dom'

const PcPartsSection = () => {
  const componentCategories = [
    {
      name: "Monitors",
      description: "High-quality displays for every need",
      icon: "/monitor final.webp",
      features: ["Gaming Monitors", "4K Displays", "Ultrawide Screens"],
      priceRange: "₹8,999 - ₹85,999",
      link: "/pc-parts/monitors",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      name: "Motherboards", 
      description: "Foundation of your perfect build",
      icon: "/motherboard final.webp",
      features: ["ATX Motherboards", "Micro-ATX", "Mini-ITX"],
      priceRange: "₹4,999 - ₹35,999",
      link: "/pc-parts/motherboards",
      gradient: "from-green-500 to-teal-600",
    },
    {
      name: "Processors",
      description: "Power your system with top CPUs",
      icon: "/cpu final.webp", 
      features: ["Intel Core Series", "AMD Ryzen", "Gaming CPUs"],
      priceRange: "₹6,999 - ₹89,999",
      link: "/pc-parts/processors",
      gradient: "from-red-500 to-pink-600",
    },
    {
      name: "Memory (RAM)",
      description: "High-speed memory for performance",
      icon: "/ram final.webp",
      features: ["DDR4 Memory", "DDR5 Memory", "Gaming RAM"],
      priceRange: "₹2,999 - ₹25,999", 
      link: "/pc-parts/memory",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      name: "Graphics Cards",
      description: "Ultimate gaming and rendering power",
      icon: "/graphic final.webp",
      features: ["High Performance", "Gaming Ready", "4K Support"],
      priceRange: "₹12,999 - ₹1,99,999",
      link: "/pc-parts/graphics-card",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      name: "Storage (SSD)",
      description: "Fast and reliable storage solutions", 
      icon: "/ssd final.webp",
      features: ["NVMe SSDs", "SATA SSDs", "Gaming SSDs"],
      priceRange: "₹3,499 - ₹45,999",
      link: "/pc-parts/storage",
      gradient: "from-cyan-500 to-blue-600",
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            PC <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">Components</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build your dream PC with premium components from top brands. Quality guaranteed with expert support.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {componentCategories.map((component, index) => (
            <Link
              key={index}
              to={component.link}
              className="group bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer block"
            >
              {/* Component Image */}
              <div className="mb-4 md:mb-6">
                <div className="relative w-full h-28 md:h-40 flex items-center justify-center mb-3 md:mb-4 bg-gray-50 rounded-xl overflow-hidden group-hover:bg-gray-100 transition-colors duration-300">
                  <img 
                    src={component.icon} 
                    alt={component.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-base md:text-xl font-bold text-gray-900 text-center mb-1 md:mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                  {component.name}
                </h3>
                
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed text-center mb-2 md:mb-3 hidden sm:block">
                  {component.description}
                </p>

                {/* Features - Only on medium and larger screens */}
                <div className="flex flex-wrap justify-center gap-1 mb-2 md:mb-4 hidden md:flex">
                  {component.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price Range */}
                <div className="text-center mb-3 md:mb-4">
                  <span className="text-xs md:text-sm font-semibold text-gray-900 bg-gray-100 px-2 md:px-3 py-1 rounded-full">
                    {component.priceRange}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div 
                className={`w-full bg-gradient-to-r ${component.gradient} text-white font-semibold py-2 md:py-3 px-3 md:px-6 rounded-xl group-hover:opacity-90 transition-all duration-300 text-center shadow-md group-hover:shadow-lg transform group-hover:scale-[1.02] text-xs md:text-base`}
              >
                <span className="hidden sm:inline">Shop {component.name}</span>
                <span className="sm:hidden">Shop</span>
                <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/pc-parts"
            className="group inline-flex items-center bg-gradient-to-r from-gray-900 to-gray-700 text-white font-bold py-4 px-8 rounded-2xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <span className="mr-2">🔧</span>
            View All PC Components
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="hidden md:block mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Authentic Products</h4>
              <p className="text-gray-600 text-sm">100% genuine components from authorized dealers</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Quality Assured</h4>
              <p className="text-gray-600 text-sm">Every component tested before shipping</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1l2 7a1 1 0 001 1h6.5l2.74-5.49A1 1 0 0015 8H7l-.22-.89A1 1 0 006 6H3V4z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-gray-600 text-sm">Quick and secure shipping nationwide</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Expert Support</h4>
              <p className="text-gray-600 text-sm">Technical guidance for optimal performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PcPartsSection