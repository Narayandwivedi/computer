import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 py-8 md:py-10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Your Trusted
                <span className="block text-cyan-600">Computer Solutions</span>
                <span className="block">Partner</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From cutting-edge hardware to innovative software solutions, 
                Jainx Computers delivers professional technology services that power your success.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <div className="bg-cyan-500 p-1.5 rounded-lg">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">Quality Assured</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <div className="bg-cyan-500 p-1.5 rounded-lg">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">24/7 Support</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <div className="bg-cyan-500 p-1.5 rounded-lg">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">Expert Team</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                to="/contact" 
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-center cursor-pointer shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </Link>
              
              <Link 
                to="/pc-parts" 
                className="border border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-center cursor-pointer"
              >
                Browse PC Parts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
