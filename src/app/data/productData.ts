export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  keyFeatures: string[];
  overview: string;
  composition: string[];
  benefits: string[];
  dosage?: string[]; // Optional field for dosage information
  applicationMethod?: string[]; // Optional field for application method
  precautions?: string[]; // Optional field for precautions
  controls?: string; // Optional field for what the product controls
  recommendedCrops: string[];
}

export const products: Product[] = [
  {
    id: 'tag-veria',
    name: 'Tag Veria',
    tagline: 'Broad-Spectrum Bio-Insecticide',
    category: 'Biological Insecticide',
    image: 'https://images.unsplash.com/photo-1707424124274-689499bbe5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMHByb2R1Y3R8ZW58MXx8fHwxNzY4NjQ3NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    keyFeatures: ['100 Million CFU/gram', 'Broad-Spectrum Bio-Insecticide', 'IPM Compatible & Residue-free'],
    overview: 'Tag Veria is a broad-spectrum bio-insecticide containing a highly virulent strain of Beauveria bassiana, an entomopathogenic fungus effective against a wide range of sucking and chewing insect pests. When the fungal spores (conidia) come in contact with the insect body, they attach to the cuticle and germinate, causing a disease known as white muscardine, which eventually kills the insect by draining its nutrients. Tag Veria is an eco-friendly biological product that fits well into Integrated Pest Management (IPM) programs. It contains a high spore count (minimum 100 million CFU per gram) and leaves no harmful residues in crops or the environment. It is compatible with most agricultural chemicals except chemical fungicides.',
    composition: [
      'Active Ingredient: Beauveria bassiana',
      'Product Form: Wettable Powder',
      'Product Type: Biological'
    ],
    benefits: [
      'Effective bio-insecticide for sucking and chewing pests',
      'Suitable for Integrated Pest Management (IPM)',
      'Eco-friendly and residue-free',
      'High spore count (100 million CFU/g) for better efficacy',
      'Safe for crops, humans, and beneficial organisms'
    ],
    dosage: [
      'Soil Application: 1 kg per acre',
      'Foliar Spray: 5 g per litre water',
      'Soil Drenching: 5 g per litre water',
      'For better efficacy, use with a suitable wetting agent such as Kloud',
      'Can be mixed with Farmyard Manure (FYM) and broadcast in the field',
      'Visible pest mortality is generally observed from the 3rd day after application',
      'Apply at 20-30 day intervals starting 20-25 days after sowing/planting'
    ],
    applicationMethod: [
      'Apply as a preventive (prophylactic) treatment',
      'Spray in the field when target pests appear',
      'For best results, apply during late evening hours'
    ],
    precautions: [
      'Do not mix with chemical fungicides',
      'Apply 7 days after the use of chemical fungicides'
    ],
    controls: 'Effective against pests such as Mealy Bugs, Aphids, Thrips, Whiteflies, Jassids, Termites, Beetles, American Bollworm, Grubs, Mites, Stem Borers, Fruit Borers, Leaf-eating caterpillars, and Grasshoppers.',
    recommendedCrops: ['Papaya', 'Sapota', 'Watermelon', 'Cotton', 'Groundnut', 'Tomato', 'Brinjal', 'Chilli', 'Capsicum', 'Okra', 'Pea', 'Cowpea', 'French Bean', 'Bottle Gourd', 'Bitter Gourd', 'Ridge Gourd', 'Sponge Gourd', 'Cucumber', 'Cabbage', 'Cauliflower', 'Mango', 'Banana', 'Other fruits and vegetables']
  },
  {
    id: 'tag-nema',
    name: 'Tag Nema',
    tagline: 'Natural Bio-Nematicide',
    category: 'Biological Nematicide',
    image: 'https://images.unsplash.com/photo-1642754594150-99374ec8b41c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW1hdG9kZSUyMGNvbnRyb2wlMjBiaW9sb2dpY2FsJTIwcG93ZGVyJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzcyOTY3NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    keyFeatures: [
      '2 Million CFU/gram',
      'Bio-Nematicide for All Life Stages',
      'Eco-friendly & Residue-free'
    ],
    overview: 'Tag Nema is a natural bio-nematicide containing Paecilomyces lilacinus, a nematophagous fungus effective in controlling nematode infestations in crops. The fungus attacks all life stages of nematodes including eggs, juveniles, and adults. Its spores infect and destroy nematode eggs and larvae, helping to suppress the population of harmful nematodes in the soil. Tag Nema contains a high spore count (minimum 2 million CFU per gram) and provides effective biological control while remaining eco-friendly and residue-free, making it safe for crops, soil, and the environment.',
    composition: [
      'Active Ingredient: Paecilomyces lilacinus',
      'Product Form: Wettable Powder',
      'Product Type: Biological'
    ],
    benefits: [
      'Effective biological control of nematodes',
      'Targets eggs, juveniles, and adult nematodes',
      'Helps reduce nematode population in soil',
      'Eco-friendly and residue-free',
      'Safe for crops, soil, and beneficial organisms'
    ],
    dosage: [
      'Seed Dressing: 10 g per kg seed',
      'Rhizome/Tuber Treatment: 10 g per litre water',
      'Cutting Treatment: 10 g per litre water',
      'Root Dipping: 10 g per litre water',
      'Soil Application: 1 kg per acre'
    ],
    applicationMethod: [
      'Soil application through soil drenching or broadcasting with Farmyard Manure (FYM)',
      'Suitable for seed treatment and soil application',
      'Use for seed treatment as a preventive measure and apply in the field when nematode symptoms appear',
      'For best results, apply during late evening hours'
    ],
    precautions: [
      'Do not mix with chemical fungicides',
      'Apply 7 days after the application of chemical fungicides'
    ],
    controls: 'Effective against various nematodes such as Root Knot Nematodes, Potato Golden Cyst Nematodes, Cyst Nematodes on vegetable crops, Citrus Nematodes, Banana Burrowing Nematodes, and Reniform Nematodes.',
    recommendedCrops: ['Vegetables', 'Pulses', 'General field crops']
  },
  {
    id: 'taglife-v',
    name: 'TagLife V',
    tagline: 'Natural Bio-Fungicide with F45 Strain',
    category: 'Biological Fungicide',
    image: 'https://images.unsplash.com/photo-1752351354291-3d2ce93a17e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmljaG9kZXJtYSUyMHZpcmlkZSUyMGJpb2Z1bmdpY2lkZSUyMGdyZWVuJTIwcG93ZGVyfGVufDF8fHx8MTc3Mjk2MjE0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    keyFeatures: [
      '2 Million CFU/gram',
      'F45 Strain Trichoderma viride',
      'Eco-friendly & Residue-free'
    ],
    overview: 'TagLife – V is a natural and organic bio-fungicide containing the F45 strain of Trichoderma viride, an antagonistic fungus effective against a wide range of seed and soil-borne plant diseases. The formulation contains live conidiospores and chlamydospores that germinate under favourable conditions and suppress harmful pathogens. It works by inhibiting the enzymes produced by disease-causing organisms, thereby preventing their establishment and spread in plants. TagLife – V has a high spore count (minimum 2 million CFU per gram) and effectively controls fungal pathogens such as Fusarium. It is eco-friendly, safe for humans, animals, and beneficial organisms, and leaves no harmful residues in crops or soil.',
    composition: [
      'Active Ingredient: Trichoderma viride 1.5% WP',
      'Product Form: Wettable Powder',
      'Product Type: Biological'
    ],
    benefits: [
      'Controls seed and soil-borne fungal diseases',
      'Protects plants from wilt, root rot, dieback, and fruit rot',
      'Improves soil microbial balance',
      'Eco-friendly and residue-free',
      'Safe for humans, animals, and beneficial organisms'
    ],
    dosage: [
      'Seed Dressing: 10 g per kg seed',
      'Rhizome/Tuber Treatment: 10 g per litre water',
      'Cutting Treatment: 10 g per litre water',
      'Root Dipping: 10 g per litre water',
      'Soil Application: 1 kg per acre',
      'Apply at 20-30 day intervals starting 20-25 days after sowing/planting'
    ],
    applicationMethod: [
      'Soil application through soil drenching or broadcasting with Farmyard Manure (FYM)',
      'For best results, apply during late evening hours'
    ],
    precautions: [
      'Do not mix with chemical fungicides',
      'Apply 7 days after the application of chemical fungicides'
    ],
    controls: 'Effective against plant pathogens such as Sclerotium spp., Pythium spp., Phytophthora spp., Fusarium spp., Rhizoctonia spp., Sclerotinia spp., Ustilago spp. These pathogens cause diseases like wilt, root rot, dieback, and fruit rot in various crops.',
    recommendedCrops: ['Vegetables', 'Fruits', 'Pulses', 'Cereals', 'Ornamental Crops', 'Oil Seeds', 'Cash Crops', 'Orchards']
  },
  {
    id: 'taglife-h',
    name: 'TagLife H',
    tagline: 'Natural Bio-Fungicide & Bio-Nematicide',
    category: 'Biological Fungicide',
    image: 'https://images.unsplash.com/photo-1670005485889-40ade3afd2a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmljaG9kZXJtYSUyMGJpb2Z1bmdpY2lkZSUyMHBvd2RlciUyMGFncmljdWx0dXJhbHxlbnwxfHx8fDE3NzI5NjE4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    keyFeatures: [
      '2 Million CFU/gram',
      'Bio-Fungicide & Bio-Nematicide',
      'Eco-friendly & Residue-free'
    ],
    overview: 'TagLife – H is a natural bio-fungicide and bio-nematicide containing Trichoderma harzianum, an antagonistic fungus effective against a wide range of seed and soil-borne plant diseases. The formulation contains live conidiospores and chlamydospores that germinate under favourable conditions and suppress harmful pathogens in the soil. It effectively manages fungal pathogens such as Fusarium and Phytophthora species as well as nematodes. TagLife – H has a high spore count (minimum 2 million CFU per gram) and helps protect crops by improving soil microbial balance. It is eco-friendly and safe for humans, animals, and beneficial organisms, leaving no harmful residues in crops or soil. The product is well suited for dryland ecosystems.',
    composition: [
      'Active Ingredient: Trichoderma harzianum 1.0% WP',
      'Product Form: Wettable Powder',
      'Product Type: Biological'
    ],
    benefits: [
      'Controls seed and soil-borne diseases',
      'Acts as a bio-fungicide and bio-nematicide',
      'Improves soil microbial health',
      'Helps prevent root rot, wilt, and fruit rot',
      'Eco-friendly and residue-free',
      'Safe for humans, animals, and beneficial organisms'
    ],
    dosage: [
      'Seed Dressing: 10 g per kg seed',
      'Rhizome/Tuber Treatment: 10 g per litre water',
      'Cutting Treatment: 10 g per litre water',
      'Root Dipping: 10 g per litre water',
      'Soil Application: 1 kg per acre',
      'Apply at 20-30 day intervals starting 20-25 days after sowing/planting',
      'For best results, apply during late evening hours'
    ],
    applicationMethod: [
      'Soil application through soil drenching or broadcasting with Farmyard Manure (FYM)',
      'Use for seed treatment as preventive measure',
      'Apply in the field when disease symptoms appear'
    ],
    precautions: [
      'Do not mix with chemical fungicides',
      'Apply 7 days after the use of chemical fungicides'
    ],
    controls: 'Effective against plant pathogens such as Sclerotium spp, Pythium spp, Phytophthora spp, Fusarium spp, Rhizoctonia spp, Sclerotinia spp, Ustilago spp. These pathogens cause diseases like wilt, root rot, dieback, and fruit rot in various crops.',
    recommendedCrops: ['Vegetables', 'Fruits', 'Pulses', 'Cereals', 'Ornamental Crops', 'Oil Seeds', 'Cash Crops', 'Orchards']
  },
  {
    id: 'tag-monas',
    name: 'Tag Monas',
    tagline: 'Biological Plant Protection',
    category: 'Biological Fungicide',
    image: 'figma:asset/c75759276f8a9efa9e89b18261901cf75183ee59.png',
    keyFeatures: [
      '100 Million CFU/gram',
      'Fungicide, Bactericide & Nematicide',
      'Protective Barrier Formation'
    ],
    overview: 'Tag Monas is a biological plant protection product containing Pseudomonas fluorescens, a beneficial antagonistic bacterium effective against a wide range of foliar, seed, and soil-borne plant diseases. It works by producing antibiotics and siderophores, which suppress the growth of harmful pathogens and prevent fungal spores from germinating. The bacteria colonize plant surfaces and the rhizosphere, forming a protective barrier that helps protect plants from pathogens and nematodes. Tag Monas acts as a broad-spectrum fungicide, bactericide, and nematicide, while also promoting plant growth. It is suitable for use in wetland agro ecosystems such as paddy fields and contains a high spore count (minimum 100 million CFU per gram) for effective performance.',
    composition: [
      'Active Ingredient: Pseudomonas fluorescens 1.0% WP',
      'Product Form: Wettable Powder',
      'Product Type: Biological'
    ],
    benefits: [
      'Controls foliar, seed, and soil-borne diseases',
      'Acts as a fungicide, bactericide, and nematicide',
      'Produces antibiotics and siderophores that suppress pathogens',
      'Prevents fungal spore germination and disease establishment',
      'Forms a protective shield on plant surfaces',
      'Improves plant growth and health',
      'Suitable for wetland ecosystems like paddy fields',
      'High spore count (100 million CFU/g) for effective performance'
    ],
    dosage: [
      'Seed Dressing: 10 g per kg seed',
      'Rhizome/Tuber Treatment: 10 g per litre water',
      'Cutting Treatment: 10 g per litre water',
      'Root Dipping: 10 g per litre water',
      'Soil Application: 1 kg per acre',
      'Foliar Spray: 5 g per litre water',
      'Apply at 20-30 day intervals starting 20-25 days after sowing/planting'
    ],
    applicationMethod: [
      'Soil application through soil drenching or broadcasting with farmyard manure (FYM)',
      'Seed treatment as preventive measure',
      'Foliar spray when disease symptoms appear',
      'Best results when sprayed during late evening hours'
    ],
    precautions: [
      'Do not mix with chemical bactericides or fungicides',
      'Apply 7 days after the use of chemical bactericides or fungicides'
    ],
    controls: 'Effective against a wide range of fungal, bacterial, and nematode-related diseases by preventing pathogen growth and establishment on plant surfaces and in the rhizosphere.',
    recommendedCrops: ['Chilli', 'Cabbage', 'Potato', 'Cotton', 'Tomato', 'Paddy', 'Banana', 'Other vegetable and field crops']
  },
  {
    id: 'tag-k20',
    name: 'Tag K20',
    tagline: 'Premium Potassium Fertilizer',
    category: 'Organic Fertilizer',
    image: 'figma:asset/1e440777d2c9a4f81cb4b5f3f0cf58f6082c8c5b.png',
    keyFeatures: ['20% Organic Potash', 'Marine Red Algae Extract', 'Bio-active Molecules'],
    overview: 'Tag K20 is a new-generation plant nutrition product containing minimum 20% potash derived from Rhodophytes (marine red algae) along with 1.5% sulphur and bio-active molecules. This unique formulation enhances flowering, fruit development, and overall crop yield. Tag K20 improves plant hormonal activity which helps in enhancing the shape, size, colour, and lustre of fruits. It also helps plants withstand abiotic stresses such as drought and environmental stress, leading to healthier crops and better quality produce.',
    composition: [
      'Active Ingredient: Potash derived from Rhodophytes (Marine Red Algae) – Organic Potash',
      'Product Form: Soluble Powder',
      'Product Type: Biological'
    ],
    benefits: [
      'Provides organic potash derived from marine red algae',
      'Improves flowering and fruit setting',
      'Enhances size, shape, colour, and lustre of fruits',
      'Increases crop yield and quality',
      'Improves plant hormonal activity',
      'Helps plants tolerate abiotic stress',
      'Contains bio-active molecules for better plant health'
    ],
    dosage: [
      'Foliar Spray: 48 g per acre',
      'Drip Irrigation (Fertigation): 96 g per acre',
      'For best results, apply during flowering initiation stage and fruit maturity stage'
    ],
    applicationMethod: [
      'Can be applied through foliar spray',
      'Can also be applied through drip fertigation'
    ],
    precautions: [
      'The product is highly hygroscopic',
      'Use immediately after opening the pack'
    ],
    recommendedCrops: ['All crops']
  },
  {
    id: 'tag-carb-n',
    name: 'Tag Carb-N',
    tagline: 'Granulated Organic Manure',
    category: 'Biostimulant',
    image: 'https://images.unsplash.com/photo-1761732941287-b332e1eb6315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZ3JhbnVsYXIlMjBmZXJ0aWxpemVyJTIwc29pbCUyMGFtZW5kbWVudHxlbnwxfHx8fDE3NzI5Njc5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    keyFeatures: [
      'Organic Carbon + NPK',
      'Granulated Organic Manure',
      'Promotes Microbial Activity'
    ],
    overview: 'Tag Carb-N GR is a granulated organic manure that supplies organic carbon along with essential nutrients like nitrogen, phosphorus, and potassium to support healthy crop growth. Application of Tag Carb-N improves soil microbial activity, helping beneficial microorganisms break down organic matter and convert it into nutrient-rich humus. This process also encourages the presence of earthworms, which further improves soil fertility and structure. Regular use enhances soil health, nutrient availability, and overall crop productivity.',
    composition: [
      'Active Ingredient: Organic Carbon and NPK',
      'Product Form: Granules',
      'Product Type: Biological'
    ],
    benefits: [
      'Provides organic carbon and essential nutrients',
      'Improves soil fertility and structure',
      'Promotes beneficial microbial activity',
      'Encourages earthworm activity in soil',
      'Enhances nutrient availability and crop growth',
      'Suitable for long-term soil health improvement'
    ],
    dosage: [
      'Soil Application: 4 kg per acre',
      'Apply at regular intervals during the crop growth cycle to obtain maximum benefits'
    ],
    applicationMethod: [
      'Apply through soil broadcasting',
      'Mix Tag Carb-N GR with soil or sand and broadcast uniformly',
      'Can also be used as top dressing during critical crop growth stages'
    ],
    precautions: [
      'Refer to the product leaflet for detailed precautions and usage instructions'
    ],
    recommendedCrops: ['Cereals', 'Pulses', 'Vegetables', 'Ornamental Crops', 'Oilseeds', 'Cash Crops', 'Fruits', 'Flowering and Plantation Crops']
  },
  {
    id: 'gold-bionik',
    name: 'Gold Bionik',
    tagline: 'Soluble VAM for Stronger Crops',
    category: 'Biofertilizer',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
    keyFeatures: [
      '2000 VAM Spores/gram',
      '100% Water Soluble',
      '30-40% Better Phosphorus Uptake'
    ],
    overview: 'Gold Bionik is a premium biofertilizer containing Vesicular Arbuscular Mycorrhiza (VAM), a beneficial fungus that forms symbiotic associations with plant roots. This advanced formulation enhances nutrient absorption, particularly phosphorus, improves water uptake efficiency, and strengthens plant resistance to environmental stresses.',
    composition: [
      'Active Ingredient: Nutrient Mobilizing Mycorrhizae',
      'Product Form: Soluble Powder',
      'Product Type: Biological'
    ],
    benefits: [
      'Enhances phosphorus uptake by 30-40%',
      'Improves water absorption and drought resistance',
      'Increases root system development and soil colonization',
      'Reduces dependency on chemical phosphatic fertilizers',
      'Improves soil structure and nutrient availability',
      'Suitable for all crops including micro-propagated plants'
    ],
    dosage: [
      'Seed Treatment: 2–10 g per kg seed (depending on seed size)',
      'Seedling Root Dip: 1–2 g per litre of water',
      'Drip Irrigation System: 100 g per acre'
    ],
    applicationMethod: [
      '100% water soluble - mix required quantity in water before application',
      'Suitable for seed treatment, drip irrigation, and seedling root dip'
    ],
    precautions: [
      'Do not mix with chemical fungicides, urea, or foliar fertilizers',
      'Apply 7 days after the application of chemical fungicides'
    ],
    recommendedCrops: ['All crops']
  }
];

// Extract unique categories
export const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];