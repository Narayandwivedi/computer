import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [originalQuery, setOriginalQuery] = useState('') // Store the user's original input
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)
  const navigate = useNavigate()

  // Comprehensive suggestions based on popular e-commerce search terms
  const sampleSuggestions = [
    // Graphics Cards - Popular models and brands
    'Graphics Card',
    'Graphics Cards',
    'NVIDIA RTX 4090',
    'NVIDIA RTX 4080',
    'NVIDIA RTX 4070 Ti',
    'NVIDIA RTX 4070',
    'NVIDIA RTX 4060 Ti',
    'NVIDIA RTX 4060',
    'NVIDIA RTX 3080',
    'NVIDIA RTX 3070',
    'NVIDIA RTX 3060',
    'AMD RX 7900 XTX',
    'AMD RX 7900 XT',
    'AMD RX 7800 XT',
    'AMD RX 7700 XT',
    'AMD RX 6700 XT',
    'RTX 4090',
    'RTX 4080',
    'RTX 4070',
    'RTX 3060',
    'Gaming Graphics Card',
    'GPU',
    'Video Card',
    'Best Graphics Card',
    'Graphics Card Under 50000',
    'Graphics Card Under 30000',
    'Graphics Card Under 20000',
    
    // Laptops - Comprehensive categories and price ranges
    'Gaming Laptop',
    'Gaming Laptops',
    'Laptop',
    'Laptops',
    'Business Laptop',
    'Office Laptop',
    'Student Laptop',
    'Ultrabook',
    'Notebook',
    '2-in-1 Laptop',
    'Laptop Deals',
    'Cheap Laptop',
    'Best Laptop',
    'Laptop Under 25000',
    'Laptop Under 30000',
    'Laptop Under 35000',
    'Laptop Under 40000',
    'Laptop Under 45000',
    'Laptop Under 50000',
    'Laptop Under 60000',
    'Laptop Under 70000',
    'Laptop Under 80000',
    'Laptop Under 100000',
    'Laptop Under 150000',
    'HP Laptop',
    'Dell Laptop',
    'Lenovo Laptop',
    'ASUS Laptop',
    'Acer Laptop',
    'MSI Laptop',
    'Apple MacBook',
    'MacBook Pro',
    'MacBook Air',
    'ThinkPad',
    'Legion Laptop',
    'ROG Laptop',
    'Pavilion Laptop',
    'Inspiron Laptop',
    
    // Processors - Intel and AMD popular models
    'Processor',
    'Processors',
    'CPU',
    'Intel Processor',
    'AMD Processor',
    'Intel Core i9 14900K',
    'Intel Core i9 13900K',
    'Intel Core i7 14700K',
    'Intel Core i7 13700K',
    'Intel Core i5 14600K',
    'Intel Core i5 13600K',
    'Intel Core i5 12600K',
    'Intel Core i3',
    'AMD Ryzen 9 7950X',
    'AMD Ryzen 9 7900X',
    'AMD Ryzen 7 7800X3D',
    'AMD Ryzen 7 7700X',
    'AMD Ryzen 5 7600X',
    'AMD Ryzen 5 5600X',
    'Gaming Processor',
    'Best Processor',
    'Budget Processor',
    
    // Memory - DDR4, DDR5, and popular brands
    'RAM',
    'RAM Memory',
    'DDR5 RAM',
    'DDR4 RAM',
    '8GB RAM',
    '16GB RAM',
    '32GB RAM',
    '64GB RAM',
    'Gaming RAM',
    'RGB RAM',
    'Corsair Vengeance',
    'Corsair Dominator',
    'G.Skill Trident Z',
    'G.Skill Ripjaws',
    'Kingston Fury',
    'Crucial Ballistix',
    'TeamGroup RAM',
    '3200MHz RAM',
    '3600MHz RAM',
    '6000MHz RAM',
    
    // Storage - SSD, HDD, popular brands
    'SSD',
    'SSD Storage',
    'NVMe SSD',
    'M.2 SSD',
    'SATA SSD',
    'External SSD',
    'Portable SSD',
    '256GB SSD',
    '512GB SSD',
    '1TB SSD',
    '2TB SSD',
    '4TB SSD',
    'Samsung 980 PRO',
    'Samsung 990 PRO',
    'WD Black SN850X',
    'WD Blue SSD',
    'Kingston NV2',
    'Crucial MX500',
    'Seagate FireCuda',
    'Hard Drive',
    'HDD',
    'External Hard Drive',
    
    // Motherboards - Socket types and brands
    'Motherboard',
    'Motherboards',
    'Gaming Motherboard',
    'Intel Motherboard',
    'AMD Motherboard',
    'LGA 1700 Motherboard',
    'AM5 Motherboard',
    'AM4 Motherboard',
    'ATX Motherboard',
    'Micro ATX Motherboard',
    'Mini ITX Motherboard',
    'ASUS Motherboard',
    'MSI Motherboard',
    'Gigabyte Motherboard',
    'ASRock Motherboard',
    'Z790 Motherboard',
    'B650 Motherboard',
    'X670 Motherboard',
    'WiFi Motherboard',
    
    // Gaming Accessories - Keyboards
    'Gaming Keyboard',
    'Gaming Keyboards',
    'Mechanical Keyboard',
    'Wireless Keyboard',
    'RGB Keyboard',
    'Blue Switch Keyboard',
    'Red Switch Keyboard',
    'Brown Switch Keyboard',
    '60% Keyboard',
    'TKL Keyboard',
    'Full Size Keyboard',
    'Razer Keyboard',
    'Logitech Keyboard',
    'Corsair Keyboard',
    'SteelSeries Keyboard',
    'HyperX Keyboard',
    'Keychron Keyboard',
    
    // Gaming Accessories - Mice
    'Gaming Mouse',
    'Gaming Mice',
    'Wireless Gaming Mouse',
    'RGB Gaming Mouse',
    'Ergonomic Mouse',
    'FPS Mouse',
    'MMO Mouse',
    'Lightweight Mouse',
    'Razer DeathAdder',
    'Logitech G Pro',
    'Corsair Dark Core',
    'SteelSeries Rival',
    'HyperX Pulsefire',
    'Glorious Model O',
    'Mouse Pad',
    'Gaming Mouse Pad',
    'Extended Mouse Pad',
    
    // Audio - Headsets and Speakers
    'Gaming Headset',
    'Gaming Headphones',
    'Wireless Headset',
    'USB Headset',
    '7.1 Surround Headset',
    'Noise Cancelling Headset',
    'Studio Headphones',
    'Razer Headset',
    'SteelSeries Headset',
    'HyperX Headset',
    'Logitech Headset',
    'Audio Technica',
    'Sennheiser',
    'Gaming Speakers',
    'Bluetooth Speakers',
    'Computer Speakers',
    'Microphone',
    'Gaming Mic',
    'USB Microphone',
    'Condenser Mic',
    
    // Gaming Furniture
    'Gaming Chair',
    'Computer Chair',
    'Office Chair',
    'Ergonomic Chair',
    'Racing Chair',
    'Executive Chair',
    'Gaming Desk',
    'Computer Desk',
    'Standing Desk',
    'Gaming Table',
    'L Shaped Desk',
    'Glass Desk',
    
    // Webcams and Streaming
    'Webcam',
    'Gaming Webcam',
    'HD Webcam',
    '4K Webcam',
    '1080p Webcam',
    'Streaming Webcam',
    'USB Webcam',
    'Logitech C920',
    'Logitech Brio',
    'Ring Light',
    'Green Screen',
    'Stream Deck',
    'Capture Card',
    
    // Monitors - Sizes and specs
    'Monitor',
    'Monitors',
    'Gaming Monitor',
    '4K Monitor',
    '1440p Monitor',
    '1080p Monitor',
    'Curved Monitor',
    'Ultrawide Monitor',
    '21 Inch Monitor',
    '24 Inch Monitor',
    '27 Inch Monitor',
    '32 Inch Monitor',
    '34 Inch Monitor',
    '49 Inch Monitor',
    '144Hz Monitor',
    '165Hz Monitor',
    '240Hz Monitor',
    '360Hz Monitor',
    'IPS Monitor',
    'VA Monitor',
    'TN Monitor',
    'OLED Monitor',
    'HDR Monitor',
    'G-Sync Monitor',
    'FreeSync Monitor',
    'Dual Monitor Setup',
    'Monitor Arm',
    'Monitor Stand',
    
    // Power and Cooling
    'Power Supply',
    'PSU',
    'Modular PSU',
    '650W PSU',
    '750W PSU',
    '850W PSU',
    '1000W PSU',
    'Gold PSU',
    'Platinum PSU',
    'CPU Cooler',
    'AIO Cooler',
    'Air Cooler',
    'Liquid Cooling',
    'Thermal Paste',
    'Case Fan',
    'RGB Fan',
    'CPU Fan',
    'Exhaust Fan',
    
    // Cases and Cable Management
    'PC Case',
    'Computer Case',
    'Gaming Case',
    'ATX Case',
    'Mid Tower Case',
    'Full Tower Case',
    'Mini ITX Case',
    'RGB Case',
    'Tempered Glass Case',
    'Cable Management',
    'Cable Sleeves',
    'Extension Cables',
    
    // Networking
    'WiFi Adapter',
    'USB WiFi',
    'PCIe WiFi Card',
    'Ethernet Cable',
    'Network Card',
    'Router',
    'Gaming Router',
    'Mesh Router',
    'WiFi 6 Router',
    'Powerline Adapter',
    
    // Popular PC Build Terms
    'Best Gaming Setup 2024',
    'PC Build Guide',
    'Custom PC Build',
    'Gaming PC Build',
    'Budget PC Build',
    'High End PC Build',
    'Office PC Build',
    'Workstation Build',
    'Streaming PC',
    'Content Creator PC',
    'PC Parts List',
    'Computer Parts',
    'Gaming Accessories',
    'Computer Accessories',
    'PC Components',
    'Gaming Gear',
    'RGB Setup',
    'Setup Ideas',
    'Battlestation',
    'PC Upgrade',
    'Gaming Setup 2024'
  ]

  const handleInputChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    setOriginalQuery(query) // Store the user's original input
    setSelectedSuggestionIndex(-1) // Reset selection when typing
    
    if (query.length > 0) {
      const queryLower = query.toLowerCase().trim();
      
      // Smart filtering with priority system
      const suggestions = sampleSuggestions.map(suggestion => {
        const suggestionLower = suggestion.toLowerCase();
        let score = 0;
        let matches = false;

        // Highest priority: exact phrase match
        if (suggestionLower.includes(queryLower)) {
          matches = true;
          // Higher score for suggestions that start with the query
          if (suggestionLower.startsWith(queryLower)) {
            score = 100;
          } else {
            score = 80;
          }
        }
        
        // Medium priority: all words match in order
        const queryWords = queryLower.split(' ').filter(word => word.length > 1);
        if (queryWords.length > 1) {
          let allWordsMatch = true;
          let wordIndex = 0;
          
          for (const queryWord of queryWords) {
            const remainingSuggestion = suggestionLower.slice(wordIndex);
            const wordPosition = remainingSuggestion.indexOf(queryWord);
            
            if (wordPosition === -1) {
              allWordsMatch = false;
              break;
            }
            wordIndex += wordPosition + queryWord.length;
          }
          
          if (allWordsMatch && !matches) {
            matches = true;
            score = 60;
          }
        }
        
        // Lower priority: individual word matching
        if (!matches && queryWords.length > 0) {
          const suggestionWords = suggestionLower.split(' ');
          let matchingWords = 0;
          
          queryWords.forEach(queryWord => {
            if (suggestionWords.some(suggestionWord => 
              suggestionWord.startsWith(queryWord) || 
              suggestionWord.includes(queryWord)
            )) {
              matchingWords++;
            }
          });
          
          if (matchingWords > 0) {
            matches = true;
            // Score based on percentage of matching words
            score = (matchingWords / queryWords.length) * 40;
          }
        }

        return { suggestion, score, matches };
      })
      .filter(item => item.matches)
      .sort((a, b) => b.score - a.score)
      .map(item => item.suggestion)
      .slice(0, 10); // Show max 10 suggestions like Amazon

      const filteredSuggestions = suggestions;
      
      setSuggestions(filteredSuggestions)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion)
    setOriginalQuery(suggestion) // Update original query so it doesn't get restored on blur
    setShowSuggestions(false)
    setSelectedSuggestionIndex(-1)
    // Don't automatically search, just set the text in the input
    // User can then press Enter or click search button
  }

  const handleSearch = (query = searchQuery) => {
    if (query.trim()) {
      // Navigate to search results page
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
      // Clear the search query after navigation
      setSearchQuery('')
      setShowSuggestions(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSearch()
      setShowSuggestions(false)
      setSelectedSuggestionIndex(-1)
      return
    }

    if (!showSuggestions || suggestions.length === 0) {
      return
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        const nextIndex = selectedSuggestionIndex < suggestions.length - 1 ? selectedSuggestionIndex + 1 : 0
        setSelectedSuggestionIndex(nextIndex)
        // Immediately update the search input with the selected suggestion
        setSearchQuery(suggestions[nextIndex])
        break
      case 'ArrowUp':
        e.preventDefault()
        const prevIndex = selectedSuggestionIndex > 0 ? selectedSuggestionIndex - 1 : suggestions.length - 1
        setSelectedSuggestionIndex(prevIndex)
        // Immediately update the search input with the selected suggestion
        setSearchQuery(suggestions[prevIndex])
        break
      case 'Escape':
        e.preventDefault()
        // Restore original query when escaping
        setSearchQuery(originalQuery)
        setShowSuggestions(false)
        setSelectedSuggestionIndex(-1)
        break
      default:
        break
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
      // If no suggestion was clicked, restore original query
      if (selectedSuggestionIndex >= 0) {
        setSearchQuery(originalQuery)
      }
      setShowSuggestions(false)
      setSelectedSuggestionIndex(-1)
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
              placeholder="Search PC parts, laptops..."
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full pl-10 pr-16 sm:pr-20 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none text-gray-900 placeholder-gray-500 text-sm sm:text-base"
            />
            <div className="absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center">
              <button
                onClick={() => handleSearch()}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-2 sm:px-4 py-2 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                {/* Mobile: Show only search icon */}
                <svg className="w-4 h-4 sm:hidden" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                {/* Desktop: Show text */}
                <span className="hidden sm:inline">Search</span>
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
                  className={`px-4 py-2 cursor-pointer text-gray-900 border-b border-gray-100 last:border-b-0 transition-colors ${
                    index === selectedSuggestionIndex 
                      ? 'bg-cyan-50 text-cyan-900' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <svg className={`h-4 w-4 ${
                      index === selectedSuggestionIndex ? 'text-cyan-500' : 'text-gray-400'
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <span>{suggestion}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default SearchBar