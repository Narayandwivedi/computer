import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Memory = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({
    brand: '',
    minPrice: '',
    maxPrice: '',
    page: 1
  })

  const API_BASE_URL = 'http://localhost:5000'

  const fetchMemory = async () => {
    setLoading(true)
    try {
      const queryParams = new URLSearchParams()
      if (filters.brand) queryParams.append('brand', filters.brand)
      if (filters.minPrice) queryParams.append('minPrice', filters.minPrice)
      if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice)
      queryParams.append('page', filters.page)
      queryParams.append('limit', '12')

      const response = await fetch(`${API_BASE_URL}/api/products/category/pc-parts/subcategory/memory?${queryParams}`)
      const data = await response.json()

      if (data.success) {
        setProducts(data.data)
        setError(null)
      } else {
        setError(data.message)
      }
    } catch (err) {
      setError('Failed to fetch memory')
      console.error('Error fetching memory:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMemory()
  }, [filters])

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value, page: 1 }))
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
            <span className="ml-3 text-gray-600">Loading Memory...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Memory <span className="text-cyan-600">(RAM)</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-performance DDR4 and DDR5 memory modules for gaming, content creation, and professional workloads.
            Boost your system's speed and multitasking capabilities.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
              <select
                value={filters.brand}
                onChange={(e) => handleFilterChange('brand', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="">All Brands</option>
                <option value="Corsair">Corsair</option>
                <option value="G.Skill">G.Skill</option>
                <option value="Kingston">Kingston</option>
                <option value="Crucial">Crucial</option>
                <option value="Teamgroup">Teamgroup</option>
                <option value="ADATA">ADATA</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
              <input
                type="number"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                placeholder="₹0"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
              <input
                type="number"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                placeholder="₹50000"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={() => setFilters({ brand: '', minPrice: '', maxPrice: '', page: 1 })}
                className="w-full bg-gray-500 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product._id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Product Image */}
                <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                  {product.images && product.images.length > 0 ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="text-gray-400">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-2">
                    Brand: <span className="font-medium">{product.brand}</span>
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-cyan-600">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.stockQuantity > 0 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.stockQuantity > 0 ? 'In Stock' : 'Out of Stock'}
                    </div>
                  </div>

                  <button 
                    onClick={() => navigate(`/pc-parts/memory/product/${product._id}`)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Memory Found</h3>
            <p className="text-gray-500">Try adjusting your filters or check back later for new products.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Memory