import React from 'react'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import PcPartsSection from '../components/PcPartsSection'
import AccessoriesSection from '../components/AccessoriesSection'

const Homepage = () => {
  return (
    <div>
      <SearchBar />
      <Hero />
      <PcPartsSection />
      <AccessoriesSection />
    </div>
  )
}

export default Homepage
