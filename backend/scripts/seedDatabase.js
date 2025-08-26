const mongoose = require('mongoose');
const connectDB = require('../config/mongodb');
const { seedDatabase } = require('../seeders/sampleData');

// Run database seeding
async function runSeeder() {
  try {
    // Connect to MongoDB
    await connectDB();
    console.log('📦 Connected to MongoDB');
    
    // Run seeding
    const result = await seedDatabase();
    
    console.log('\n📊 Seeding Summary:');
    console.log(`Categories: ${result.categories}`);
    console.log(`Subcategories: ${result.subcategories}`);
    console.log(`Brands: ${result.brands}`);
    console.log(`Products: ${result.products}`);
    
    console.log('\n🎉 Database seeded successfully!');
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  runSeeder();
}

module.exports = runSeeder;