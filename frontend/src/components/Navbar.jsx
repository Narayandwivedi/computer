import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { getTotalItems } = useCart()

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg">
                <span className="text-white font-black text-xl">JX</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">JAINX</span>
                <span className="text-cyan-300 font-medium text-sm tracking-widest">COMPUTERS</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                to="/pc-build" 
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                PC Build
              </Link>
              <Link 
                to="/laptops" 
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Laptop
              </Link>
              <Link 
                to="/pc-parts" 
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                PC Parts
              </Link>
              <Link 
                to="/computer-accessories" 
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Computer Accessories
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link 
                to="/cart" 
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative"
              >
                <div className="flex items-center space-x-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L8 13m0 0L5.6 5M8 13v6a2 2 0 002 2h8a2 2 0 002-2v-6M8 13H6m6 8a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                  <span>Cart</span>
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </div>
              </Link>
              <Link 
                to="/login"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                Login
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-300 focus:outline-none focus:text-cyan-300 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-b-lg">
              <Link
                to="/"
                className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/pc-build"
                className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                PC Build
              </Link>
              <Link
                to="/laptops"
                className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Laptop
              </Link>
              <Link
                to="/pc-parts"
                className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                PC Parts
              </Link>
              <Link
                to="/computer-accessories"
                className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Computer Accessories
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/cart"
                className="text-white hover:text-cyan-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 relative"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L8 13m0 0L5.6 5M8 13v6a2 2 0 002 2h8a2 2 0 002-2v-6M8 13H6m6 8a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                  <span>Cart</span>
                  {getTotalItems() > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-auto">
                      {getTotalItems()}
                    </span>
                  )}
                </div>
              </Link>
              <Link 
                to="/login"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg w-full mt-3 cursor-pointer text-center block"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
