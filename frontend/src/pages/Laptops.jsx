import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    fetchLaptops();
  }, []);

  useEffect(() => {
    filterAndSortLaptops();
  }, [laptops, sortBy, priceRange, selectedBrand]);

  const fetchLaptops = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch laptops from the backend
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/products/category/laptops`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch laptops');
      }

      const data = await response.json();
      const laptopData = data.data || [];

      setLaptops(laptopData);
    } catch (error) {
      console.error('Error fetching laptops:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortLaptops = () => {
    let filtered = [...laptops];

    // Filter by brand
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(laptop => 
        laptop.brand.toLowerCase() === selectedBrand.toLowerCase()
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const ranges = {
        'under-50k': [0, 50000],
        '50k-100k': [50000, 100000],
        '100k-150k': [100000, 150000],
        'above-150k': [150000, Infinity]
      };
      const [min, max] = ranges[priceRange];
      filtered = filtered.filter(laptop => 
        laptop.price >= min && laptop.price < max
      );
    }

    // Sort laptops
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => (a.seoTitle || a.name).localeCompare(b.seoTitle || b.name));
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
    }

    setFilteredLaptops(filtered);
  };

  const getBrands = () => {
    const brands = [...new Set(laptops.map(laptop => laptop.brand))];
    return brands.sort();
  };

  const handleProductClick = (laptop) => {
    // Use hierarchical URL structure for laptops
    const baseUrl = `/laptops/${laptop.subCategory}/product`;
    navigate(`${baseUrl}/${laptop.slug || laptop._id}`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading laptops...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="text-red-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Laptops</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={fetchLaptops}
              className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      {/* Compact Hero Section */}
      <div className="relative bg-gradient-to-r from-cyan-600/5 via-blue-600/5 to-purple-600/5 py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Gaming Laptops
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover high-performance gaming laptops from top brands
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Controls */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Left Controls */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Brand Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                >
                  <option value="all">All Brands</option>
                  {getBrands().map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                >
                  <option value="all">All Prices</option>
                  <option value="under-50k">Under ₹50,000</option>
                  <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                  <option value="100k-150k">₹1,00,000 - ₹1,50,000</option>
                  <option value="above-150k">Above ₹1,50,000</option>
                </select>
              </div>

              {/* Sort */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center">
              {/* Results Count */}
              <div className="text-sm text-gray-600">
                {filteredLaptops.length} laptops found
              </div>
            </div>
          </div>
        </div>

        {/* Laptops Grid */}
        {filteredLaptops.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-6">
              <svg className="w-20 h-20 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v6h10V6H5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Laptops Found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to find the perfect laptop
            </p>
            <button
              onClick={() => {
                setSortBy('newest');
                setPriceRange('all');
                setSelectedBrand('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-colors font-medium"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLaptops.map((laptop) => (
              <div 
                key={laptop._id} 
                className="group cursor-pointer transition-all duration-300 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/25 transform hover:scale-105"
                onClick={() => handleProductClick(laptop)}
              >
                {/* Product Image */}
                <div className="h-48 bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
                  {laptop.images && laptop.images.length > 0 ? (
                    <img
                      src={laptop.images[0]}
                      alt={laptop.seoTitle || laptop.name}
                      className="max-h-full max-w-full object-contain relative z-10"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=Laptop';
                      }}
                    />
                  ) : (
                    <div className="text-gray-400 relative z-10">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v6h10V6H5z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full font-medium">
                      {laptop.brand}
                    </span>
                    {laptop.stockQuantity > 0 ? (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                        In Stock
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium">
                        Out of Stock
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-3 group-hover:text-cyan-700 transition-colors text-lg line-clamp-2">
                    {laptop.seoTitle || laptop.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        {formatPrice(laptop.price)}
                      </span>
                      {laptop.originalPrice && laptop.originalPrice > laptop.price && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(laptop.originalPrice)}
                        </span>
                      )}
                    </div>
                    
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-2 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-shadow">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Laptops;