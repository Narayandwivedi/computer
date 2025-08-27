const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-gray-500 text-sm">Total Products</p>
              <p className="text-2xl font-semibold">1,234</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-gray-500 text-sm">Total Users</p>
              <p className="text-2xl font-semibold">856</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-gray-500 text-sm">Total Orders</p>
              <p className="text-2xl font-semibold">2,341</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-gray-500 text-sm">Revenue</p>
              <p className="text-2xl font-semibold">$45,678</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="font-medium">#ORD-001</p>
                <p className="text-sm text-gray-500">John Doe</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$299.99</p>
                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                  Completed
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="font-medium">#ORD-002</p>
                <p className="text-sm text-gray-500">Jane Smith</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$199.99</p>
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                  Pending
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="font-medium">#ORD-003</p>
                <p className="text-sm text-gray-500">Bob Johnson</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$599.99</p>
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                  Processing
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Top Selling Products</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="font-medium">Gaming Laptop RTX 4060</p>
                <p className="text-sm text-gray-500">Laptop</p>
              </div>
              <div className="text-right">
                <p className="font-medium">124 sold</p>
                <p className="text-sm text-gray-500">$1,299.99</p>
              </div>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="font-medium">RTX 4070 Graphics Card</p>
                <p className="text-sm text-gray-500">GPU</p>
              </div>
              <div className="text-right">
                <p className="font-medium">89 sold</p>
                <p className="text-sm text-gray-500">$599.99</p>
              </div>
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="font-medium">32GB DDR4 RAM</p>
                <p className="text-sm text-gray-500">Memory</p>
              </div>
              <div className="text-right">
                <p className="font-medium">156 sold</p>
                <p className="text-sm text-gray-500">$149.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;