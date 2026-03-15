export interface CropProblem {
  id: string;
  name: string;
  description: string;
  image: string;
  recommendedProducts: string[];
}

export interface Crop {
  id: string;
  name: string;
  image: string;
  category: 'Pulses' | 'Cereals' | 'Vegetables' | 'Oilseeds';
  problems: CropProblem[];
}

export const crops: Crop[] = [
  {
    id: 'wheat',
    name: 'Wheat',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Cereals',
    problems: [
      {
        id: 'wheat-loose-smut',
        name: 'Loose Smut',
        description: 'Fungal disease replacing grain with black spore masses. Infected heads emerge earlier and release spores infecting healthy plants during flowering.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'wheat-leaf-rust',
        name: 'Leaf Rust / Brown Rust',
        description: 'Orange-brown pustules appearing on leaves causing premature drying. Most common rust disease of wheat in Australia, reducing grain yield and quality.',
        image: 'https://images.unsplash.com/photo-1692197901887-476b4514bebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGxlYWYlMjBydXN0JTIwYnJvd24lMjBkaXNlYXNlfGVufDF8fHx8MTc3MzI5NTczMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'wheat-stem-rust',
        name: 'Stem Rust',
        description: 'Dark reddish-brown pustules on stems and leaf sheaths. Can cause severe lodging and shriveled grain if infection occurs before grain filling.',
        image: 'https://images.unsplash.com/photo-1723727324249-38a200246071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMHN0ZW0lMjBydXN0JTIwZnVuZ2FsfGVufDF8fHx8MTc3MzI5NTczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'wheat-stripe-rust',
        name: 'Stripe Rust / Yellow Rust',
        description: 'Yellow-orange pustules forming stripes along leaf veins. Favored by cool temperatures, can cause severe yield losses in susceptible varieties.',
        image: 'https://images.unsplash.com/photo-1688111850589-7cc24d63e9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMHN0cmlwZSUyMHllbGxvdyUyMHJ1c3R8ZW58MXx8fHwxNzczMjk1NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'wheat-karnal-bunt',
        name: 'Karnal Bunt',
        description: 'Quarantine disease producing black powdery spores in grain. Affects grain quality and marketability with strict phytosanitary restrictions.',
        image: 'https://images.unsplash.com/photo-1643139880204-61fc328ca4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGdyYWluJTIwZGlzZWFzZSUyMGZ1bmd1c3xlbnwxfHx8fDE3NzMyOTU3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'wheat-powdery-mildew',
        name: 'Powdery Mildew',
        description: 'White powdery growth on leaves reducing photosynthesis. Common in cooler climates, affects grain filling and test weight.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'wheat-seed-gall',
        name: 'Wheat Seed Gall',
        description: 'Nematode disease forming dark brown galls replacing wheat kernels. Seeds infected by nematodes appear darker and heavier than healthy seeds.',
        image: 'https://images.unsplash.com/photo-1628304163832-04a063f76d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMHNlZWQlMjBnYWxsJTIwbmVtYXRvZGV8ZW58MXx8fHwxNzczMjk1NzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['tag-nema', 'taglife-v', 'tag-monas']
      },
      {
        id: 'wheat-cyst-nematode',
        name: 'Cyst Nematode',
        description: 'Microscopic worms attacking roots causing stunted growth and yellowing. Forms white to brown cysts on roots, reducing water and nutrient uptake.',
        image: 'https://images.unsplash.com/photo-1747835142143-a1747dcb6b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMHJvb3QlMjBjeXN0JTIwbmVtYXRvZGV8ZW58MXx8fHwxNzczMjk1NzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['tag-nema', 'taglife-h']
      }
    ]
  },
  {
    id: 'barley',
    name: 'Barley',
    image: 'https://images.unsplash.com/photo-1442774503508-2e17027df511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Cereals',
    problems: [
      {
        id: 'barley-brown-rust',
        name: 'Brown Rust',
        description: 'Orange-brown pustules scattered on leaves. Common rust disease of barley causing premature leaf death and reduced grain yield.',
        image: 'https://images.unsplash.com/photo-1633321670625-e0732735fdf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJlYWwlMjBncmFpbiUyMHJ1c3QlMjBkaXNlYXNlfGVufDF8fHx8MTc3MzI5NjI2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'barley-powdery-mildew',
        name: 'Powdery Mildew',
        description: 'White powdery fungal growth on leaves and stems. Major disease of barley in temperate regions reducing photosynthesis and grain quality.',
        image: 'https://images.unsplash.com/photo-1603651645989-3c7d3520a912?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJsZXklMjBwb3dkZXJ5JTIwbWlsZGV3JTIwZnVuZ3VzfGVufDF8fHx8MTc3MzI5NjI2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v']
      },
      {
        id: 'barley-yellow-rust',
        name: 'Yellow Rust',
        description: 'Yellow-orange pustules forming stripes on leaves. Favored by cool, moist conditions, can cause severe yield losses in susceptible varieties.',
        image: 'https://images.unsplash.com/photo-1626526312512-c4391924d7f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJsZXklMjB5ZWxsb3clMjBydXN0JTIwc3RyaXBlfGVufDF8fHx8MTc3MzI5NjI2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'barley-net-blotch',
        name: 'Net/Leaf Blotch',
        description: 'Fungal disease causing net-like brown lesions on leaves. Major disease in Australian barley crops reducing yield and grain quality.',
        image: 'https://images.unsplash.com/photo-1658315216731-d0548fd66f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJsZXklMjBuZXQlMjBibG90Y2glMjBsZWFmfGVufDF8fHx8MTc3MzI5NjI2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'barley-cyst-nematode',
        name: 'Cyst Nematode',
        description: 'Microscopic soil-dwelling worms attacking roots causing stunted patches in fields. Forms visible white to brown cysts on roots.',
        image: 'https://images.unsplash.com/photo-1747835142143-a1747dcb6b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMHJvb3QlMjBjeXN0JTIwbmVtYXRvZGV8ZW58MXx8fHwxNzczMjk1NzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['tag-nema', 'taglife-h']
      },
      {
        id: 'barley-loose-smut',
        name: 'Loose Smut',
        description: 'Fungal disease replacing grain with black powdery spores. Infected heads emerge earlier with dark spore masses instead of kernels.',
        image: 'https://images.unsplash.com/photo-1659957999747-680ae327a581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJsZXklMjBsb29zZSUyMHNtdXQlMjBkaXNlYXNlfGVufDF8fHx8MTc3MzI5NjI2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      }
    ]
  },
  {
    id: 'canola',
    name: 'Canola',
    image: 'https://images.unsplash.com/photo-1599652087006-e7318231a70f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Oilseeds',
    problems: [
      {
        id: 'canola-alternaria-black-spot',
        name: 'Alternaria Black Spot',
        description: 'Fungal disease causing dark circular spots on leaves, stems, and pods. Can cause premature leaf drop and reduce seed quality and yield.',
        image: 'https://images.unsplash.com/photo-1589510974629-24e580f128af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXBlc2VlZCUyMGxlYWYlMjBibGFjayUyMHNwb3R8ZW58MXx8fHwxNzczMjk3MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v']
      },
      {
        id: 'canola-aster-yellows',
        name: 'Aster Yellows',
        description: 'Phytoplasma disease transmitted by leafhoppers causing yellowing, stunting, and abnormal flower development. Infected plants produce sterile flowers.',
        image: 'https://images.unsplash.com/photo-1709744302550-d0995bfca52c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5vbGElMjBhc3RlciUyMHllbGxvd3MlMjBkaXNlYXNlfGVufDF8fHx8MTc3MzI5NzE5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['tagveria']
      },
      {
        id: 'canola-blackleg',
        name: 'Black Leg',
        description: 'Major fungal disease causing stem cankers and lodging. Most economically important disease of canola in Australia causing significant yield losses.',
        image: 'https://images.unsplash.com/photo-1634326598994-bccd211b4353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5vbGElMjBzdGVtJTIwY2Fua2VyJTIwZnVuZ2FsfGVufDF8fHx8MTc3MzI5NzIwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['tag-monas']
      },
      {
        id: 'canola-powdery-mildew',
        name: 'Powdery Mildew',
        description: 'White powdery fungal growth on leaves, stems, and pods. Common in late season reducing photosynthesis and affecting seed fill.',
        image: 'https://images.unsplash.com/photo-1635603995496-c70e54ed1821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5vbGElMjBwb3dkZXJ5JTIwbWlsZGV3JTIwd2hpdGV8ZW58MXx8fHwxNzczMjk3MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v']
      },
      {
        id: 'canola-root-rot',
        name: 'Root Rot/Stem Rot',
        description: 'Soil-borne fungal complex causing root decay and stem base rot. Weakens plants leading to lodging and reduced nutrient uptake.',
        image: 'https://images.unsplash.com/photo-1646042933151-ac147137d17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5vbGElMjByb290JTIwcm90JTIwZnVuZ3VzfGVufDF8fHx8MTc3MzI5NzIwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      }
    ]
  },
  {
    id: 'pulses',
    name: 'Pulses',
    image: 'https://images.unsplash.com/photo-1666987571073-ce052bb99388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWxzZXMlMjBsZWd1bWVzJTIwZmllbGQlMjBjcm9wc3xlbnwxfHx8fDE3NzMyOTc3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Pulses',
    problems: [
      {
        id: 'pulses-ascochyta-blight',
        name: 'Ascochyta Blight',
        description: 'Major fungal disease of pulse crops causing leaf spots, stem lesions, and pod infection. Can cause severe yield loss in wet seasons and cool conditions.',
        image: 'https://images.unsplash.com/photo-1761026515669-fba83c47ec8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWd1bWUlMjBibGlnaHQlMjBzcG90cyUyMGRpc2Vhc2V8ZW58MXx8fHwxNzczMjk3ODAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'pulses-fusarium-root-rot',
        name: 'Fusarium Root Rot/Wilt',
        description: 'Soil-borne fungal disease causing root rot, wilting, and plant death. Major problem in short pulse rotations and waterlogged soils.',
        image: 'https://images.unsplash.com/photo-1646042933151-ac147137d17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXNhcml1bSUyMHJvb3QlMjByb3QlMjB3aWx0fGVufDF8fHx8MTc3MzI5Nzc5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'pulses-sclerotinia',
        name: 'Sclerotinia Stem Rot',
        description: 'White mold disease causing stem lesions and wilting. Forms black resting structures (sclerotia) that persist in soil for years.',
        image: 'https://images.unsplash.com/photo-1572315725436-77c72fcca254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2xlcm90aW5pYSUyMHN0ZW0lMjByb3QlMjB3aGl0ZSUyMG1vbGR8ZW58MXx8fHwxNzczMjk3Nzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'pulses-botrytis',
        name: 'Botrytis Gray Mold',
        description: 'Grey fungal growth on flowers, stems, and pods. Major disease during flowering in wet, humid weather reducing pod set and yield.',
        image: 'https://images.unsplash.com/photo-1699385917515-15cde0be06e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RyeXRpcyUyMGdyYXklMjBtb2xkJTIwZnVuZ3VzfGVufDF8fHx8MTc3MzI5Nzc5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'pulses-pea-mosaic-virus',
        name: 'Pea Seed-borne Mosaic Virus',
        description: 'Virus disease transmitted by aphids and infected seed causing mosaic patterns, stunting, and yield reduction. Control requires resistant varieties and aphid management.',
        image: 'https://images.unsplash.com/photo-1725722520663-5a4776a36104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWElMjBtb3NhaWMlMjB2aXJ1cyUyMHllbGxvd2luZ3xlbnwxfHx8fDE3NzMyOTc3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['tagveria']
      },
      {
        id: 'pulses-anthracnose',
        name: 'Anthracnose',
        description: 'Fungal disease causing dark sunken lesions on stems, leaves, and pods. Can cause seed staining and reduced germination in severe cases.',
        image: 'https://images.unsplash.com/photo-1716378776798-85e2622f3e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnRocmFjbm9zZSUyMHB1bHNlJTIwbGVndW1lJTIwZGlzZWFzZXxlbnwxfHx8fDE3NzMyOTc3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'pulses-powdery-mildew',
        name: 'Powdery Mildew',
        description: 'White powdery fungal growth on leaves, stems, and pods. Reduces photosynthesis and can affect seed quality at late infection.',
        image: 'https://images.unsplash.com/photo-1698544681627-0dda7b180d36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dkZXJ5JTIwbWlsZGV3JTIwd2hpdGUlMjBmdW5ndXN8ZW58MXx8fHwxNzczMjk3Nzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'pulses-rust',
        name: 'Rust',
        description: 'Orange-brown pustules on leaves, stems, and pods. Can cause premature defoliation and reduced grain quality and yield in severe infections.',
        image: 'https://images.unsplash.com/photo-1601914682642-385a947af5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMHJ1c3QlMjBmdW5nYWwlMjBkaXNlYXNlfGVufDF8fHx8MTc3MzI5NzgwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'pulses-nematode',
        name: 'Root-knot/Cyst Nematode',
        description: 'Microscopic soil-dwelling nematodes attacking roots causing galls, stunting, and yellowing. Reduces nitrogen fixation and water uptake efficiency.',
        image: 'https://images.unsplash.com/photo-1666370182138-1943009fae51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb290JTIwa25vdCUyMG5lbWF0b2RlJTIwZGFtYWdlfGVufDF8fHx8MTc3MzI5Nzc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        recommendedProducts: ['tag-nema', 'taglife-h']
      }
    ]
  },
  {
    id: 'carrots',
    name: 'Carrots',
    image: 'https://images.unsplash.com/photo-1617218607489-4d28d612bd07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Vegetables',
    problems: [
      {
        id: 'carrots-leaf-blight',
        name: 'Alternaria Leaf Blight',
        description: 'Fungal disease causing dark brown lesions on leaves. Reduces foliage vigor affecting root development and quality.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['tag-k20', 'tag-zinc', 'tag-humic']
      },
      {
        id: 'carrots-powdery-mildew',
        name: 'Powdery Mildew',
        description: 'White powdery fungal growth on foliage. Common in dry conditions reducing photosynthetic capacity of leaves.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['tag-k20', 'tag-humic', 'tag-zinc']
      },
      {
        id: 'carrots-cavity-spot',
        name: 'Cavity Spot',
        description: 'Soil-borne disease causing sunken lesions on roots. Makes carrots unmarketable and reduces storage quality.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['tag-humic', 'tag-zinc', 'tag-poly']
      },
      {
        id: 'carrots-aphids',
        name: 'Carrot Aphid',
        description: 'Green aphids colonizing foliage causing leaf curling. Can transmit virus diseases affecting plant vigor.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['tagveria', 'tag-neem']
      }
    ]
  },
  {
    id: 'tomatoes',
    name: 'Tomatoes',
    image: 'https://images.unsplash.com/photo-1546470427-e26264be0b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Vegetables',
    problems: [
      {
        id: 'tomato-blight',
        name: 'Early Blight',
        description: 'Fungal disease creating concentric ring patterns on leaves. Progressive defoliation from bottom upward reduces fruit quality and yield.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['tag-zinc', 'tag-humic', 'tag-k20']
      },
      {
        id: 'tomato-late-blight',
        name: 'Late Blight',
        description: 'Highly destructive disease causing dark water-soaked lesions on leaves and fruits. Can destroy entire crop within days in favorable conditions.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['tag-k20', 'tag-zinc', 'tag-humic', 'tag-poly']
      },
      {
        id: 'tomato-whitefly',
        name: 'Whitefly',
        description: 'Sap-sucking pest transmitting several viral diseases. Secretes honeydew leading to sooty mold and reduced plant vigor.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['tagveria', 'tag-neem']
      }
    ]
  },
  {
    id: 'sweet-corn',
    name: 'Sweet Corn',
    image: 'https://images.unsplash.com/photo-1633345817529-cca176575d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Vegetables',
    problems: [
      {
        id: 'sweet-corn-fall-armyworm',
        name: 'Fall Armyworm',
        description: 'Highly destructive caterpillar feeding on leaves, tassels, and developing ears. Major pest across Australian sweet corn production.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['tagveria', 'tag-neem', 'tag-k20']
      },
      {
        id: 'sweet-corn-helicoverpa',
        name: 'Corn Earworm (Helicoverpa)',
        description: 'Larvae bore into developing ears damaging kernels. Makes cobs unmarketable and allows entry of fungal diseases.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['tagveria', 'tag-neem', 'tag-k20']
      },
      {
        id: 'sweet-corn-rust',
        name: 'Common Rust',
        description: 'Fungal disease producing orange-brown pustules on leaves. Reduces photosynthetic capacity affecting ear development and sugar content.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['tag-zinc', 'tag-poly', 'tag-k20']
      },
      {
        id: 'sweet-corn-smut',
        name: 'Common Smut',
        description: 'Fungal disease forming large grey-white galls on ears, tassels, and stalks. Galls burst releasing black spores.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['tag-poly', 'tag-humic', 'tag-zinc']
      }
    ]
  },
  {
    id: 'onions',
    name: 'Onions',
    image: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Vegetables',
    problems: [
      {
        id: 'onion-purple-blotch',
        name: 'Purple Blotch',
        description: 'Fungal disease causing pale leaf spots with greyish-purple mold. Major disease during cool, wet conditions reducing bulb development.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['tag-zinc', 'tag-poly', 'tag-humic']
      },
      {
        id: 'onion-powdery-mildew',
        name: 'Powdery Mildew',
        description: 'Serious soil-borne disease causing root decay and white fluffy fungal growth. Can persist in soil for many years.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['tag-humic', 'tag-zinc', 'tag-poly']
      }
    ]
  },
  {
    id: 'potato',
    name: 'Potato',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Vegetables',
    problems: [
      {
        id: 'potato-purple-blotch',
        name: 'Purple Blotch',
        description: 'Most destructive potato disease causing dark lesions on leaves and tubers. Can devastate entire crops in cool, humid weather.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['tag-k20', 'tag-zinc', 'tag-humic']
      },
      {
        id: 'potato-powdery-mildew',
        name: 'Powdery Mildew',
        description: 'Bacterial disease causing rough, corky lesions on tuber surface. Reduces marketability particularly for fresh market potatoes.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        recommendedProducts: ['tag-humic', 'tag-zinc', 'tag-poly']
      }
    ]
  }
];