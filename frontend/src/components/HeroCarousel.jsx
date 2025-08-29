import React, { useState, useEffect } from 'react'
import Hero from './Hero'
import LaptopHero from './LaptopHero'

const HeroCarousel = () => {
  const [currentHero, setCurrentHero] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000) // Auto-rotate every 5 seconds
    
    return () => clearInterval(interval)
  }, [])

  const heroComponents = [
    { id: 'pc', name: 'Custom PC Builds' },
    { id: 'laptop', name: 'Gaming Laptops' }
  ]

  const handleNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentHero(prev => (prev + 1) % 2)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const handleHeroClick = (index) => {
    if (isTransitioning || index === currentHero) return
    setIsTransitioning(true)
    setCurrentHero(index)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const handlePrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentHero(prev => (prev - 1 + heroComponents.length) % heroComponents.length)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px] overflow-hidden">
      {/* Hero Section 1 - PC Build */}
      <div
        className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
          currentHero === 0 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-full absolute top-0 left-0 pointer-events-none'
        }`}
      >
        <Hero />
      </div>
      
      {/* Hero Section 2 - Laptop */}
      <div
        className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
          currentHero === 1 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-full absolute top-0 left-0 pointer-events-none'
        }`}
      >
        <LaptopHero />
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={handlePrev}
        disabled={isTransitioning}
        className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous hero section"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        disabled={isTransitioning}
        className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next hero section"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex justify-center space-x-2 sm:space-x-3 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
          {heroComponents.map((hero, index) => (
            <button
              key={hero.id}
              onClick={() => handleHeroClick(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentHero 
                  ? 'bg-white shadow-lg scale-125' 
                  : 'bg-white/60 hover:bg-white/80'
              } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              aria-label={`Switch to ${hero.id} section`}
            />
          ))}
        </div>
        
        {/* Hero Labels - Hidden on mobile to save space */}
        <div className="hidden sm:block text-center mt-2">
          <span className="text-xs text-white/80 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
            {heroComponents[currentHero].name}
          </span>
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel