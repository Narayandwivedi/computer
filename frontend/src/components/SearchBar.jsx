import React, { useState } from 'react'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  // Sample suggestions - you can later connect this to your backend
  const sampleSuggestions = [
    'Graphics Cards',
    'NVIDIA RTX 4090',
    'AMD Ryzen 9',
    'Gaming Laptops',
    'Motherboards',
    'RAM Memory',
    'SSD Storage',
    'Gaming Keyboards',
    'Gaming Mice',
    'Monitors'
  ]

  const handleInputChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    
    if (query.length > 0) {
      const filteredSuggestions = sampleSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5) // Show max 5 suggestions
      
      setSuggestions(filteredSuggestions)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion)
    setShowSuggestions(false)
    handleSearch(suggestion)
  }

  const handleSearch = (query = searchQuery) => {
    if (query.trim()) {
      // For now, just log the search - you can later navigate to search results
      console.log('Searching for:', query)
      // Future: navigate to search results page
      // navigate(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
      setShowSuggestions(false)
    }
  }

  const handleFocus = () => {
    if (searchQuery.length > 0) {
      setShowSuggestions(true)
    }
  }

  const handleBlur = () => {
    // Delay hiding suggestions to allow click events
    setTimeout(() => {
      setShowSuggestions(false)
    }, 200)
  }

  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-2xl mx-auto">
          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for PC parts, laptops, accessories..."
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none text-gray-900 placeholder-gray-500"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button
                onClick={() => handleSearch()}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
              >
                Search
              </button>
            </div>
          </div>

          {/* Search Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-900 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <span>{suggestion}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Search Categories */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <span className="text-sm text-gray-500 mr-2">Popular:</span>
          {['Graphics Cards', 'Gaming Laptops', 'RAM', 'SSD', 'Monitors'].map((category, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(category)}
              className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchBar