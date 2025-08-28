export const CATEGORIES = {
  'pc-parts': 'PC Parts',
  'pc-builds': 'PC Builds',
  'laptops': 'Laptops',
  'computer-accessories': 'Computer Accessories'
};

export const SUBCATEGORIES = [
  { value: 'graphics-card', label: 'Graphics Cards' },
  { value: 'processors', label: 'Processors' },
  { value: 'motherboards', label: 'Motherboards' },
  { value: 'memory', label: 'Memory (RAM)' },
  { value: 'storage', label: 'Storage (SSD)' },
  { value: 'monitors', label: 'Monitors' }
];

export const CATEGORY_SUBCATEGORIES = {
  'pc-parts': SUBCATEGORIES,
  'pc-builds': [
    { value: 'gaming-build', label: 'Gaming Build' },
    { value: 'office-build', label: 'Office Build' },
    { value: 'workstation-build', label: 'Workstation Build' },
    { value: 'budget-build', label: 'Budget Build' },
    { value: 'high-end-build', label: 'High-End Build' },
    { value: 'streaming-build', label: 'Streaming Build' }
  ],
  'laptops': [
    { value: 'gaming-laptop', label: 'Gaming Laptop' },
    { value: 'office-laptop', label: 'Office Laptop' }
  ],
  'computer-accessories': [
    { value: 'keyboard', label: 'Keyboard' },
    { value: 'mouse', label: 'Mouse' },
    { value: 'headset', label: 'Gaming Headset' },
    { value: 'monitor', label: 'Gaming Monitor' },
    { value: 'mousepad', label: 'Mouse Pad' },
    { value: 'controller', label: 'Game Controller' },
    { value: 'webcam', label: 'Webcam' },
    { value: 'microphone', label: 'Microphone' },
    { value: 'laptop-bag', label: 'Laptop Bag' },
    { value: 'gaming-chair', label: 'Gaming Chair' },
    { value: 'speakers', label: 'Speakers' },
    { value: 'cooling-pad', label: 'Cooling Pad' },
    { value: 'usb-hub', label: 'USB Hub' },
    { value: 'docking-station', label: 'Docking Station' },
    { value: 'cable', label: 'Cables' },
    { value: 'adapter', label: 'Adapters' }
  ]
};

export const getCategoriesArray = () => {
  return Object.entries(CATEGORIES).map(([value, label]) => ({ value, label }));
};

export const getSubcategoriesForCategory = (category) => {
  return CATEGORY_SUBCATEGORIES[category] || [];
};