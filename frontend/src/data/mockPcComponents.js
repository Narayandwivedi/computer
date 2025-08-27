export const mockPcComponents = {
  processors: [
    {
      id: '1',
      name: 'AMD Ryzen 9 7900X',
      brand: 'AMD',
      price: 42999,
      image: '/cpu-amd.webp',
      specifications: {
        'Cores': '12',
        'Threads': '24',
        'Base Clock': '4.7 GHz',
        'Boost Clock': '5.6 GHz',
        'Socket': 'AM5',
        'TDP': '170W'
      },
      compatibility: ['AM5']
    },
    {
      id: '2',
      name: 'Intel Core i7-13700K',
      brand: 'Intel',
      price: 38999,
      image: '/cpu-intel.webp',
      specifications: {
        'Cores': '16 (8P + 8E)',
        'Threads': '24',
        'Base Clock P-Core': '3.4 GHz',
        'Max Boost Clock': '5.4 GHz',
        'Socket': 'LGA1700',
        'TDP': '125W'
      },
      compatibility: ['LGA1700']
    },
    {
      id: '3',
      name: 'AMD Ryzen 5 7600X',
      brand: 'AMD',
      price: 22999,
      image: '/cpu-amd.webp',
      specifications: {
        'Cores': '6',
        'Threads': '12',
        'Base Clock': '4.7 GHz',
        'Boost Clock': '5.3 GHz',
        'Socket': 'AM5',
        'TDP': '105W'
      },
      compatibility: ['AM5']
    }
  ],
  
  'graphics-card': [
    {
      id: '1',
      name: 'NVIDIA RTX 4080',
      brand: 'ASUS',
      price: 89999,
      image: '/gpu-nvidia.webp',
      specifications: {
        'Memory': '16GB GDDR6X',
        'Base Clock': '2205 MHz',
        'Boost Clock': '2505 MHz',
        'Memory Interface': '256-bit',
        'Power Consumption': '320W'
      },
      compatibility: ['PCIe 4.0']
    },
    {
      id: '2',
      name: 'AMD Radeon RX 7800 XT',
      brand: 'Sapphire',
      price: 54999,
      image: '/gpu-amd.webp',
      specifications: {
        'Memory': '16GB GDDR6',
        'Base Clock': '2124 MHz',
        'Boost Clock': '2430 MHz',
        'Memory Interface': '256-bit',
        'Power Consumption': '263W'
      },
      compatibility: ['PCIe 4.0']
    },
    {
      id: '3',
      name: 'NVIDIA RTX 4060 Ti',
      brand: 'MSI',
      price: 42999,
      image: '/gpu-nvidia.webp',
      specifications: {
        'Memory': '8GB GDDR6X',
        'Base Clock': '2310 MHz',
        'Boost Clock': '2535 MHz',
        'Memory Interface': '128-bit',
        'Power Consumption': '160W'
      },
      compatibility: ['PCIe 4.0']
    }
  ],
  
  motherboards: [
    {
      id: '1',
      name: 'ASUS ROG Strix X670E-E Gaming',
      brand: 'ASUS',
      price: 32999,
      image: '/motherboard-asus.webp',
      specifications: {
        'Socket': 'AM5',
        'Chipset': 'X670E',
        'Form Factor': 'ATX',
        'Memory Support': 'DDR5-5600',
        'Memory Slots': '4x DIMM',
        'Max Memory': '128GB'
      },
      compatibility: ['AM5', 'DDR5', 'ATX']
    },
    {
      id: '2',
      name: 'MSI Z790 Gaming Plus WiFi',
      brand: 'MSI',
      price: 24999,
      image: '/motherboard-msi.webp',
      specifications: {
        'Socket': 'LGA1700',
        'Chipset': 'Z790',
        'Form Factor': 'ATX',
        'Memory Support': 'DDR5-5600',
        'Memory Slots': '4x DIMM',
        'Max Memory': '128GB'
      },
      compatibility: ['LGA1700', 'DDR5', 'ATX']
    },
    {
      id: '3',
      name: 'Gigabyte B650 Aorus Elite AX',
      brand: 'Gigabyte',
      price: 18999,
      image: '/motherboard-gigabyte.webp',
      specifications: {
        'Socket': 'AM5',
        'Chipset': 'B650',
        'Form Factor': 'ATX',
        'Memory Support': 'DDR5-4800',
        'Memory Slots': '4x DIMM',
        'Max Memory': '128GB'
      },
      compatibility: ['AM5', 'DDR5', 'ATX']
    }
  ],
  
  memory: [
    {
      id: '1',
      name: 'G.Skill Trident Z5 RGB 32GB (2x16GB)',
      brand: 'G.Skill',
      price: 16999,
      image: '/ram-gskill.webp',
      specifications: {
        'Capacity': '32GB (2x16GB)',
        'Memory Type': 'DDR5',
        'Speed': '5600 MHz',
        'Timings': 'CL36-36-36-96',
        'Voltage': '1.25V'
      },
      compatibility: ['DDR5']
    },
    {
      id: '2',
      name: 'Corsair Vengeance RGB Pro 16GB (2x8GB)',
      brand: 'Corsair',
      price: 8999,
      image: '/ram-corsair.webp',
      specifications: {
        'Capacity': '16GB (2x8GB)',
        'Memory Type': 'DDR4',
        'Speed': '3600 MHz',
        'Timings': 'CL18-22-22-42',
        'Voltage': '1.35V'
      },
      compatibility: ['DDR4']
    },
    {
      id: '3',
      name: 'Kingston Fury Beast 32GB (2x16GB)',
      brand: 'Kingston',
      price: 12999,
      image: '/ram-kingston.webp',
      specifications: {
        'Capacity': '32GB (2x16GB)',
        'Memory Type': 'DDR5',
        'Speed': '5200 MHz',
        'Timings': 'CL40-40-40-80',
        'Voltage': '1.25V'
      },
      compatibility: ['DDR5']
    }
  ],
  
  storage: [
    {
      id: '1',
      name: 'Samsung 980 PRO 1TB NVMe SSD',
      brand: 'Samsung',
      price: 8999,
      image: '/ssd-samsung.webp',
      specifications: {
        'Capacity': '1TB',
        'Form Factor': 'M.2 2280',
        'Interface': 'NVMe PCIe 4.0',
        'Sequential Read': '7,000 MB/s',
        'Sequential Write': '5,000 MB/s'
      },
      compatibility: ['M.2', 'PCIe 4.0']
    },
    {
      id: '2',
      name: 'WD Black SN850X 2TB NVMe SSD',
      brand: 'Western Digital',
      price: 16999,
      image: '/ssd-wd.webp',
      specifications: {
        'Capacity': '2TB',
        'Form Factor': 'M.2 2280',
        'Interface': 'NVMe PCIe 4.0',
        'Sequential Read': '7,300 MB/s',
        'Sequential Write': '6,600 MB/s'
      },
      compatibility: ['M.2', 'PCIe 4.0']
    },
    {
      id: '3',
      name: 'Crucial MX4 500GB SATA SSD',
      brand: 'Crucial',
      price: 4999,
      image: '/ssd-crucial.webp',
      specifications: {
        'Capacity': '500GB',
        'Form Factor': '2.5" SATA',
        'Interface': 'SATA III',
        'Sequential Read': '560 MB/s',
        'Sequential Write': '510 MB/s'
      },
      compatibility: ['SATA']
    }
  ],
  
  'power-supply': [
    {
      id: '1',
      name: 'Corsair RM850x 850W 80+ Gold',
      brand: 'Corsair',
      price: 12999,
      image: '/psu-corsair.webp',
      specifications: {
        'Wattage': '850W',
        'Efficiency': '80+ Gold',
        'Modular': 'Fully Modular',
        'Form Factor': 'ATX',
        'Warranty': '10 Years'
      },
      compatibility: ['ATX']
    },
    {
      id: '2',
      name: 'Seasonic Focus GX-750 750W 80+ Gold',
      brand: 'Seasonic',
      price: 10999,
      image: '/psu-seasonic.webp',
      specifications: {
        'Wattage': '750W',
        'Efficiency': '80+ Gold',
        'Modular': 'Fully Modular',
        'Form Factor': 'ATX',
        'Warranty': '10 Years'
      },
      compatibility: ['ATX']
    },
    {
      id: '3',
      name: 'EVGA SuperNOVA 650 G5 650W 80+ Gold',
      brand: 'EVGA',
      price: 8999,
      image: '/psu-evga.webp',
      specifications: {
        'Wattage': '650W',
        'Efficiency': '80+ Gold',
        'Modular': 'Fully Modular',
        'Form Factor': 'ATX',
        'Warranty': '10 Years'
      },
      compatibility: ['ATX']
    }
  ],
  
  cases: [
    {
      id: '1',
      name: 'Fractal Design Meshify 2 Compact',
      brand: 'Fractal Design',
      price: 9999,
      image: '/case-fractal.webp',
      specifications: {
        'Form Factor': 'Mid Tower',
        'Motherboard Support': 'ATX, mATX, ITX',
        'GPU Clearance': '341mm',
        'CPU Cooler Height': '169mm',
        'Drive Bays': '2x 3.5", 3x 2.5"'
      },
      compatibility: ['ATX', 'mATX', 'ITX']
    },
    {
      id: '2',
      name: 'NZXT H7 Flow RGB',
      brand: 'NZXT',
      price: 12999,
      image: '/case-nzxt.webp',
      specifications: {
        'Form Factor': 'Mid Tower',
        'Motherboard Support': 'ATX, mATX, ITX',
        'GPU Clearance': '365mm',
        'CPU Cooler Height': '165mm',
        'Drive Bays': '2x 3.5", 4x 2.5"'
      },
      compatibility: ['ATX', 'mATX', 'ITX']
    },
    {
      id: '3',
      name: 'Corsair 4000D Airflow',
      brand: 'Corsair',
      price: 8999,
      image: '/case-corsair.webp',
      specifications: {
        'Form Factor': 'Mid Tower',
        'Motherboard Support': 'ATX, mATX, ITX',
        'GPU Clearance': '360mm',
        'CPU Cooler Height': '170mm',
        'Drive Bays': '2x 3.5", 2x 2.5"'
      },
      compatibility: ['ATX', 'mATX', 'ITX']
    }
  ],
  
  cooling: [
    {
      id: '1',
      name: 'Noctua NH-D15 Dual Tower CPU Cooler',
      brand: 'Noctua',
      price: 8999,
      image: '/cooler-noctua.webp',
      specifications: {
        'Type': 'Air Cooler',
        'Height': '165mm',
        'Socket Support': 'AM5, AM4, LGA1700, LGA1200',
        'TDP Rating': '250W',
        'Fans': '2x 140mm'
      },
      compatibility: ['AM5', 'AM4', 'LGA1700', 'LGA1200']
    },
    {
      id: '2',
      name: 'Corsair H100i RGB PLATINUM 240mm AIO',
      brand: 'Corsair',
      price: 12999,
      image: '/cooler-corsair-aio.webp',
      specifications: {
        'Type': 'Liquid Cooler',
        'Radiator Size': '240mm',
        'Socket Support': 'AM5, AM4, LGA1700, LGA1200',
        'TDP Rating': '300W',
        'Pump Speed': '3100 RPM'
      },
      compatibility: ['AM5', 'AM4', 'LGA1700', 'LGA1200']
    },
    {
      id: '3',
      name: 'be quiet! Dark Rock 4',
      brand: 'be quiet!',
      price: 6999,
      image: '/cooler-bequiet.webp',
      specifications: {
        'Type': 'Air Cooler',
        'Height': '159mm',
        'Socket Support': 'AM5, AM4, LGA1700, LGA1200',
        'TDP Rating': '200W',
        'Fans': '1x 135mm'
      },
      compatibility: ['AM5', 'AM4', 'LGA1700', 'LGA1200']
    }
  ]
}

export const componentCategories = [
  { key: 'processors', name: 'Processor (CPU)', required: true, icon: '/cpu final.webp', fallbackIcon: '🎯' },
  { key: 'motherboards', name: 'Motherboard', required: true, icon: '/motherboard final.webp', fallbackIcon: '🔧' },
  { key: 'memory', name: 'Memory (RAM)', required: true, icon: '/ram final.webp', fallbackIcon: '💾' },
  { key: 'graphics-card', name: 'Graphics Card (GPU)', required: false, icon: '/graphic final.webp', fallbackIcon: '🎮' },
  { key: 'storage', name: 'Storage (SSD/HDD)', required: true, icon: '/ssd final.webp', fallbackIcon: '💿' },
  { key: 'power-supply', name: 'Power Supply (PSU)', required: true, icon: null, fallbackIcon: '⚡' },
  { key: 'cases', name: 'PC Case', required: true, icon: null, fallbackIcon: '📦' },
  { key: 'cooling', name: 'CPU Cooler', required: true, icon: null, fallbackIcon: '❄️' }
]