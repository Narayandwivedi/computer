// Amazon-style SEO Title Generator for Admin Panel

export const generateSEOTitle = (productData) => {
  const { brand, model, subCategory, specifications, features, weight } = productData;
  const specs = new Map(Object.entries(specifications || {}));
  const baseTitle = `${brand || ''} ${model || ''}`.trim();
  
  // If no brand or model, return empty (let user fill manually)
  if (!baseTitle) {
    return '';
  }
  
  switch (subCategory) {
    case 'gaming-laptop':
    case 'office-laptop':
      // Build specs array only with non-empty values
      const laptopSpecs = [
        specs.get('RAM'),
        specs.get('Storage'), 
        specs.get('Graphics Card') || specs.get('Graphics'),
        weight ? `${weight}g` : null
      ].filter(Boolean);
      
      const specsText = laptopSpecs.length > 0 ? `(${laptopSpecs.join('/')})` : '';
      
      return [
        baseTitle,
        specs.get('Processor'),
        specs.get('Display Size') ? `${specs.get('Display Size')} ${specs.get('Display Resolution') || ''} Gaming Laptop` : 'Laptop',
        specsText
      ].filter(Boolean).join(', ');
      
    case 'motherboards':
      return [
        `${baseTitle} Motherboard`,
        specs.get('Form Factor') || '',
        specs.get('Socket') ? `- Supports ${specs.get('Socket')} Processors` : '',
        specs.get('Chipset') ? `${specs.get('Chipset')}` : '',
        specs.get('Memory Support') ? `- ${specs.get('Memory Support')} Memory` : '',
        specs.get('PCIe Slots') || '',
        specs.get('Network') || ''
      ].filter(Boolean).join(', ');
      
    case 'mouse':
      const connectivity = specs.get('Connectivity') || 'Wired';
      const dpi = specs.get('DPI');
      const buttons = specs.get('Buttons');
      const sensor = specs.get('Sensor');
      
      return [
        baseTitle,
        `${connectivity} Gaming Mouse`,
        buttons ? `with ${buttons}` : '',
        sensor ? `${sensor} Sensor` : '',
        dpi ? `up to ${dpi}` : '',
        ...(features || []).slice(0, 3)
      ].filter(Boolean).join(', ');
      
    case 'keyboard':
      return [
        baseTitle,
        specs.get('Connectivity') || 'Wired',
        'Gaming Keyboard',
        specs.get('Switch Type') ? `with ${specs.get('Switch Type')} Switches` : '',
        specs.get('Layout') || '',
        specs.get('Backlighting') || '',
        ...(features || []).slice(0, 3)
      ].filter(Boolean).join(', ');
      
    case 'graphics-card':
      return [
        baseTitle,
        'Graphics Card',
        specs.get('Memory') || '',
        specs.get('Base Clock') || '',
        specs.get('Boost Clock') || '',
        specs.get('CUDA Cores') ? `${specs.get('CUDA Cores')} CUDA Cores` : '',
        ...(features || []).slice(0, 2)
      ].filter(Boolean).join(', ');
      
    case 'processors':
      return [
        baseTitle,
        'Processor',
        specs.get('Cores') ? `${specs.get('Cores')} Cores` : '',
        specs.get('Threads') ? `${specs.get('Threads')} Threads` : '',
        specs.get('Base Clock P-Core') || '',
        specs.get('Max Boost Clock') ? `Up to ${specs.get('Max Boost Clock')}` : '',
        specs.get('Socket') || ''
      ].filter(Boolean).join(', ');
      
    case 'monitors':
      return [
        baseTitle,
        specs.get('Screen Size') ? `${specs.get('Screen Size')} Monitor` : 'Monitor',
        specs.get('Resolution') || '',
        specs.get('Panel Type') || '',
        specs.get('Refresh Rate') || '',
        specs.get('Response Time') ? `${specs.get('Response Time')} Response` : '',
        specs.get('Adaptive Sync') || '',
        specs.get('HDR') || '',
        ...(features || []).slice(0, 3)
      ].filter(Boolean).join(', ');
      
    case 'headset':
      return [
        baseTitle,
        specs.get('Connectivity') || 'Wired',
        'Gaming Headset',
        specs.get('Driver Size') ? `with ${specs.get('Driver Size')}` : '',
        specs.get('Frequency Response') || '',
        specs.get('Surround Sound') || '',
        specs.get('Microphone') ? `${specs.get('Microphone')}` : '',
        ...(features || []).slice(0, 2)
      ].filter(Boolean).join(', ');
      
    default:
      // Generic title for other categories
      return [
        baseTitle,
        subCategory?.replace('-', ' ') || '',
        ...(features || []).slice(0, 3)
      ].filter(Boolean).join(', ');
  }
};

// Helper function to preview title as you type
export const generateTitlePreview = (productData) => {
  const title = generateSEOTitle(productData);
  return title || `${productData.brand || ''} ${productData.model || ''}`.trim();
};

// Extract key specs for quick title generation
export const getKeySpecs = (subCategory, specifications) => {
  const specs = new Map(Object.entries(specifications || {}));
  
  switch (subCategory) {
    case 'gaming-laptop':
    case 'office-laptop':
      return {
        processor: specs.get('Processor'),
        ram: specs.get('RAM'),
        storage: specs.get('Storage'),
        graphics: specs.get('Graphics Card') || specs.get('Graphics'),
        display: specs.get('Display Size')
      };
      
    case 'mouse':
      return {
        dpi: specs.get('DPI'),
        connectivity: specs.get('Connectivity'),
        buttons: specs.get('Buttons'),
        sensor: specs.get('Sensor')
      };
      
    case 'keyboard':
      return {
        switches: specs.get('Switch Type'),
        layout: specs.get('Layout'),
        connectivity: specs.get('Connectivity'),
        lighting: specs.get('Backlighting')
      };
      
    case 'monitors':
      return {
        size: specs.get('Screen Size'),
        resolution: specs.get('Resolution'),
        refreshRate: specs.get('Refresh Rate'),
        panelType: specs.get('Panel Type')
      };
      
    default:
      return {};
  }
};