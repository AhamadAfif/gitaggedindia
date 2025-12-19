export interface GIProduct {
  id: string;
  name: string;
  state: string;
  category: 'Handicraft' | 'Agriculture' | 'Food' | 'Textile' | 'Natural' | 'Others';
  year: number;
  description: string;
  speciality: string;
  location: string;
  imageUrl: string;
  status: 'Active' | 'Inactive';
  wikipediaUrl?: string;
}

export const giProducts: GIProduct[] = [
  // ANDHRA PRADESH
  {
    id: '1',
    name: 'Tirupati Laddu',
    state: 'Andhra Pradesh',
    category: 'Food',
    year: 2009,
    description: 'Tirupati Laddu is a sweet offered as Prasadam at the Venkateswara Temple in Tirupati. Made of gram flour, sugar, cashews, raisins, and cardamom.',
    speciality: 'Sacred temple offering with unique traditional recipe',
    location: 'Tirupati, Andhra Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800',
    status: 'Active'
  },
  {
    id: '2',
    name: 'Srikalahasthi Kalamkari',
    state: 'Andhra Pradesh',
    category: 'Handicraft',
    year: 2008,
    description: 'Srikalahasti Kalamkari is a traditional hand-painted art form on fabric using natural dyes. Done freehand using a bamboo pen called kalam.',
    speciality: 'Hand-painted with natural dyes using traditional kalam technique',
    location: 'Srikalahasti, Andhra Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?w=800',
    status: 'Active'
  },
  {
    id: '3',
    name: 'Guntur Sannam Chilli',
    state: 'Andhra Pradesh',
    category: 'Agriculture',
    year: 2006,
    description: 'Guntur Sannam is a famous variety of chili recognized for its pungency, deep red color, and high capsaicin content.',
    speciality: 'High pungency with deep red color',
    location: 'Guntur, Andhra Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1601876818790-33a0783ec542?w=800',
    status: 'Active'
  },
  
  // ARUNACHAL PRADESH
  {
    id: '4',
    name: 'Arunachal Orange',
    state: 'Arunachal Pradesh',
    category: 'Agriculture',
    year: 2017,
    description: 'Arunachal oranges are grown in the hilly terrain. Known for their sweet-sour taste and rich vitamin C content.',
    speciality: 'Sweet-sour flavor with high vitamin C',
    location: 'Arunachal Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=800',
    status: 'Active'
  },
  {
    id: '5',
    name: 'Arunachal Pradesh Yak Churpi',
    state: 'Arunachal Pradesh',
    category: 'Food',
    year: 2020,
    description: 'Yak Churpi is a traditional cheese made from yak milk. A protein-rich food consumed by local tribes.',
    speciality: 'Traditional yak milk cheese with high protein',
    location: 'Arunachal Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800',
    status: 'Active'
  },
  
  // ASSAM
  {
    id: '6',
    name: 'Muga Silk of Assam',
    state: 'Assam',
    category: 'Textile',
    year: 2007,
    description: 'Muga silk is the golden silk of Assam, produced only in Assam. Known for its natural golden color and durability.',
    speciality: 'Natural golden color, unique to Assam',
    location: 'Assam',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800',
    status: 'Active'
  },
  {
    id: '7',
    name: 'Assam Orthodox Tea',
    state: 'Assam',
    category: 'Agriculture',
    year: 2007,
    description: 'Assam Orthodox tea is known for its rich, malty flavor and bright liquor. Grown in the Brahmaputra valley.',
    speciality: 'Rich malty flavor with strong aroma',
    location: 'Assam',
    imageUrl: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800',
    status: 'Active'
  },
  {
    id: '8',
    name: 'Joha Rice of Assam',
    state: 'Assam',
    category: 'Agriculture',
    year: 2018,
    description: 'Joha rice is a fragrant rice variety with a distinctive aroma. It is a short-grain rice with excellent cooking quality.',
    speciality: 'Aromatic rice with sweet scent',
    location: 'Assam',
    imageUrl: 'https://images.unsplash.com/photo-1536304447766-da0ed4ce1b73?w=800',
    status: 'Active'
  },
  
  // BIHAR
  {
    id: '9',
    name: 'Madhubani Paintings',
    state: 'Bihar',
    category: 'Handicraft',
    year: 2007,
    description: 'Madhubani art is a style of painting practiced in the Mithila region. Characterized by complex geometrical patterns and mythology.',
    speciality: 'Traditional folk art with natural colors',
    location: 'Madhubani, Bihar',
    imageUrl: 'https://images.unsplash.com/photo-1580479776654-e9a10f69187c?w=800',
    status: 'Active'
  },
  {
    id: '10',
    name: 'Bhagalpur Silk',
    state: 'Bihar',
    category: 'Textile',
    year: 2007,
    description: 'Bhagalpur silk, also known as Tussar silk, is known for its texture and natural gold sheen.',
    speciality: 'Natural gold sheen with rich texture',
    location: 'Bhagalpur, Bihar',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800',
    status: 'Active'
  },
  {
    id: '11',
    name: 'Mithila Makhana',
    state: 'Bihar',
    category: 'Agriculture',
    year: 2018,
    description: 'Mithila Makhana (fox nuts) are aquatic seeds known for their nutritional value and medicinal properties.',
    speciality: 'High protein content with medicinal properties',
    location: 'Mithila, Bihar',
    imageUrl: 'https://images.unsplash.com/photo-1605491556568-5e0e9e71e1c4?w=800',
    status: 'Active'
  },
  
  // CHHATTISGARH
  {
    id: '12',
    name: 'Bastar Dhokra',
    state: 'Chhattisgarh',
    category: 'Handicraft',
    year: 2018,
    description: 'Bastar Dhokra is traditional metal casting using lost-wax technique. Creates beautiful tribal art pieces.',
    speciality: 'Ancient lost-wax casting technique',
    location: 'Bastar, Chhattisgarh',
    imageUrl: 'https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?w=800',
    status: 'Active'
  },
  
  // GOA
  {
    id: '13',
    name: 'Feni',
    state: 'Goa',
    category: 'Food',
    year: 2009,
    description: 'Feni is a traditional Goan liquor made from cashew apple or coconut. A unique alcoholic beverage indigenous to Goa.',
    speciality: 'Traditional Goan spirit with unique flavor',
    location: 'Goa',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800',
    status: 'Active'
  },
  {
    id: '14',
    name: 'Khola Chilli',
    state: 'Goa',
    category: 'Agriculture',
    year: 2020,
    description: 'Khola chilli is a variety grown in Goa known for its medium heat and distinctive flavor.',
    speciality: 'Medium heat with unique flavor profile',
    location: 'Goa',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800',
    status: 'Active'
  },
  
  // GUJARAT
  {
    id: '15',
    name: 'Gir Kesar Mango',
    state: 'Gujarat',
    category: 'Agriculture',
    year: 2011,
    description: 'Gir Kesar mangoes are known for their saffron-colored pulp, sweet taste, and intense aroma.',
    speciality: 'Saffron-colored pulp with intense aroma',
    location: 'Gir, Gujarat',
    imageUrl: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800',
    status: 'Active'
  },
  {
    id: '16',
    name: 'Kutch Embroidery',
    state: 'Gujarat',
    category: 'Handicraft',
    year: 2008,
    description: 'Kutch embroidery features vibrant colors, mirrors, and intricate patterns. Traditional tribal craft of Gujarat.',
    speciality: 'Vibrant mirror work with tribal designs',
    location: 'Kutch, Gujarat',
    imageUrl: 'https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?w=800',
    status: 'Active'
  },
  {
    id: '17',
    name: 'Patan Patola',
    state: 'Gujarat',
    category: 'Textile',
    year: 2013,
    description: 'Patan Patola is a double ikat silk saree. Each saree takes 4-6 months to make using traditional techniques.',
    speciality: 'Double ikat weaving, geometric precision',
    location: 'Patan, Gujarat',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800',
    status: 'Active'
  },
  
  // HARYANA
  {
    id: '18',
    name: 'Phulkari',
    state: 'Haryana',
    category: 'Textile',
    year: 2011,
    description: 'Phulkari is traditional embroidery from Punjab and Haryana. Features vibrant floral patterns on cloth.',
    speciality: 'Vibrant floral embroidery',
    location: 'Haryana',
    imageUrl: 'https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?w=800',
    status: 'Active'
  },
  
  // HIMACHAL PRADESH
  {
    id: '19',
    name: 'Kullu Shawl',
    state: 'Himachal Pradesh',
    category: 'Textile',
    year: 2005,
    description: 'Kullu shawls are woolen shawls known for their colorful patterns and geometrical designs.',
    speciality: 'Traditional geometric patterns with vibrant colors',
    location: 'Kullu, Himachal Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1601924638867-4a2b4d97cde2?w=800',
    status: 'Active'
  },
  {
    id: '20',
    name: 'Kangra Tea',
    state: 'Himachal Pradesh',
    category: 'Agriculture',
    year: 2005,
    description: 'Kangra tea is grown in the Kangra valley. Known for its unique flavor and delicate aroma.',
    speciality: 'Delicate aroma with unique flavor',
    location: 'Kangra, Himachal Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800',
    status: 'Active'
  },
  
  // JAMMU & KASHMIR
  {
    id: '21',
    name: 'Kashmir Pashmina',
    state: 'Jammu and Kashmir',
    category: 'Textile',
    year: 2008,
    description: 'Pashmina refers to a fine variant of spun cashmere derived from the Changthangi goat. Known for its warmth and softness.',
    speciality: 'Ultra-fine cashmere fiber with exceptional warmth',
    location: 'Kashmir Valley',
    imageUrl: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800',
    status: 'Active'
  },
  {
    id: '22',
    name: 'Kashmir Saffron',
    state: 'Jammu and Kashmir',
    category: 'Agriculture',
    year: 2020,
    description: 'Kashmiri saffron is cultivated in the Karewa highlands. Known for its deep crimson color and unique aroma.',
    speciality: 'Highest quality saffron with deep color',
    location: 'Pampore, Kashmir',
    imageUrl: 'https://images.unsplash.com/photo-1599909533730-b0119ef6c01c?w=800',
    status: 'Active'
  },
  {
    id: '23',
    name: 'Kani Shawl',
    state: 'Jammu and Kashmir',
    category: 'Textile',
    year: 2008,
    description: 'Kani shawl is a handwoven shawl using a special wooden needle called Kani. Intricate patterns inspired by nature.',
    speciality: 'Handwoven using traditional Kani technique',
    location: 'Kanihama, Kashmir',
    imageUrl: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800',
    status: 'Active'
  },
  
  // JHARKHAND
  {
    id: '24',
    name: 'Sohrai-Khovar Painting',
    state: 'Jharkhand',
    category: 'Handicraft',
    year: 2020,
    description: 'Sohrai-Khovar is traditional mural art practiced by tribal women. Features geometric and nature-inspired patterns.',
    speciality: 'Traditional tribal mural art',
    location: 'Hazaribagh, Jharkhand',
    imageUrl: 'https://images.unsplash.com/photo-1580479776654-e9a10f69187c?w=800',
    status: 'Active'
  },
  
  // KARNATAKA
  {
    id: '25',
    name: 'Mysore Silk',
    state: 'Karnataka',
    category: 'Textile',
    year: 2005,
    description: 'Mysore Silk is a type of silk saree manufactured in Mysore. Known for soft texture and elegant designs.',
    speciality: 'Pure mulberry silk with zari work',
    location: 'Mysore, Karnataka',
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-6c78276477e5?w=800',
    status: 'Active'
  },
  {
    id: '26',
    name: 'Mysore Agarbathi',
    state: 'Karnataka',
    category: 'Natural',
    year: 2005,
    description: 'Mysore Agarbathi (incense sticks) are known for their natural fragrance. Made from traditional ingredients.',
    speciality: 'Natural fragrance with traditional ingredients',
    location: 'Mysore, Karnataka',
    imageUrl: 'https://images.unsplash.com/photo-1608181383960-7e349c40e1cf?w=800',
    status: 'Active'
  },
  {
    id: '27',
    name: 'Channapatna Toys',
    state: 'Karnataka',
    category: 'Handicraft',
    year: 2006,
    description: 'Channapatna toys are traditional wooden toys crafted using traditional lacquer work and natural dyes.',
    speciality: 'Hand-turned wooden toys with vibrant natural colors',
    location: 'Channapatna, Karnataka',
    imageUrl: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800',
    status: 'Active'
  },
  {
    id: '28',
    name: 'Coorg Orange',
    state: 'Karnataka',
    category: 'Agriculture',
    year: 2006,
    description: 'Coorg oranges are grown in the hilly terrain of Coorg district. Known for their sweetness and aroma.',
    speciality: 'Sweet and aromatic citrus fruit',
    location: 'Coorg, Karnataka',
    imageUrl: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=800',
    status: 'Active'
  },
  {
    id: '29',
    name: 'Coorg Green Cardamom',
    state: 'Karnataka',
    category: 'Agriculture',
    year: 2008,
    description: 'Coorg Green Cardamom is grown in the hilly regions. Known for superior quality, intense aroma, and flavor.',
    speciality: 'Bold flavor with intense aroma',
    location: 'Coorg, Karnataka',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a0b34b9c1a12?w=800',
    status: 'Active'
  },
  {
    id: '30',
    name: 'Bidriware',
    state: 'Karnataka',
    category: 'Handicraft',
    year: 2006,
    description: 'Bidriware is a metal handicraft from Bidar. Features silver inlay work on blackened alloy.',
    speciality: 'Unique silver inlay on blackened metal',
    location: 'Bidar, Karnataka',
    imageUrl: 'https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?w=800',
    status: 'Active'
  },
  
  // KERALA
  {
    id: '31',
    name: 'Aranmula Kannadi',
    state: 'Kerala',
    category: 'Handicraft',
    year: 2004,
    description: 'Aranmula Kannadi is a handmade metal-alloy mirror. Made using a secret formula passed through generations.',
    speciality: 'Unique metal mirror with ancient secret formula',
    location: 'Aranmula, Kerala',
    imageUrl: 'https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?w=800',
    status: 'Active'
  },
  {
    id: '32',
    name: 'Alleppey Coir',
    state: 'Kerala',
    category: 'Natural',
    year: 2008,
    description: 'Alleppey coir is made from coconut husk fiber. Used for making mats, ropes, and mattresses.',
    speciality: 'High-quality coir products',
    location: 'Alappuzha, Kerala',
    imageUrl: 'https://images.unsplash.com/photo-1608181383960-7e349c40e1cf?w=800',
    status: 'Active'
  },
  {
    id: '33',
    name: 'Palakkadan Matta Rice',
    state: 'Kerala',
    category: 'Agriculture',
    year: 2007,
    description: 'Palakkadan Matta rice is a unique red rice variety. Known for its taste and nutritional value.',
    speciality: 'Red rice with rich nutrients',
    location: 'Palakkad, Kerala',
    imageUrl: 'https://images.unsplash.com/photo-1536304447766-da0ed4ce1b73?w=800',
    status: 'Active'
  },
  {
    id: '34',
    name: 'Wayanad Robusta Coffee',
    state: 'Kerala',
    category: 'Agriculture',
    year: 2018,
    description: 'Wayanad Robusta Coffee is grown in the hills of Wayanad. Known for its strong flavor and aroma.',
    speciality: 'Strong flavor with rich aroma',
    location: 'Wayanad, Kerala',
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800',
    status: 'Active'
  },
  
  // MADHYA PRADESH
  {
    id: '35',
    name: 'Chanderi Sarees',
    state: 'Madhya Pradesh',
    category: 'Textile',
    year: 2005,
    description: 'Chanderi fabric is produced in the town of Chanderi. Characterized by lightweight, sheer texture and fine luxurious feel.',
    speciality: 'Lightweight with shimmering texture',
    location: 'Chanderi, Madhya Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1596586682337-c5b5a23adc85?w=800',
    status: 'Active'
  },
  {
    id: '36',
    name: 'Maheshwar Sarees',
    state: 'Madhya Pradesh',
    category: 'Textile',
    year: 2013,
    description: 'Maheshwar sarees are handwoven cotton and silk sarees. Known for their reversible borders and lightweight fabric.',
    speciality: 'Reversible borders with lightweight fabric',
    location: 'Maheshwar, Madhya Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800',
    status: 'Active'
  },
  {
    id: '37',
    name: 'Gond Painting',
    state: 'Madhya Pradesh',
    category: 'Handicraft',
    year: 2021,
    description: 'Gond painting is a traditional tribal art form. Features vibrant colors and intricate patterns from nature.',
    speciality: 'Tribal art with vibrant colors and nature motifs',
    location: 'Madhya Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1580479776654-e9a10f69187c?w=800',
    status: 'Active'
  },
  
  // MAHARASHTRA
  {
    id: '38',
    name: 'Alphonso Mango',
    state: 'Maharashtra',
    category: 'Agriculture',
    year: 2018,
    description: 'Alphonso mangoes, known as the king of mangoes, are cultivated in the Konkan region. Known for unique taste and aroma.',
    speciality: 'Sweet flavor with rich aroma',
    location: 'Ratnagiri, Maharashtra',
    imageUrl: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800',
    status: 'Active'
  },
  {
    id: '39',
    name: 'Kolhapuri Chappal',
    state: 'Maharashtra',
    category: 'Handicraft',
    year: 2019,
    description: 'Kolhapuri chappals are handcrafted leather slippers from Kolhapur. Known for their durability and craftsmanship.',
    speciality: 'Handcrafted leather footwear',
    location: 'Kolhapur, Maharashtra',
    imageUrl: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800',
    status: 'Active'
  },
  {
    id: '40',
    name: 'Warli Painting',
    state: 'Maharashtra',
    category: 'Handicraft',
    year: 2011,
    description: 'Warli painting is a tribal art form. Created using basic geometric shapes to depict daily life.',
    speciality: 'Tribal art with geometric patterns',
    location: 'Thane, Maharashtra',
    imageUrl: 'https://images.unsplash.com/photo-1578926288207-a90566d0d9f3?w=800',
    status: 'Active'
  },
  {
    id: '41',
    name: 'Paithani Sarees',
    state: 'Maharashtra',
    category: 'Textile',
    year: 2010,
    description: 'Paithani sarees are handwoven silk sarees. Known for their rich zari work and vibrant peacock and lotus motifs.',
    speciality: 'Rich zari work with traditional motifs',
    location: 'Paithan, Maharashtra',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800',
    status: 'Active'
  },
  {
    id: '42',
    name: 'Nagpur Orange',
    state: 'Maharashtra',
    category: 'Agriculture',
    year: 2014,
    description: 'Nagpur oranges are known for their sweet taste and high juice content. A major export product.',
    speciality: 'Sweet taste with high juice content',
    location: 'Nagpur, Maharashtra',
    imageUrl: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=800',
    status: 'Active'
  },
  
  // MANIPUR
  {
    id: '43',
    name: 'Shaphee Lanphee',
    state: 'Manipur',
    category: 'Textile',
    year: 2020,
    description: 'Shaphee Lanphee is a traditional Manipuri shawl. Handwoven using traditional techniques.',
    speciality: 'Traditional handwoven shawl',
    location: 'Manipur',
    imageUrl: 'https://images.unsplash.com/photo-1601924638867-4a2b4d97cde2?w=800',
    status: 'Active'
  },
  {
    id: '44',
    name: 'Kachai Lemon',
    state: 'Manipur',
    category: 'Agriculture',
    year: 2020,
    description: 'Kachai lemon is a unique citrus variety from Manipur. Known for its distinct aroma and flavor.',
    speciality: 'Unique aroma and flavor',
    location: 'Manipur',
    imageUrl: 'https://images.unsplash.com/photo-1590502593747-42a996133562?w=800',
    status: 'Active'
  },
  
  // MEGHALAYA
  {
    id: '45',
    name: 'Lakadong Turmeric',
    state: 'Meghalaya',
    category: 'Agriculture',
    year: 2019,
    description: 'Lakadong turmeric is known for its high curcumin content. Has medicinal properties and deep yellow color.',
    speciality: 'High curcumin content with medicinal properties',
    location: 'Lakadong, Meghalaya',
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800',
    status: 'Active'
  },
  {
    id: '46',
    name: 'Khasi Mandarin',
    state: 'Meghalaya',
    category: 'Agriculture',
    year: 2015,
    description: 'Khasi Mandarin is a citrus fruit variety from Meghalaya. Known for its sweet taste and thin skin.',
    speciality: 'Sweet taste with thin skin',
    location: 'Khasi Hills, Meghalaya',
    imageUrl: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=800',
    status: 'Active'
  },
  
  // MIZORAM
  {
    id: '47',
    name: 'Mizo Chilli',
    state: 'Mizoram',
    category: 'Agriculture',
    year: 2020,
    description: 'Mizo chilli is known for its heat and unique flavor. An integral part of Mizo cuisine.',
    speciality: 'High heat with unique flavor',
    location: 'Mizoram',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800',
    status: 'Active'
  },
  {
    id: '48',
    name: 'Tawlhlohpuan',
    state: 'Mizoram',
    category: 'Textile',
    year: 2020,
    description: 'Tawlhlohpuan is a traditional Mizo fabric. Handwoven with intricate designs.',
    speciality: 'Traditional handwoven fabric',
    location: 'Mizoram',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800',
    status: 'Active'
  },
  
  // NAGALAND
  {
    id: '49',
    name: 'Naga Mircha',
    state: 'Nagaland',
    category: 'Agriculture',
    year: 2008,
    description: 'Naga Mircha, also known as Bhut Jolokia, is one of the hottest chili peppers in the world.',
    speciality: 'One of the hottest chilies globally',
    location: 'Nagaland',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800',
    status: 'Active'
  },
  {
    id: '50',
    name: 'Naga Tree Tomato',
    state: 'Nagaland',
    category: 'Agriculture',
    year: 2020,
    description: 'Naga tree tomato is a unique fruit vegetable. Used in traditional Naga cuisine.',
    speciality: 'Unique fruit-vegetable with tangy flavor',
    location: 'Nagaland',
    imageUrl: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800',
    status: 'Active'
  },
  
  // ODISHA
  {
    id: '51',
    name: 'Orissa Pattachitra',
    state: 'Odisha',
    category: 'Handicraft',
    year: 2008,
    description: 'Pattachitra is a traditional cloth-based scroll painting from Odisha. Features mythological narratives.',
    speciality: 'Traditional scroll painting with mythology',
    location: 'Puri, Odisha',
    imageUrl: 'https://images.unsplash.com/photo-1580479776654-e9a10f69187c?w=800',
    status: 'Active'
  },
  {
    id: '52',
    name: 'Konark Stone Carving',
    state: 'Odisha',
    category: 'Handicraft',
    year: 2007,
    description: 'Konark stone carving is known for its intricate detailing. Depicts deities, animals, and mythological scenes.',
    speciality: 'Intricate stone sculptures',
    location: 'Konark, Odisha',
    imageUrl: 'https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?w=800',
    status: 'Active'
  },
  {
    id: '53',
    name: 'Odisha Rasagola',
    state: 'Odisha',
    category: 'Food',
    year: 2019,
    description: 'Odisha Rasagola is a traditional sweet made from chhena (cottage cheese) soaked in sugar syrup.',
    speciality: 'Soft spongy sweet with traditional recipe',
    location: 'Odisha',
    imageUrl: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800',
    status: 'Active'
  },
  
  // PUNJAB
  {
    id: '54',
    name: 'Punjab Phulkari',
    state: 'Punjab',
    category: 'Textile',
    year: 2011,
    description: 'Punjab Phulkari is traditional Punjabi embroidery. Features vibrant floral patterns.',
    speciality: 'Vibrant floral embroidery',
    location: 'Punjab',
    imageUrl: 'https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?w=800',
    status: 'Active'
  },
  
  // RAJASTHAN
  {
    id: '55',
    name: 'Blue Pottery of Jaipur',
    state: 'Rajasthan',
    category: 'Handicraft',
    year: 2015,
    description: 'Jaipur Blue Pottery is a traditional craft. The name comes from the eye-catching blue dye used.',
    speciality: 'Distinctive blue glaze with floral patterns',
    location: 'Jaipur, Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800',
    status: 'Active'
  },
  {
    id: '56',
    name: 'Bikaneri Bhujia',
    state: 'Rajasthan',
    category: 'Food',
    year: 2010,
    description: 'Bikaneri Bhujia is a crispy, spicy snack made from moth bean flour. A popular snack from Bikaner.',
    speciality: 'Crispy savory snack with unique taste',
    location: 'Bikaner, Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800',
    status: 'Active'
  },
  {
    id: '57',
    name: 'Kota Doria',
    state: 'Rajasthan',
    category: 'Textile',
    year: 2005,
    description: 'Kota Doria is a lightweight, transparent fabric. Made from cotton and silk with a distinctive checkered pattern.',
    speciality: 'Lightweight transparent fabric with checks',
    location: 'Kota, Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800',
    status: 'Active'
  },
  {
    id: '58',
    name: 'Makrana Marble',
    state: 'Rajasthan',
    category: 'Natural',
    year: 2015,
    description: 'Makrana marble is a white marble. Used in the construction of Taj Mahal, known for its purity.',
    speciality: 'Pure white marble used in Taj Mahal',
    location: 'Makrana, Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1608181383960-7e349c40e1cf?w=800',
    status: 'Active'
  },
  
  // SIKKIM
  {
    id: '59',
    name: 'Sikkim Large Cardamom',
    state: 'Sikkim',
    category: 'Agriculture',
    year: 2008,
    description: 'Sikkim Large Cardamom is known for its unique smoky flavor. Grown in organic farming conditions.',
    speciality: 'Smoky flavor with organic cultivation',
    location: 'Sikkim',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a0b34b9c1a12?w=800',
    status: 'Active'
  },
  {
    id: '60',
    name: 'Dalle Khursani',
    state: 'Sikkim',
    category: 'Agriculture',
    year: 2020,
    description: 'Dalle Khursani is a round cherry pepper. Known for its fiery heat and fruity flavor.',
    speciality: 'Extremely hot with fruity notes',
    location: 'Sikkim',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800',
    status: 'Active'
  },
  
  // TAMIL NADU
  {
    id: '61',
    name: 'Kanchipuram Silk',
    state: 'Tamil Nadu',
    category: 'Textile',
    year: 2005,
    description: 'Kanchipuram silk sarees are handwoven from pure mulberry silk. The silk is dyed with pure gold thread.',
    speciality: 'Heavy silk with contrasting borders',
    location: 'Kanchipuram, Tamil Nadu',
    imageUrl: 'https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=800',
    status: 'Active'
  },
  {
    id: '62',
    name: 'Nilgiri Orthodox Tea',
    state: 'Tamil Nadu',
    category: 'Agriculture',
    year: 2007,
    description: 'Nilgiri tea is grown in the Nilgiri Hills. Known for its fragrant aroma and brisk flavor.',
    speciality: 'Fragrant with brisk flavor',
    location: 'Nilgiri Hills, Tamil Nadu',
    imageUrl: 'https://images.unsplash.com/photo-1597318112874-0e16bb871a4e?w=800',
    status: 'Active'
  },
  {
    id: '63',
    name: 'Thanjavur Paintings',
    state: 'Tamil Nadu',
    category: 'Handicraft',
    year: 2007,
    description: 'Thanjavur paintings are classical South Indian paintings. Feature rich colors, gold foil, and gem-studded surfaces.',
    speciality: 'Gold foil work with vibrant colors',
    location: 'Thanjavur, Tamil Nadu',
    imageUrl: 'https://images.unsplash.com/photo-1580479776654-e9a10f69187c?w=800',
    status: 'Active'
  },
  {
    id: '64',
    name: 'Madurai Sungudi',
    state: 'Tamil Nadu',
    category: 'Textile',
    year: 2019,
    description: 'Madurai Sungudi is a traditional tie-dye fabric. Known for its small dot patterns.',
    speciality: 'Traditional tie-dye with dot patterns',
    location: 'Madurai, Tamil Nadu',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800',
    status: 'Active'
  },
  {
    id: '65',
    name: 'Palani Panchamirtham',
    state: 'Tamil Nadu',
    category: 'Food',
    year: 2019,
    description: 'Palani Panchamirtham is a temple prasadam. Made with five ingredients including banana, jaggery, and ghee.',
    speciality: 'Sacred temple offering with five ingredients',
    location: 'Palani, Tamil Nadu',
    imageUrl: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800',
    status: 'Active'
  },
  
  // TELANGANA
  {
    id: '66',
    name: 'Pochampally Ikat',
    state: 'Telangana',
    category: 'Textile',
    year: 2005,
    description: 'Pochampally is a silk saree style made in Bhoodan Pochampally. Intricate geometric designs from Ikat dyeing.',
    speciality: 'Unique Ikat dyeing technique',
    location: 'Pochampally, Telangana',
    imageUrl: 'https://images.unsplash.com/photo-1610030469837-7be3ca0a1e94?w=800',
    status: 'Active'
  },
  {
    id: '67',
    name: 'Hyderabad Haleem',
    state: 'Telangana',
    category: 'Food',
    year: 2010,
    description: 'Hyderabad Haleem is a stew composed of meat, lentils, and pounded wheat. A traditional Ramadan delicacy.',
    speciality: 'Slow-cooked meat and wheat stew',
    location: 'Hyderabad, Telangana',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800',
    status: 'Active'
  },
  {
    id: '68',
    name: 'Nirmal Toys',
    state: 'Telangana',
    category: 'Handicraft',
    year: 2009,
    description: 'Nirmal toys and crafts feature intricate gold leaf work on wood. Traditional art form of Telangana.',
    speciality: 'Gold leaf work on wooden toys',
    location: 'Nirmal, Telangana',
    imageUrl: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800',
    status: 'Active'
  },
  
  // TRIPURA
  {
    id: '69',
    name: 'Tripura Queen Pineapple',
    state: 'Tripura',
    category: 'Agriculture',
    year: 2015,
    description: 'Tripura Queen Pineapple is known for its unique taste and aroma. Smaller in size but intensely flavorful.',
    speciality: 'Sweet aroma with unique flavor',
    location: 'Tripura',
    imageUrl: 'https://images.unsplash.com/photo-1550828520-4cb496926fc9?w=800',
    status: 'Active'
  },
  
  // UTTAR PRADESH
  {
    id: '70',
    name: 'Lucknow Chikan',
    state: 'Uttar Pradesh',
    category: 'Textile',
    year: 2008,
    description: 'Lucknow Chikan is traditional embroidery style from Lucknow. Features delicate floral patterns on fine fabric.',
    speciality: 'Delicate white embroidery on fine fabric',
    location: 'Lucknow, Uttar Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?w=800',
    status: 'Active'
  },
  {
    id: '71',
    name: 'Banarasi Silk Sarees',
    state: 'Uttar Pradesh',
    category: 'Textile',
    year: 2009,
    description: 'Banarasi silk is a fine variant of silk originating from Varanasi. Known for gold and silver brocade work.',
    speciality: 'Intricate gold and silver brocade work',
    location: 'Varanasi, Uttar Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800',
    status: 'Active'
  },
  {
    id: '72',
    name: 'Firozabad Glass',
    state: 'Uttar Pradesh',
    category: 'Handicraft',
    year: 2013,
    description: 'Firozabad is famous for glass bangles and glass products. Known as the glass city of India.',
    speciality: 'Traditional glass bangle making',
    location: 'Firozabad, Uttar Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?w=800',
    status: 'Active'
  },
  {
    id: '73',
    name: 'Agra Petha',
    state: 'Uttar Pradesh',
    category: 'Food',
    year: 2017,
    description: 'Petha is a translucent soft candy made from ash gourd. A traditional sweet from Agra.',
    speciality: 'Translucent sweet with delicate texture',
    location: 'Agra, Uttar Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800',
    status: 'Active'
  },
  
  // UTTARAKHAND
  {
    id: '74',
    name: 'Uttarakhand Tejpat',
    state: 'Uttarakhand',
    category: 'Agriculture',
    year: 2018,
    description: 'Uttarakhand Tejpat (Indian bay leaf) is known for its aromatic flavor. Used in Indian cuisine.',
    speciality: 'Aromatic bay leaves',
    location: 'Uttarakhand',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a0b34b9c1a12?w=800',
    status: 'Active'
  },
  {
    id: '75',
    name: 'Uttarakhand Ringal Craft',
    state: 'Uttarakhand',
    category: 'Handicraft',
    year: 2020,
    description: 'Ringal craft uses bamboo from the Himalayas. Creates beautiful baskets, mats, and decorative items.',
    speciality: 'Traditional Himalayan bamboo craft',
    location: 'Uttarakhand',
    imageUrl: 'https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?w=800',
    status: 'Active'
  },
  
  // WEST BENGAL
  {
    id: '76',
    name: 'Darjeeling Tea',
    state: 'West Bengal',
    category: 'Agriculture',
    year: 2004,
    description: 'Darjeeling tea is grown in the Darjeeling district. Widely exported and known for its muscatel flavor.',
    speciality: 'Unique muscatel flavor and aroma',
    location: 'Darjeeling, West Bengal',
    imageUrl: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800',
    status: 'Active'
  },
  {
    id: '77',
    name: 'Baluchari Saree',
    state: 'West Bengal',
    category: 'Textile',
    year: 2011,
    description: 'Baluchari sarees are silk sarees with narrative designs woven into the fabric. Feature mythological scenes.',
    speciality: 'Narrative designs with mythological themes',
    location: 'Bishnupur, West Bengal',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800',
    status: 'Active'
  },
  {
    id: '78',
    name: 'Banglar Rasogolla',
    state: 'West Bengal',
    category: 'Food',
    year: 2017,
    description: 'Banglar Rasogolla is a spongy sweet made from chhena and semolina dough, soaked in sugar syrup.',
    speciality: 'Soft spongy sweet in sugar syrup',
    location: 'West Bengal',
    imageUrl: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800',
    status: 'Active'
  },
  {
    id: '79',
    name: 'Nakshi Kantha',
    state: 'West Bengal',
    category: 'Textile',
    year: 2008,
    description: 'Nakshi Kantha is traditional embroidered quilt. Made from old saris and dhotis with running stitch.',
    speciality: 'Traditional embroidered quilt art',
    location: 'West Bengal',
    imageUrl: 'https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?w=800',
    status: 'Active'
  },
  {
    id: '80',
    name: 'Bengal Dokra',
    state: 'West Bengal',
    category: 'Handicraft',
    year: 2018,
    description: 'Bengal Dokra is non-ferrous metal casting using lost-wax technique. Creates tribal art pieces.',
    speciality: 'Ancient lost-wax metal casting',
    location: 'West Bengal',
    imageUrl: 'https://images.unsplash.com/photo-1580467469359-91a73a6e92ca?w=800',
    status: 'Active'
  }
];

export const indianStates = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  // Union Territories
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry'
];

export const categories = ['Handicraft', 'Agriculture', 'Food', 'Textile', 'Natural', 'Others'] as const;

export const getProductsByState = (state: string) => {
  return giProducts.filter(product => product.state === state);
};

export const getProductById = (id: string) => {
  return giProducts.find(product => product.id === id);
};

export const getRelatedProducts = (product: GIProduct, limit: number = 4) => {
  return giProducts
    .filter(p => p.id !== product.id && (p.state === product.state || p.category === product.category))
    .slice(0, limit);
};