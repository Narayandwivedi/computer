// Category constants for frontend use
export const CATEGORIES = {
  'pc-parts': {
    name: 'PC Parts',
    description: 'Computer components and hardware parts',
    subcategories: {
      'graphics-cards': 'Graphics Cards',
      'processors': 'Processors (CPU)', 
      'motherboards': 'Motherboards',
      'memory': 'Memory (RAM)',
      'storage': 'Storage (SSD)'
    }
  },
  'pc-builds': {
    name: 'PC Builds',
    description: 'Custom and pre-built computer systems',
    subcategories: {
      'custom-builds': 'Custom Builds',
      'pre-built': 'Pre-Built Systems'
    }
  },
  'gaming-laptops': {
    name: 'Gaming Laptops',
    description: 'High-performance gaming and workstation laptops',
    subcategories: {
      '15-inch': '15" Gaming Laptops',
      '17-inch': '17" Gaming Laptops',
      'workstation': 'Workstation Laptops'
    }
  },
  'gaming-accessories': {
    name: 'Gaming Accessories',
    description: 'Gaming peripherals and accessories',
    subcategories: {
      'keyboards': 'Gaming Keyboards',
      'mice': 'Gaming Mice', 
      'headsets': 'Headsets',
      'monitors': 'Monitors'
    }
  }
};

// Helper functions
export const getCategoryName = (categorySlug) => {
  return CATEGORIES[categorySlug]?.name || categorySlug;
};

export const getSubcategoryName = (categorySlug, subcategorySlug) => {
  return CATEGORIES[categorySlug]?.subcategories?.[subcategorySlug] || subcategorySlug;
};

export const getCategoryOptions = () => {
  return Object.entries(CATEGORIES).map(([slug, data]) => ({
    value: slug,
    label: data.name,
    description: data.description
  }));
};

export const getSubcategoryOptions = (categorySlug) => {
  const category = CATEGORIES[categorySlug];
  if (!category) return [];
  
  return Object.entries(category.subcategories).map(([slug, name]) => ({
    value: slug,
    label: name
  }));
};

// Validation helpers
export const isValidCategory = (category) => {
  return Object.keys(CATEGORIES).includes(category);
};

export const isValidSubcategory = (category, subcategory) => {
  return CATEGORIES[category]?.subcategories?.[subcategory] !== undefined;
};