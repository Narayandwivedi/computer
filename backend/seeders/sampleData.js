const mongoose = require('mongoose');
const { Category, Subcategory, Brand, Product } = require('../models');

// Sample data for seeding the database
const sampleCategories = [
  {
    name: 'PC Parts',
    description: 'Computer components and hardware parts for building custom PCs'
  },
  {
    name: 'Gaming Laptops',
    description: 'High-performance laptops designed for gaming and professional work'
  },
  {
    name: 'Accessories',
    description: 'Computer accessories including keyboards, mice, headsets, and more'
  },
  {
    name: 'Pre-Built Systems',
    description: 'Complete pre-assembled computer systems ready to use'
  }
];

const sampleSubcategories = [
  // PC Parts subcategories
  { name: 'Graphics Cards', categoryName: 'PC Parts' },
  { name: 'Processors (CPU)', categoryName: 'PC Parts' },
  { name: 'Motherboards', categoryName: 'PC Parts' },
  { name: 'Memory (RAM)', categoryName: 'PC Parts' },
  { name: 'Storage (SSD)', categoryName: 'PC Parts' },
  { name: 'Power Supplies', categoryName: 'PC Parts' },
  { name: 'Cases', categoryName: 'PC Parts' },
  { name: 'Cooling Systems', categoryName: 'PC Parts' },
  
  // Gaming Laptops subcategories
  { name: 'Gaming Laptops 15"', categoryName: 'Gaming Laptops' },
  { name: 'Gaming Laptops 17"', categoryName: 'Gaming Laptops' },
  { name: 'Workstation Laptops', categoryName: 'Gaming Laptops' },
  
  // Accessories subcategories
  { name: 'Gaming Keyboards', categoryName: 'Accessories' },
  { name: 'Gaming Mice', categoryName: 'Accessories' },
  { name: 'Headsets', categoryName: 'Accessories' },
  { name: 'Monitors', categoryName: 'Accessories' },
  
  // Pre-Built Systems subcategories
  { name: 'Gaming PCs', categoryName: 'Pre-Built Systems' },
  { name: 'Office PCs', categoryName: 'Pre-Built Systems' },
  { name: 'Workstation PCs', categoryName: 'Pre-Built Systems' }
];

const sampleBrands = [
  { name: 'NVIDIA', description: 'Leading graphics card manufacturer' },
  { name: 'AMD', description: 'CPU and GPU manufacturer' },
  { name: 'Intel', description: 'Leading CPU manufacturer' },
  { name: 'ASUS', description: 'Computer hardware and electronics company' },
  { name: 'MSI', description: 'Gaming hardware specialist' },
  { name: 'Gigabyte', description: 'Motherboard and graphics card manufacturer' },
  { name: 'Corsair', description: 'Gaming peripherals and components' },
  { name: 'G.Skill', description: 'Memory specialist' },
  { name: 'Samsung', description: 'Storage and memory solutions' },
  { name: 'Western Digital', description: 'Storage solutions' },
  { name: 'Cooler Master', description: 'Cooling and case manufacturer' }
];

const sampleProducts = [
  {
    name: 'NVIDIA GeForce RTX 4090 24GB GDDR6X Graphics Card',
    description: 'The ultimate GeForce RTX 40 Series graphics card for gamers and creators. Built with the ultra-efficient NVIDIA Ada Lovelace architecture.',
    shortDescription: 'Ultimate gaming graphics card with 24GB GDDR6X memory',
    categoryName: 'PC Parts',
    subcategoryName: 'Graphics Cards',
    brandName: 'NVIDIA',
    sku: 'RTX4090-24GB',
    price: 129999,
    originalPrice: 149999,
    stockQuantity: 15,
    specifications: [
      { name: 'Memory Size', value: '24GB GDDR6X', group: 'Memory' },
      { name: 'Memory Interface', value: '384-bit', group: 'Memory' },
      { name: 'Base Clock', value: '2230 MHz', group: 'Performance' },
      { name: 'Boost Clock', value: '2520 MHz', group: 'Performance' },
      { name: 'CUDA Cores', value: '16384', group: 'Performance' },
      { name: 'Interface', value: 'PCIe 4.0 x16', group: 'Connectivity' }
    ],
    isFeatured: true
  },
  {
    name: 'AMD Ryzen 9 7900X 12-Core Processor',
    description: 'High-performance desktop processor with 12 cores and 24 threads for gaming and content creation.',
    shortDescription: '12-core processor with excellent gaming performance',
    categoryName: 'PC Parts',
    subcategoryName: 'Processors (CPU)',
    brandName: 'AMD',
    sku: 'R9-7900X',
    price: 42999,
    originalPrice: 47999,
    stockQuantity: 25,
    specifications: [
      { name: 'Cores', value: '12', group: 'Performance' },
      { name: 'Threads', value: '24', group: 'Performance' },
      { name: 'Base Clock', value: '4.7 GHz', group: 'Performance' },
      { name: 'Max Boost Clock', value: '5.6 GHz', group: 'Performance' },
      { name: 'Cache', value: '76MB', group: 'Memory' },
      { name: 'Socket', value: 'AM5', group: 'Compatibility' }
    ],
    isFeatured: true
  },
  {
    name: 'ASUS ROG Strix X670E-E Gaming WiFi Motherboard',
    description: 'Premium AMD X670E motherboard with PCIe 5.0, DDR5 support, and advanced cooling solutions.',
    shortDescription: 'Premium X670E motherboard with latest features',
    categoryName: 'PC Parts',
    subcategoryName: 'Motherboards',
    brandName: 'ASUS',
    sku: 'ROG-X670E-E',
    price: 35999,
    originalPrice: 39999,
    stockQuantity: 12,
    specifications: [
      { name: 'Socket', value: 'AM5', group: 'Compatibility' },
      { name: 'Chipset', value: 'AMD X670E', group: 'Platform' },
      { name: 'Memory Support', value: 'DDR5-6000+', group: 'Memory' },
      { name: 'PCIe Slots', value: '4x PCIe 5.0/4.0', group: 'Expansion' },
      { name: 'WiFi', value: 'WiFi 6E', group: 'Connectivity' },
      { name: 'Form Factor', value: 'ATX', group: 'Physical' }
    ]
  }
];

// Function to seed the database
async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Clear existing data
    await Category.deleteMany({});
    await Subcategory.deleteMany({});
    await Brand.deleteMany({});
    await Product.deleteMany({});
    console.log('✅ Cleared existing data');
    
    // Seed Categories
    const createdCategories = await Category.insertMany(sampleCategories);
    console.log(`✅ Created ${createdCategories.length} categories`);
    
    // Create category lookup map
    const categoryMap = {};
    createdCategories.forEach(cat => {
      categoryMap[cat.name] = cat._id;
    });
    
    // Seed Subcategories
    const subcategoriesWithIds = sampleSubcategories.map(sub => ({
      ...sub,
      categoryId: categoryMap[sub.categoryName]
    }));
    const createdSubcategories = await Subcategory.insertMany(subcategoriesWithIds);
    console.log(`✅ Created ${createdSubcategories.length} subcategories`);
    
    // Create subcategory lookup map
    const subcategoryMap = {};
    createdSubcategories.forEach(sub => {
      subcategoryMap[sub.name] = sub._id;
    });
    
    // Seed Brands
    const createdBrands = await Brand.insertMany(sampleBrands);
    console.log(`✅ Created ${createdBrands.length} brands`);
    
    // Create brand lookup map
    const brandMap = {};
    createdBrands.forEach(brand => {
      brandMap[brand.name] = brand._id;
    });
    
    // Seed Products
    const productsWithIds = sampleProducts.map(product => ({
      ...product,
      categoryId: categoryMap[product.categoryName],
      subcategoryId: subcategoryMap[product.subcategoryName],
      brandId: brandMap[product.brandName],
      // Remove the helper fields
      categoryName: undefined,
      subcategoryName: undefined,
      brandName: undefined
    }));
    
    const createdProducts = await Product.insertMany(productsWithIds);
    console.log(`✅ Created ${createdProducts.length} products`);
    
    console.log('🎉 Database seeding completed successfully!');
    
    return {
      categories: createdCategories.length,
      subcategories: createdSubcategories.length,
      brands: createdBrands.length,
      products: createdProducts.length
    };
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

module.exports = { seedDatabase, sampleCategories, sampleSubcategories, sampleBrands, sampleProducts };