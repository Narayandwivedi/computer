import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLaptops();
  }, []);

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

      // Sort by newest first (default)
      laptopData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      setLaptops(laptopData);
    } catch (error) {
      console.error('Error fetching laptops:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Laptops Collection
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive range of gaming and office laptops from top brands
          </p>
        </div>


        {/* Laptops Grid */}
        {laptops.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v6h10V6H5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Laptops Found</h3>
            <p className="text-gray-600">
              No laptops are available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {laptops.map((laptop) => (
              <div 
                key={laptop._id} 
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => handleProductClick(laptop)}
              >
                {/* Product Image */}
                <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                  {laptop.images && laptop.images.length > 0 ? (
                    <img
                      src={laptop.images[0]}
                      alt={laptop.seoTitle || laptop.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                      }}
                    />
                  ) : (
                    <div className="text-gray-400">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v6h10V6H5z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-3 leading-tight">
                    {laptop.seoTitle || laptop.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">Brand:</span> {laptop.brand}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-gray-900">
                        {formatPrice(laptop.price)}
                      </span>
                      {laptop.originalPrice && laptop.originalPrice > laptop.price && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(laptop.originalPrice)}
                        </span>
                      )}
                    </div>
                    
                    {/* Stock Status */}
                    <div className="text-right">
                      {laptop.stockQuantity > 0 ? (
                        <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                          In Stock
                        </span>
                      ) : (
                        <span className="inline-block px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                          Out of Stock
                        </span>
                      )}
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