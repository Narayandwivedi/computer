import React from 'react'
import HeroCarousel from '../components/HeroCarousel'
import SearchBar from '../components/SearchBar'
import PcPartsSection from '../components/PcPartsSection'
import AccessoriesSection from '../components/AccessoriesSection'

const Homepage = () => {
  return (
    <div>
      <SearchBar />
      <HeroCarousel />
      <PcPartsSection />
      <AccessoriesSection />
    </div>
  )
}

export default Homepage
