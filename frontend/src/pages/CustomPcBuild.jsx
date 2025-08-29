import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { mockPcComponents, componentCategories } from '../data/mockPcComponents'

const CustomPcBuild = () => {
  const navigate = useNavigate()
  const [selectedComponents, setSelectedComponents] = useState({})
  const [totalPrice, setTotalPrice] = useState(0)
  const [buildName, setBuildName] = useState('My Custom PC Build')
  const [compatibilityWarnings, setCompatibilityWarnings] = useState([])

  useEffect(() => {
    calculateTotalPrice()
    checkCompatibility()
  }, [selectedComponents])

  const calculateTotalPrice = () => {
    const total = Object.values(selectedComponents).reduce((sum, component) => {
      return sum + (component?.price || 0)
    }, 0)
    setTotalPrice(total)
  }

  const checkCompatibility = () => {
    const warnings = []
    
    if (selectedComponents.processors && selectedComponents.motherboards) {
      const cpu = selectedComponents.processors
      const mobo = selectedComponents.motherboards
      
      if (!cpu.compatibility.some(socket => mobo.compatibility.includes(socket))) {
        warnings.push('CPU and Motherboard socket mismatch!')
      }
    }
    
    if (selectedComponents.memory && selectedComponents.motherboards) {
      const ram = selectedComponents.memory
      const mobo = selectedComponents.motherboards
      
      if (!ram.compatibility.some(type => mobo.compatibility.includes(type))) {
        warnings.push('RAM and Motherboard memory type mismatch!')
      }
    }
    
    setCompatibilityWarnings(warnings)
  }

  const selectComponent = (category, componentId) => {
    const component = mockPcComponents[category].find(comp => comp.id === componentId)
    if (component) {
      setSelectedComponents(prev => ({
        ...prev,
        [category]: component
      }))
    }
  }

  const removeComponent = (category) => {
    setSelectedComponents(prev => {
      const newComponents = { ...prev }
      delete newComponents[category]
      return newComponents
    })
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const getCompletionPercentage = () => {
    const requiredCategories = componentCategories.filter(cat => cat.required)
    const selectedRequired = requiredCategories.filter(cat => selectedComponents[cat.key])
    return Math.round((selectedRequired.length / requiredCategories.length) * 100)
  }

  const isComplete = () => {
    const requiredCategories = componentCategories.filter(cat => cat.required)
    return requiredCategories.every(cat => selectedComponents[cat.key])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header with Animation */}
        <div className="text-center mb-16">
          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Custom PC <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Builder</span>
            </h1>
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse delay-75"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            🚀 Build your dream PC with our intuitive component selector. 
            <br />Choose from premium components and get real-time compatibility checking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Component Selection Area */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Select Components</h3>
              </div>

              {/* Enhanced Component Selection Grid */}
              <div className="space-y-6">
                {componentCategories.map((category, index) => (
                  <div 
                    key={category.key} 
                    className={`group bg-gradient-to-r from-white to-gray-50 border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-cyan-200 ${
                      selectedComponents[category.key] 
                        ? 'border-cyan-300 bg-gradient-to-r from-cyan-50 to-blue-50' 
                        : 'border-gray-200'
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                      <div className="flex items-center min-w-0 flex-1">
                        <div className={`w-20 h-20 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 transition-all duration-300 flex-shrink-0 ${
                          selectedComponents[category.key] 
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg' 
                            : 'bg-gray-100 group-hover:bg-gray-200'
                        }`}>
                          {category.icon ? (
                            <img 
                              src={category.icon} 
                              alt={category.name}
                              className={`w-12 h-12 sm:w-14 sm:h-14 object-contain transition-all duration-300 ${
                                selectedComponents[category.key] 
                                  ? 'brightness-0 invert' 
                                  : ''
                              }`}
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                              }}
                            />
                          ) : null}
                          <span 
                            className={`text-2xl sm:text-3xl transition-all duration-300 ${
                              category.icon ? 'hidden' : 'block'
                            } ${
                              selectedComponents[category.key] 
                                ? 'text-white' 
                                : 'text-gray-700'
                            }`}
                          >
                            {category.fallbackIcon}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                            <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                              {category.name}
                            </h4>
                            {category.required && (
                              <span className="text-red-500 text-xs sm:text-sm font-medium bg-red-50 px-2 py-1 rounded-full self-start">
                                ● Required
                              </span>
                            )}
                          </div>
                          {selectedComponents[category.key] && (
                            <p className="text-sm text-cyan-600 font-medium transition-colors duration-300 mt-1">
                              ✅ {selectedComponents[category.key].name}
                            </p>
                          )}
                        </div>
                      </div>
                      {selectedComponents[category.key] && (
                        <button
                          onClick={() => removeComponent(category.key)}
                          className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-2 sm:px-4 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center justify-center self-start sm:self-center flex-shrink-0"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          Remove
                        </button>
                      )}
                    </div>

                    {/* Enhanced Dropdown Selection - Mobile Optimized */}
                    <div className="space-y-4">
                      {/* Dropdown Section */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Choose {category.name}
                        </label>
                        <div className="relative">
                          <select
                            value={selectedComponents[category.key]?.id || ''}
                            onChange={(e) => e.target.value ? selectComponent(category.key, e.target.value) : removeComponent(category.key)}
                            className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white text-gray-900 font-medium appearance-none cursor-pointer hover:border-gray-300 transition-colors duration-200 text-sm sm:text-base"
                          >
                            <option value="" className="text-gray-500">
                              Select {category.name}...
                            </option>
                            {mockPcComponents[category.key]?.map((component) => (
                              <option 
                                key={component.id} 
                                value={component.id}
                                className="py-2 text-sm sm:text-base"
                              >
                                {/* Mobile: Show brand and price on separate lines */}
                                <span className="sm:hidden">
                                  {component.brand} {component.name.length > 20 ? component.name.substring(0, 20) + '...' : component.name}
                                </span>
                                {/* Desktop: Show full info */}
                                <span className="hidden sm:inline">
                                  {component.brand} {component.name} - {formatPrice(component.price)}
                                </span>
                              </option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-4 pointer-events-none">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Mobile: Show price separately below dropdown */}
                        {selectedComponents[category.key] && (
                          <div className="mt-2 sm:hidden">
                            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-3 border border-cyan-200">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700">Price:</span>
                                <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                  {formatPrice(selectedComponents[category.key].price)}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Enhanced Selected Component Details */}
                      {selectedComponents[category.key] && (
                        <div className="bg-gradient-to-br from-white to-gray-50 p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm">
                          <div className="flex items-start space-x-3 sm:space-x-4 mb-3">
                            <div className="w-16 h-16 sm:w-16 sm:h-16 bg-white rounded-xl shadow-sm border border-gray-200 flex-shrink-0 p-1">
                              <img 
                                src={selectedComponents[category.key].image} 
                                alt={selectedComponents[category.key].name}
                                className="w-full h-full object-contain rounded-lg"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                                {selectedComponents[category.key].name}
                              </h5>
                              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                Brand: {selectedComponents[category.key].brand}
                              </p>
                              {/* Desktop: Show price here */}
                              <p className="hidden sm:block font-bold text-lg bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mt-1">
                                {formatPrice(selectedComponents[category.key].price)}
                              </p>
                            </div>
                          </div>
                          
                          {/* Enhanced Key Specifications */}
                          <div className="space-y-1">
                            <h6 className="text-xs font-semibold text-gray-700 mb-2">Key Specifications:</h6>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
                              {Object.entries(selectedComponents[category.key].specifications).slice(0, 4).map(([key, value]) => (
                                <div key={key} className="flex justify-between sm:flex-col sm:justify-start">
                                  <span className="font-semibold text-gray-700">{key}:</span>
                                  <span className="text-gray-600 sm:font-medium">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Mobile: Quick component options */}
                      <div className="sm:hidden">
                        {!selectedComponents[category.key] && (
                          <div className="space-y-2">
                            <h6 className="text-xs font-semibold text-gray-700">Quick Select:</h6>
                            <div className="grid grid-cols-2 gap-2">
                              {mockPcComponents[category.key]?.slice(0, 4).map((component) => (
                                <button
                                  key={component.id}
                                  onClick={() => selectComponent(category.key, component.id)}
                                  className="p-2 border border-gray-200 rounded-lg hover:border-cyan-300 hover:bg-cyan-50 transition-colors text-left"
                                >
                                  <div className="text-xs font-medium text-gray-900 truncate">
                                    {component.brand}
                                  </div>
                                  <div className="text-xs text-gray-600 truncate">
                                    {component.name.substring(0, 15)}...
                                  </div>
                                  <div className="text-xs font-bold text-cyan-600">
                                    {formatPrice(component.price)}
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Build Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM14 5a2 2 0 012-2v1a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Build Summary</h3>
                </div>
              </div>
              
              <div className="relative mb-6">
                <input
                  type="text"
                  value={buildName}
                  onChange={(e) => setBuildName(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-white"
                  placeholder="Enter build name"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Enhanced Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm font-semibold text-gray-700 mb-3">
                  <span>Build Progress</span>
                  <span className="text-cyan-600">{getCompletionPercentage()}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full transition-all duration-500 shadow-sm relative overflow-hidden" 
                    style={{ width: `${getCompletionPercentage()}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Compatibility Warnings */}
              {compatibilityWarnings.length > 0 && (
                <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl">
                  <h4 className="text-sm font-bold text-red-800 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Compatibility Issues
                  </h4>
                  {compatibilityWarnings.map((warning, index) => (
                    <p key={index} className="text-xs text-red-700">{warning}</p>
                  ))}
                </div>
              )}

              {/* Enhanced Selected Components Summary */}
              <div className="space-y-3 mb-8">
                <h4 className="text-sm font-bold text-gray-800 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                  </svg>
                  Components:
                </h4>
                <div className="space-y-2">
                  {componentCategories.map((category) => (
                    <div key={category.key} className="flex items-center justify-between p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                      <span className="text-sm text-gray-700 flex items-center">
                        {category.icon ? (
                          <img 
                            src={category.icon} 
                            alt={category.name}
                            className="w-10 h-10 object-contain mr-3"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'inline-block';
                            }}
                          />
                        ) : null}
                        <span 
                          className={`mr-3 text-lg ${category.icon ? 'hidden' : 'inline-block'}`}
                        >
                          {category.fallbackIcon}
                        </span>
                        {category.name.split(' ')[0]}
                      </span>
                      {selectedComponents[category.key] ? (
                        <div className="text-right">
                          <div className="font-semibold text-gray-900 text-xs">
                            {selectedComponents[category.key].brand}
                          </div>
                          <div className="text-xs text-cyan-600 font-medium">
                            {formatPrice(selectedComponents[category.key].price)}
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-400 text-xs">Not selected</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Total Price */}
              <div className="border-t-2 border-gray-200 pt-6 mb-8">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
                  <span className="text-xl font-bold text-gray-900">Total:</span>
                  <span className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="space-y-4">
                <button
                  disabled={!isComplete() || compatibilityWarnings.length > 0}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 transform ${
                    isComplete() && compatibilityWarnings.length === 0
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 hover:scale-105 shadow-lg hover:shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  🛒 Add to Cart
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 px-4 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium">
                    💾 Save Build
                  </button>
                  
                  <button className="py-3 px-4 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium">
                    📤 Share Build
                  </button>
                </div>
              </div>

              {/* Enhanced Help Text */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <p className="text-xs text-gray-700 leading-relaxed">
                  <span className="font-semibold">💡 Pro Tip:</span> Need assistance? Our PC building experts are ready to help you optimize your build for maximum performance and value!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomPcBuild