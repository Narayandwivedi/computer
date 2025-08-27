import React from 'react'
import { Link } from 'react-router-dom'

const ComputerAccessories = () => {
  const accessoryCategories = [
    {
      name: "Mouse",
      description: "Precision gaming mice for competitive edge",
      icon: (
        <img src="/mosue final.webp" alt="Gaming Mouse" className="w-full h-full object-contain" />
      ),
      features: ["RGB Lighting", "High DPI", "Ergonomic Design", "Gaming Software"],
      priceRange: "₹1,299 - ₹12,999",
      link: "/computer-accessories/mouse",
      gradient: "from-red-500 to-pink-600",
      hoverColor: "hover:border-red-400"
    },
    {
      name: "Keyboards",
      description: "Premium mechanical keyboards for typing and gaming",
      icon: (
        <img src="/keyboard final.webp" alt="Gaming Keyboard" className="w-full h-full object-contain" />
      ),
      features: ["Mechanical Switches", "RGB Backlighting", "Anti-Ghosting", "Durable Build"],
      priceRange: "₹2,999 - ₹25,999",
      link: "/computer-accessories/keyboard",
      gradient: "from-blue-500 to-purple-600",
      hoverColor: "hover:border-blue-400"
    },
    {
      name: "Gaming Headsets",
      description: "Immersive audio experience for gaming",
      icon: (
        <img src="/headset final.webp" alt="Gaming Headset" className="w-full h-full object-contain" />
      ),
      features: ["Surround Sound", "Noise Cancellation", "Comfortable Fit", "Crystal Clear Mic"],
      priceRange: "₹1,599 - ₹18,999",
      link: "/computer-accessories/headset",
      gradient: "from-green-500 to-teal-600",
      hoverColor: "hover:border-green-400"
    },
    {
      name: "Webcams",
      description: "HD webcams for streaming and video calls",
      icon: (
        <img src="/webcam.webp" alt="Webcam" className="w-full h-full object-contain" />
      ),
      features: ["4K Recording", "Auto Focus", "Wide Angle", "Privacy Shutter"],
      priceRange: "₹2,499 - ₹15,999",
      link: "/computer-accessories/webcam",
      gradient: "from-purple-500 to-indigo-600",
      hoverColor: "hover:border-purple-400"
    },
    {
      name: "Gaming Chairs",
      description: "Ergonomic chairs for comfortable gaming sessions",
      icon: (
        <img src="/gaming chair final.webp" alt="Gaming Chair" className="w-full h-full object-contain" />
      ),
      features: ["Lumbar Support", "Adjustable Height", "Premium Materials", "360° Swivel"],
      priceRange: "₹8,999 - ₹45,999",
      link: "/computer-accessories/gaming-chair",
      gradient: "from-yellow-500 to-orange-600",
      hoverColor: "hover:border-yellow-400"
    },
    {
      name: "Laptop Bags",
      description: "Protective and stylish laptop carrying solutions",
      icon: (
        <img src="/laptop bag final.webp" alt="Laptop Bag" className="w-full h-full object-contain" />
      ),
      features: ["Water Resistant", "Padded Protection", "Multiple Compartments", "Durable Zippers"],
      priceRange: "₹899 - ₹8,999",
      link: "/computer-accessories/laptop-bag",
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
            Computer <span className="text-cyan-600">Accessories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your computing experience with premium accessories. From gaming peripherals 
            to productivity essentials, find everything you need for your perfect setup.
          </p>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {accessoryCategories.map((accessory, index) => (
            <Link
              key={index}
              to={accessory.link}
              className={`bg-white rounded-2xl p-6 shadow-xl border border-gray-200 ${accessory.hoverColor} transition-all duration-300 transform hover:scale-105 cursor-pointer block`}
            >
              {/* Icon and Content */}
              <div className="mb-6">
                <div className="w-full h-48 flex items-center justify-center mb-4 bg-gray-50 rounded-xl">
                  {accessory.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{accessory.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed text-center mb-4">
                  {accessory.description}
                </p>
                
                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {accessory.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <p className="text-sm text-center text-gray-500 font-semibold mb-4">
                  {accessory.priceRange}
                </p>
              </div>
              
              {/* CTA Button */}
              <div 
                className={`w-full bg-gradient-to-r ${accessory.gradient} text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:scale-[1.02]`}
              >
                Shop {accessory.name}
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Accessories?</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">Premium Quality</h4>
                <p className="text-gray-600 text-sm">Top-brand accessories with excellent build quality</p>
              </div>
              <div>
                <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">Warranty Support</h4>
                <p className="text-gray-600 text-sm">Comprehensive warranty on all accessories</p>
              </div>
              <div>
                <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1l2 7a1 1 0 001 1h6.5l2.74-5.49A1 1 0 0015 8H7l-.22-.89A1 1 0 006 6H3V4z" />
                  </svg>
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">Fast Shipping</h4>
                <p className="text-gray-600 text-sm">Quick delivery across India</p>
              </div>
              <div>
                <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">Expert Advice</h4>
                <p className="text-gray-600 text-sm">Get recommendations from our tech experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComputerAccessories