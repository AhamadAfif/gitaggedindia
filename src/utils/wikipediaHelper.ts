// Helper function to generate Wikipedia URLs for GI products

/**
 * Generates a Wikipedia URL for a given product name
 * @param productName - The name of the GI product
 * @returns Wikipedia URL
 */
export const getWikipediaUrl = (productName: string): string => {
  // Clean the product name for Wikipedia format
  const cleanName = productName
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/[()]/g, '') // Remove parentheses
    .replace(/_+/g, '_') // Replace multiple underscores with single
    .trim();
  
  return `https://en.wikipedia.org/wiki/${cleanName}`;
};

/**
 * Generates a Wikipedia search URL if exact page doesn't exist
 * @param productName - The name of the GI product
 * @returns Wikipedia search URL
 */
export const getWikipediaSearchUrl = (productName: string): string => {
  const searchQuery = encodeURIComponent(productName);
  return `https://en.wikipedia.org/w/index.php?search=${searchQuery}`;
};

/**
 * Opens Wikipedia link in a new tab
 * @param url - Wikipedia URL to open
 */
export const openWikipediaLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

// Mapping of GI products to their specific Wikipedia pages
// This ensures accurate redirects for products with different Wikipedia page names
export const wikipediaPageMapping: Record<string, string> = {
  // ANDHRA PRADESH
  'Tirupati Laddu': 'https://en.wikipedia.org/wiki/Tirupati_Laddu',
  'Srikalahasthi Kalamkari': 'https://en.wikipedia.org/wiki/Kalamkari',
  'Guntur Sannam Chilli': 'https://en.wikipedia.org/wiki/Guntur_chilli',
  
  // ARUNACHAL PRADESH
  'Arunachal Orange': 'https://en.wikipedia.org/wiki/Arunachal_Pradesh#Economy',
  'Arunachal Pradesh Yak Churpi': 'https://en.wikipedia.org/wiki/Churpi',
  
  // ASSAM
  'Muga Silk of Assam': 'https://en.wikipedia.org/wiki/Muga_silk',
  'Assam Orthodox Tea': 'https://en.wikipedia.org/wiki/Assam_tea',
  'Joha Rice of Assam': 'https://en.wikipedia.org/wiki/Joha_rice',
  
  // BIHAR
  'Madhubani Paintings': 'https://en.wikipedia.org/wiki/Madhubani_art',
  'Bhagalpur Silk': 'https://en.wikipedia.org/wiki/Tussar_silk',
  'Mithila Makhana': 'https://en.wikipedia.org/wiki/Euryale_ferox',
  
  // CHHATTISGARH
  'Bastar Dhokra': 'https://en.wikipedia.org/wiki/Dhokra',
  
  // GOA
  'Feni': 'https://en.wikipedia.org/wiki/Feni_(liquor)',
  'Khola Chilli': 'https://en.wikipedia.org/wiki/Goan_cuisine',
  
  // GUJARAT
  'Gir Kesar Mango': 'https://en.wikipedia.org/wiki/Kesar_(mango)',
  'Kutch Embroidery': 'https://en.wikipedia.org/wiki/Kutch_embroidery',
  'Patan Patola': 'https://en.wikipedia.org/wiki/Patola',
  
  // HARYANA
  'Phulkari': 'https://en.wikipedia.org/wiki/Phulkari',
  
  // HIMACHAL PRADESH
  'Kullu Shawl': 'https://en.wikipedia.org/wiki/Kullu_shawl',
  'Kangra Tea': 'https://en.wikipedia.org/wiki/Kangra_tea',
  
  // JAMMU & KASHMIR
  'Kashmir Pashmina': 'https://en.wikipedia.org/wiki/Pashmina',
  'Kashmir Saffron': 'https://en.wikipedia.org/wiki/Kashmiri_saffron',
  'Kani Shawl': 'https://en.wikipedia.org/wiki/Kani_shawl',
  
  // JHARKHAND
  'Sohrai-Khovar Painting': 'https://en.wikipedia.org/wiki/Sohrai_Khovar_painting',
  
  // KARNATAKA
  'Mysore Silk': 'https://en.wikipedia.org/wiki/Mysore_silk',
  'Mysore Agarbathi': 'https://en.wikipedia.org/wiki/Incense',
  'Channapatna Toys': 'https://en.wikipedia.org/wiki/Channapatna_toys',
  'Coorg Orange': 'https://en.wikipedia.org/wiki/Coorg',
  'Coorg Green Cardamom': 'https://en.wikipedia.org/wiki/Cardamom',
  'Bidriware': 'https://en.wikipedia.org/wiki/Bidriware',
  
  // KERALA
  'Aranmula Kannadi': 'https://en.wikipedia.org/wiki/Aranmula_kannadi',
  'Alleppey Coir': 'https://en.wikipedia.org/wiki/Coir',
  'Palakkadan Matta Rice': 'https://en.wikipedia.org/wiki/Palakkadan_Matta_rice',
  'Wayanad Robusta Coffee': 'https://en.wikipedia.org/wiki/Wayanad_district',
  
  // MADHYA PRADESH
  'Chanderi Sarees': 'https://en.wikipedia.org/wiki/Chanderi_Saree',
  'Maheshwar Sarees': 'https://en.wikipedia.org/wiki/Maheshwari_sari',
  'Gond Painting': 'https://en.wikipedia.org/wiki/Gond_art',
  
  // MAHARASHTRA
  'Alphonso Mango': 'https://en.wikipedia.org/wiki/Alphonso_(mango)',
  'Kolhapuri Chappal': 'https://en.wikipedia.org/wiki/Kolhapuri_chappal',
  'Warli Painting': 'https://en.wikipedia.org/wiki/Warli_painting',
  'Paithani Sarees': 'https://en.wikipedia.org/wiki/Paithani',
  'Nagpur Orange': 'https://en.wikipedia.org/wiki/Nagpur_orange',
  
  // MANIPUR
  'Shaphee Lanphee': 'https://en.wikipedia.org/wiki/Manipuri_dance',
  'Kachai Lemon': 'https://en.wikipedia.org/wiki/Manipur',
  
  // MEGHALAYA
  'Lakadong Turmeric': 'https://en.wikipedia.org/wiki/Lakadong_turmeric',
  'Khasi Mandarin': 'https://en.wikipedia.org/wiki/Khasi_people',
  
  // MIZORAM
  'Mizo Chilli': 'https://en.wikipedia.org/wiki/Bhut_jolokia',
  'Tawlhlohpuan': 'https://en.wikipedia.org/wiki/Mizo_people',
  
  // NAGALAND
  'Naga Mircha': 'https://en.wikipedia.org/wiki/Bhut_jolokia',
  'Naga Tree Tomato': 'https://en.wikipedia.org/wiki/Solanum_betaceum',
  
  // ODISHA
  'Orissa Pattachitra': 'https://en.wikipedia.org/wiki/Pattachitra',
  'Konark Stone Carving': 'https://en.wikipedia.org/wiki/Konark_Sun_Temple',
  'Odisha Rasagola': 'https://en.wikipedia.org/wiki/Rasgulla',
  
  // PUNJAB
  'Punjab Phulkari': 'https://en.wikipedia.org/wiki/Phulkari',
  
  // RAJASTHAN
  'Blue Pottery of Jaipur': 'https://en.wikipedia.org/wiki/Blue_Pottery_of_Jaipur',
  'Bikaneri Bhujia': 'https://en.wikipedia.org/wiki/Bikaneri_bhujia',
  'Kota Doria': 'https://en.wikipedia.org/wiki/Kota_Doria',
  'Makrana Marble': 'https://en.wikipedia.org/wiki/Makrana_marble',
  
  // SIKKIM
  'Sikkim Large Cardamom': 'https://en.wikipedia.org/wiki/Cardamom',
  'Dalle Khursani': 'https://en.wikipedia.org/wiki/Dalle_Khursani',
  
  // TAMIL NADU
  'Kanchipuram Silk': 'https://en.wikipedia.org/wiki/Kanchipuram_Silk_Saree',
  'Nilgiri Orthodox Tea': 'https://en.wikipedia.org/wiki/Nilgiri_tea',
  'Thanjavur Paintings': 'https://en.wikipedia.org/wiki/Tanjore_painting',
  'Madurai Sungudi': 'https://en.wikipedia.org/wiki/Sungudi',
  'Palani Panchamirtham': 'https://en.wikipedia.org/wiki/Panchamritham',
  
  // TELANGANA
  'Pochampally Ikat': 'https://en.wikipedia.org/wiki/Pochampally_Saree',
  'Hyderabad Haleem': 'https://en.wikipedia.org/wiki/Hyderabadi_haleem',
  'Nirmal Toys': 'https://en.wikipedia.org/wiki/Nirmal_toys',
  
  // TRIPURA
  'Tripura Queen Pineapple': 'https://en.wikipedia.org/wiki/Pineapple',
  
  // UTTAR PRADESH
  'Lucknow Chikan': 'https://en.wikipedia.org/wiki/Chikankari',
  'Banarasi Silk Sarees': 'https://en.wikipedia.org/wiki/Banarasi_sari',
  'Firozabad Glass': 'https://en.wikipedia.org/wiki/Firozabad',
  'Agra Petha': 'https://en.wikipedia.org/wiki/Petha',
  
  // UTTARAKHAND
  'Uttarakhand Tejpat': 'https://en.wikipedia.org/wiki/Indian_bay_leaf',
  'Uttarakhand Ringal Craft': 'https://en.wikipedia.org/wiki/Bamboo_craft',
  
  // WEST BENGAL
  'Darjeeling Tea': 'https://en.wikipedia.org/wiki/Darjeeling_tea',
  'Baluchari Saree': 'https://en.wikipedia.org/wiki/Baluchari_sari',
  'Banglar Rasogolla': 'https://en.wikipedia.org/wiki/Rasgulla',
  'Nakshi Kantha': 'https://en.wikipedia.org/wiki/Nakshi_kantha',
  'Bengal Dokra': 'https://en.wikipedia.org/wiki/Dhokra',
};

/**
 * Gets the Wikipedia URL for a product
 * Uses mapping if available, otherwise generates a search URL
 */
export const getProductWikipediaUrl = (productName: string): string => {
  // Check if we have a specific mapping
  if (wikipediaPageMapping[productName]) {
    return wikipediaPageMapping[productName];
  }
  
  // Otherwise, return a search URL
  return getWikipediaSearchUrl(productName);
};
