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
        image: '/assets/Loose Smut 01.png',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'wheat-leaf-rust',
        name: 'Leaf Rust / Brown Rust',
        description: 'Orange-brown pustules appearing on leaves causing premature drying. Most common rust disease of wheat in Australia, reducing grain yield and quality.',
        image: '/assets/leaf rust_brown rust 01.png',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'wheat-stem-rust',
        name: 'Stem Rust',
        description: 'Dark reddish-brown pustules on stems and leaf sheaths. Can cause severe lodging and shriveled grain if infection occurs before grain filling.',
        image: '/assets/stem rust 01.png',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'wheat-stripe-rust',
        name: 'Stripe Rust / Yellow Rust',
        description: 'Yellow-orange pustules forming stripes along leaf veins. Favored by cool temperatures, can cause severe yield losses in susceptible varieties.',
        image: '/assets/Stripe rust_yellow rust 01.png',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'wheat-karnal-bunt',
        name: 'Karnal Bunt',
        description: 'Quarantine disease producing black powdery spores in grain. Affects grain quality and marketability with strict phytosanitary restrictions.',
        image: '/assets/karnal bunt.png',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'wheat-powdery-mildew',
        name: 'Powdery Mildew',
        description: 'White powdery growth on leaves reducing photosynthesis. Common in cooler climates, affects grain filling and test weight.',
        image: '/assets/powdery mildew 01.png',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'wheat-seed-gall',
        name: 'Wheat Seed Gall',
        description: 'Nematode disease forming dark brown galls replacing wheat kernels. Seeds infected by nematodes appear darker and heavier than healthy seeds.',
        image: '/assets/Wheat Seed Gall 01.png',
        recommendedProducts: ['tag-nema', 'taglife-v', 'tag-monas']
      },
      {
        id: 'wheat-cyst-nematode',
        name: 'Cyst Nematode',
        description: 'Microscopic worms attacking roots causing stunted growth and yellowing. Forms white to brown cysts on roots, reducing water and nutrient uptake.',
        image: '/assets/cereal cyst nematode.png',
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
        image: '/assets/Brown Rust 01.png',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'barley-powdery-mildew',
        name: 'Powdery Mildew',
        description: 'White powdery fungal growth on leaves and stems. Major disease of barley in temperate regions reducing photosynthesis and grain quality.',
        image: '/assets/powdery mildew 01.png',
        recommendedProducts: ['taglife-h', 'taglife-v']
      },
      {
        id: 'barley-yellow-rust',
        name: 'Yellow Rust',
        description: 'Yellow-orange pustules forming stripes on leaves. Favored by cool, moist conditions, can cause severe yield losses in susceptible varieties.',
        image: '/assets/yellow rust.png',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'barley-net-blotch',
        name: 'Net/Leaf Blotch',
        description: 'Fungal disease causing net-like brown lesions on leaves. Major disease in Australian barley crops reducing yield and grain quality.',
        image: '/assets/net_leaf blotch 01.png',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'barley-cyst-nematode',
        name: 'Cyst Nematode',
        description: 'Microscopic soil-dwelling worms attacking roots causing stunted patches in fields. Forms visible white to brown cysts on roots.',
        image: '/assets/cyst nematode 01.png',
        recommendedProducts: ['tag-nema', 'taglife-h']
      },
      {
        id: 'barley-loose-smut',
        name: 'Loose Smut',
        description: 'Fungal disease replacing grain with black powdery spores. Infected heads emerge earlier with dark spore masses instead of kernels.',
        image: '/assets/Loose Smut 01.png',
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
        image: '/assets/Alternaria Black spot.png',
        recommendedProducts: ['taglife-h', 'taglife-v']
      },
      {
        id: 'canola-aster-yellows',
        name: 'Aster Yellows',
        description: 'Phytoplasma disease transmitted by leafhoppers causing yellowing, stunting, and abnormal flower development. Infected plants produce sterile flowers.',
        image: '/assets/aster yellow .png',
        recommendedProducts: ['tagveria']
      },
      {
        id: 'canola-blackleg',
        name: 'Black Leg',
        description: 'Major fungal disease causing stem cankers and lodging. Most economically important disease of canola in Australia causing significant yield losses.',
        image: '/assets/blackleg.png',
        recommendedProducts: ['tag-monas']
      },
      {
        id: 'canola-powdery-mildew',
        name: 'Powdery Mildew',
        description: 'White powdery fungal growth on leaves, stems, and pods. Common in late season reducing photosynthesis and affecting seed fill.',
        image: '/assets/powdery mildew 01.png',
        recommendedProducts: ['taglife-h', 'taglife-v']
      },
      {
        id: 'canola-root-rot',
        name: 'Root Rot/Stem Rot',
        description: 'Soil-borne fungal complex causing root decay and stem base rot. Weakens plants leading to lodging and reduced nutrient uptake.',
        image: '/assets/root rot_stem rot.png',
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
        image: '/assets/root rot_stem rot.jpg',
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
        image: '/assets/powdery mildew 01.jpg',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'pulses-rust',
        name: 'Rust',
        description: 'Orange-brown pustules on leaves, stems, and pods. Can cause premature defoliation and reduced grain quality and yield in severe infections.',
        image: '/assets/Brown Rust 01.jpg',
        recommendedProducts: ['taglife-h', 'taglife-v', 'tag-monas']
      },
      {
        id: 'pulses-nematode',
        name: 'Root-knot/Cyst Nematode',
        description: 'Microscopic soil-dwelling nematodes attacking roots causing galls, stunting, and yellowing. Reduces nitrogen fixation and water uptake efficiency.',
        image: '/assets/cyst nematode 01.png',
        recommendedProducts: ['tag-nema', 'taglife-h']
      }
    ]
  },
  {
    id: 'carrots',
    name: 'Carrots',
    image: '/assets/carrots.jpg',
    category: 'Vegetables',
    problems: [
      {
        id: 'carrots-leaf-blight',
        name: 'Alternaria Leaf Blight',
        description: 'Fungal disease causing dark brown lesions on leaves. Reduces foliage vigor affecting root development and quality.',
        image: '/assets/Alternaria Black spot.jpg',
        recommendedProducts: ['tag-k20', 'tag-zinc', 'tag-humic']
      },
      {
        id: 'carrots-powdery-mildew',
        name: 'Powdery Mildew',
        description: 'White powdery fungal growth on foliage. Common in dry conditions reducing photosynthetic capacity of leaves.',
        image: '/assets/powdery mildew 01.jpg',
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
    image: '/assets/tomatoes.jpg',
    category: 'Vegetables',
    problems: [
      {
        id: 'tomato-blight',
        name: 'Early Blight',
        description: 'Fungal disease creating concentric ring patterns on leaves. Progressive defoliation from bottom upward reduces fruit quality and yield.',
        image: '/assets/Alternaria Black spot.jpg',
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
        image: '/assets/Brown Rust 01.jpg',
        recommendedProducts: ['tag-zinc', 'tag-poly', 'tag-k20']
      },
      {
        id: 'sweet-corn-smut',
        name: 'Common Smut',
        description: 'Fungal disease forming large grey-white galls on ears, tassels, and stalks. Galls burst releasing black spores.',
        image: '/assets/Loose Smut 01.jpg',
        recommendedProducts: ['tag-poly', 'tag-humic', 'tag-zinc']
      }
    ]
  },
  {
    id: 'onions',
    name: 'Onions',
    image: '/assets/onions.jpg',
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
        image: '/assets/powdery mildew 01.jpg',
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
        image: '/assets/powdery mildew 01.jpg',
        recommendedProducts: ['tag-humic', 'tag-zinc', 'tag-poly']
      }
    ]
  }
];