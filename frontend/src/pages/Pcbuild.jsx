import React from 'react'
import { Link } from 'react-router-dom'

const Pcbuild = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            PC Build <span className="text-cyan-600">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your perfect PC build option. Whether you want full customization or a ready-to-go solution, 
            we've got you covered with professional assembly and testing.
          </p>
        </div>

        {/* Build Options Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Custom Build Card */}
          <Link
            to="/custom-build"
            className="bg-white rounded-xl p-6 shadow-xl border border-gray-200 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 cursor-pointer block"
          >
            <div className="mb-6">
              <div className="w-full h-48 flex items-center justify-center mb-4 bg-gray-50 rounded-xl">
                <img src="/custom pc.webp" alt="Custom PC Build" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">Custom Build</h2>
              <p className="text-gray-600 text-base leading-relaxed text-center">
                Design your dream PC from scratch.
              </p>
            </div>

            <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-sm">
              Start Custom Build
            </div>
          </Link>

          {/* Pre-Built Card */}
          <Link
            to="/pre-built"
            className="bg-white rounded-xl p-6 shadow-xl border border-gray-200 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 cursor-pointer block"
          >
            <div className="mb-6">
              <div className="w-full h-48 flex items-center justify-center mb-4 bg-gray-50 rounded-xl">
                <img src="/prebuild final.webp" alt="Pre-Built PC" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">Pre-Built Systems</h2>
              <p className="text-gray-600 text-base leading-relaxed text-center">
                Ready-to-use PCs optimized for specific purposes.
              </p>
            </div>

            <div className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-sm">
              Browse Pre-Built PCs
            </div>
          </Link>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Jainx Computers?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">Expert Assembly</h4>
                <p className="text-gray-600 text-sm">Professional technicians with years of PC building experience</p>
              </div>
              <div>
                <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">Quality Assurance</h4>
                <p className="text-gray-600 text-sm">Every build undergoes rigorous testing before delivery</p>
              </div>
              <div>
                <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">Lifetime Support</h4>
                <p className="text-gray-600 text-sm">Ongoing technical support and upgrade consultation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pcbuild
