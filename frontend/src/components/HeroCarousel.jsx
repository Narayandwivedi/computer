import React, { useState, useEffect } from 'react'
import Hero from './Hero'
import LaptopHero from './LaptopHero'

const HeroCarousel = () => {
  const [currentHero, setCurrentHero] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero(prev => (prev + 1) % 2)
    }, 5000) // Auto-rotate every 5 seconds
    
    return () => clearInterval(interval)
  }, [])

  const heroComponents = [
    { id: 'pc', component: <Hero key="pc-hero" /> },
    { id: 'laptop', component: <LaptopHero key="laptop-hero" /> }
  ]

  return (
    <div className="relative">
      {/* Add fade transition styles */}
      <style jsx>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .hero-transition {
          animation: heroFadeIn 0.8s ease-in-out;
        }
      `}</style>
      
      {/* Current Hero Component */}
      <div className="hero-transition">
        {heroComponents[currentHero].component}
      </div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex justify-center space-x-2 sm:space-x-3 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
          {heroComponents.map((hero, index) => (
            <button
              key={hero.id}
              onClick={() => setCurrentHero(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentHero 
                  ? 'bg-white shadow-lg scale-125' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Switch to ${hero.id} section`}
            />
          ))}
        </div>
        
        {/* Hero Labels - Hidden on mobile to save space */}
        <div className="hidden sm:block text-center mt-2">
          <span className="text-xs text-white/80 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
            {currentHero === 0 ? 'Custom PC Builds' : 'Gaming Laptops'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel