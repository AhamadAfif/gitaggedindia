// Custom SVG Illustrations for GI Product Categories
// All images are embedded as SVG code - no external dependencies

export const HandicraftIllustration = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Pottery/Handicraft Scene */}
    <rect width="400" height="300" fill="#FFF8F0"/>
    
    {/* Pottery Wheel Base */}
    <ellipse cx="200" cy="220" rx="60" ry="15" fill="#8B4513"/>
    <rect x="195" y="180" width="10" height="40" fill="#654321"/>
    
    {/* Clay Pot */}
    <path d="M 170 180 Q 170 150 180 140 L 220 140 Q 230 150 230 180 Q 230 200 220 210 L 180 210 Q 170 200 170 180 Z" 
          fill="#D2691E" stroke="#8B4513" strokeWidth="2"/>
    <ellipse cx="200" cy="140" rx="20" ry="8" fill="#CD853F"/>
    
    {/* Decorative Pattern on Pot */}
    <path d="M 180 160 Q 200 165 220 160" stroke="#8B4513" strokeWidth="2" fill="none"/>
    <path d="M 180 175 Q 200 180 220 175" stroke="#8B4513" strokeWidth="2" fill="none"/>
    
    {/* Brushes */}
    <g transform="translate(280, 150)">
      <rect x="0" y="0" width="6" height="60" fill="#654321" rx="2"/>
      <path d="M -4 0 L 10 0 L 8 -15 L -2 -15 Z" fill="#FFD700"/>
    </g>
    <g transform="translate(260, 160)">
      <rect x="0" y="0" width="6" height="50" fill="#654321" rx="2"/>
      <path d="M -4 0 L 10 0 L 8 -12 L -2 -12 Z" fill="#FF6347"/>
    </g>
    
    {/* Paint Palette */}
    <ellipse cx="120" cy="200" rx="40" ry="25" fill="#F5DEB3" stroke="#8B4513" strokeWidth="2"/>
    <circle cx="110" cy="195" r="6" fill="#FF6347"/>
    <circle cx="130" cy="195" r="6" fill="#FFD700"/>
    <circle cx="120" cy="208" r="6" fill="#4169E1"/>
    
    {/* Decorative Elements */}
    <circle cx="320" cy="80" r="25" fill="#FFE4B5" opacity="0.6"/>
    <circle cx="80" cy="60" r="30" fill="#FFE4B5" opacity="0.6"/>
  </svg>
);

export const AgricultureIllustration = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Farm/Agriculture Scene */}
    <rect width="400" height="300" fill="#E8F5E9"/>
    
    {/* Sun */}
    <circle cx="350" cy="50" r="30" fill="#FFD700"/>
    <circle cx="350" cy="50" r="35" fill="#FFD700" opacity="0.3"/>
    
    {/* Hills */}
    <path d="M 0 180 Q 100 140 200 180 Q 300 140 400 180 L 400 300 L 0 300 Z" fill="#8BC34A"/>
    <path d="M 0 200 Q 150 160 300 200 L 400 200 L 400 300 L 0 300 Z" fill="#66BB6A"/>
    
    {/* Crop Plants */}
    <g transform="translate(80, 180)">
      <rect x="-2" y="0" width="4" height="50" fill="#558B2F"/>
      <ellipse cx="0" cy="-5" rx="12" ry="15" fill="#FFA726"/>
      <ellipse cx="-8" cy="-8" rx="8" ry="10" fill="#FFB74D"/>
      <ellipse cx="8" cy="-8" rx="8" ry="10" fill="#FFB74D"/>
    </g>
    
    <g transform="translate(150, 185)">
      <rect x="-2" y="0" width="4" height="45" fill="#558B2F"/>
      <ellipse cx="0" cy="-5" rx="12" ry="15" fill="#FFA726"/>
      <ellipse cx="-8" cy="-8" rx="8" ry="10" fill="#FFB74D"/>
      <ellipse cx="8" cy="-8" rx="8" ry="10" fill="#FFB74D"/>
    </g>
    
    <g transform="translate(220, 175)">
      <rect x="-2" y="0" width="4" height="55" fill="#558B2F"/>
      <ellipse cx="0" cy="-5" rx="12" ry="15" fill="#FFA726"/>
      <ellipse cx="-8" cy="-8" rx="8" ry="10" fill="#FFB74D"/>
      <ellipse cx="8" cy="-8" rx="8" ry="10" fill="#FFB74D"/>
    </g>
    
    {/* Wheat/Rice Stalks */}
    <g transform="translate(310, 190)">
      <rect x="-1" y="0" width="2" height="40" fill="#F9A825"/>
      <ellipse cx="-4" cy="-8" rx="2" ry="8" fill="#FDD835"/>
      <ellipse cx="0" cy="-10" rx="2" ry="8" fill="#FDD835"/>
      <ellipse cx="4" cy="-8" rx="2" ry="8" fill="#FDD835"/>
    </g>
    
    <g transform="translate(330, 195)">
      <rect x="-1" y="0" width="2" height="35" fill="#F9A825"/>
      <ellipse cx="-4" cy="-8" rx="2" ry="8" fill="#FDD835"/>
      <ellipse cx="0" cy="-10" rx="2" ry="8" fill="#FDD835"/>
      <ellipse cx="4" cy="-8" rx="2" ry="8" fill="#FDD835"/>
    </g>
  </svg>
);

export const TextileIllustration = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Textile/Weaving Scene */}
    <rect width="400" height="300" fill="#FFF3E0"/>
    
    {/* Loom Frame */}
    <rect x="80" y="60" width="240" height="180" fill="none" stroke="#8D6E63" strokeWidth="8"/>
    <rect x="90" y="70" width="220" height="160" fill="#FFF9C4"/>
    
    {/* Woven Pattern */}
    <defs>
      <pattern id="weavePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="10" height="10" fill="#E91E63"/>
        <rect x="10" y="10" width="10" height="10" fill="#E91E63"/>
        <rect x="10" y="0" width="10" height="10" fill="#9C27B0"/>
        <rect x="0" y="10" width="10" height="10" fill="#9C27B0"/>
      </pattern>
    </defs>
    
    <rect x="100" y="85" width="200" height="60" fill="url(#weavePattern)" opacity="0.8"/>
    
    {/* Thread Lines */}
    <line x1="100" y1="155" x2="300" y2="155" stroke="#FF9800" strokeWidth="2"/>
    <line x1="100" y1="165" x2="300" y2="165" stroke="#4CAF50" strokeWidth="2"/>
    <line x1="100" y1="175" x2="300" y2="175" stroke="#2196F3" strokeWidth="2"/>
    <line x1="100" y1="185" x2="300" y2="185" stroke="#F44336" strokeWidth="2"/>
    
    {/* Shuttle */}
    <ellipse cx="200" cy="200" rx="40" ry="12" fill="#795548"/>
    <ellipse cx="200" cy="200" rx="30" ry="8" fill="#A1887F"/>
    
    {/* Thread Spools */}
    <g transform="translate(60, 120)">
      <rect x="-8" y="0" width="16" height="40" fill="#D32F2F" rx="2"/>
      <ellipse cx="0" cy="0" rx="10" ry="4" fill="#E57373"/>
      <ellipse cx="0" cy="40" rx="10" ry="4" fill="#C62828"/>
    </g>
    
    <g transform="translate(340, 140)">
      <rect x="-8" y="0" width="16" height="40" fill="#1976D2" rx="2"/>
      <ellipse cx="0" cy="0" rx="10" ry="4" fill="#64B5F6"/>
      <ellipse cx="0" cy="40" rx="10" ry="4" fill="#1565C0"/>
    </g>
  </svg>
);

export const FoodIllustration = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Food/Sweets Scene */}
    <rect width="400" height="300" fill="#FFFDE7"/>
    
    {/* Serving Plate */}
    <ellipse cx="200" cy="200" rx="120" ry="25" fill="#FFE082"/>
    <ellipse cx="200" cy="195" rx="115" ry="23" fill="#FFD54F"/>
    
    {/* Sweet Laddus */}
    <circle cx="160" cy="170" r="30" fill="#FF9800"/>
    <circle cx="160" cy="170" r="28" fill="#FFB74D"/>
    <circle cx="155" cy="165" r="3" fill="#F57C00"/>
    <circle cx="165" cy="168" r="3" fill="#F57C00"/>
    <circle cx="158" cy="175" r="3" fill="#F57C00"/>
    
    <circle cx="240" cy="175" r="30" fill="#FF9800"/>
    <circle cx="240" cy="175" r="28" fill="#FFB74D"/>
    <circle cx="235" cy="170" r="3" fill="#F57C00"/>
    <circle cx="245" cy="173" r="3" fill="#F57C00"/>
    <circle cx="238" cy="180" r="3" fill="#F57C00"/>
    
    <circle cx="200" cy="155" r="28" fill="#FF9800"/>
    <circle cx="200" cy="155" r="26" fill="#FFB74D"/>
    <circle cx="195" cy="150" r="3" fill="#F57C00"/>
    <circle cx="205" cy="153" r="3" fill="#F57C00"/>
    <circle cx="198" cy="160" r="3" fill="#F57C00"/>
    
    {/* Decorative Elements */}
    <path d="M 180 140 Q 185 135 190 140" stroke="#4CAF50" strokeWidth="2" fill="none"/>
    <circle cx="185" cy="138" r="2" fill="#4CAF50"/>
    
    <path d="M 210 140 Q 215 135 220 140" stroke="#4CAF50" strokeWidth="2" fill="none"/>
    <circle cx="215" cy="138" r="2" fill="#4CAF50"/>
    
    {/* Steam */}
    <path d="M 150 140 Q 145 125 150 115" stroke="#BDBDBD" strokeWidth="3" fill="none" opacity="0.6" strokeLinecap="round"/>
    <path d="M 250 145 Q 255 130 250 120" stroke="#BDBDBD" strokeWidth="3" fill="none" opacity="0.6" strokeLinecap="round"/>
  </svg>
);

export const NaturalIllustration = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Natural Products Scene */}
    <rect width="400" height="300" fill="#F1F8E9"/>
    
    {/* Leaves and Natural Elements */}
    <path d="M 100 150 Q 120 130 140 150 Q 120 170 100 150 Z" fill="#66BB6A" stroke="#388E3C" strokeWidth="2"/>
    <path d="M 120 150 L 120 180" stroke="#388E3C" strokeWidth="2"/>
    
    <path d="M 260 140 Q 280 120 300 140 Q 280 160 260 140 Z" fill="#66BB6A" stroke="#388E3C" strokeWidth="2"/>
    <path d="M 280 140 L 280 170" stroke="#388E3C" strokeWidth="2"/>
    
    {/* Essential Oil Bottle */}
    <rect x="180" y="140" width="40" height="80" rx="4" fill="#8BC34A" opacity="0.7"/>
    <rect x="185" y="145" width="30" height="70" rx="2" fill="#AED581" opacity="0.5"/>
    <rect x="190" y="125" width="20" height="15" fill="#689F38"/>
    <rect x="195" y="120" width="10" height="5" fill="#33691E"/>
    
    {/* Droplets */}
    <ellipse cx="200" cy="170" rx="3" ry="5" fill="#FFFFFF" opacity="0.8"/>
    
    {/* Herbs/Spices Bowl */}
    <ellipse cx="200" cy="240" rx="60" ry="15" fill="#D7CCC8"/>
    <path d="M 140 240 Q 140 220 160 215 L 240 215 Q 260 220 260 240" fill="#BCAAA4"/>
    <ellipse cx="200" cy="215" rx="40" ry="10" fill="#8D6E63"/>
    
    {/* Natural Texture Dots */}
    <circle cx="190" cy="225" r="2" fill="#4E342E"/>
    <circle cx="200" cy="228" r="2" fill="#4E342E"/>
    <circle cx="210" cy="226" r="2" fill="#4E342E"/>
    <circle cx="195" cy="232" r="2" fill="#4E342E"/>
    <circle cx="205" cy="230" r="2" fill="#4E342E"/>
  </svg>
);

export const OthersIllustration = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Generic Products Scene */}
    <rect width="400" height="300" fill="#F5F5F5"/>
    
    {/* Star/Badge */}
    <path d="M 200 80 L 215 120 L 260 125 L 225 155 L 235 200 L 200 175 L 165 200 L 175 155 L 140 125 L 185 120 Z" 
          fill="#FFB300" stroke="#F57F17" strokeWidth="2"/>
    <circle cx="200" cy="140" r="30" fill="#FFF9C4"/>
    <text x="200" y="150" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#F57F17">GI</text>
    
    {/* Decorative Elements */}
    <circle cx="280" cy="100" r="20" fill="#E1BEE7" opacity="0.6"/>
    <circle cx="120" cy="90" r="25" fill="#BBDEFB" opacity="0.6"/>
    <circle cx="320" cy="200" r="30" fill="#C8E6C9" opacity="0.6"/>
    <circle cx="80" cy="220" r="28" fill="#FFCCBC" opacity="0.6"/>
  </svg>
);

// Mapping object for easy access
export const categoryIllustrations = {
  'Handicraft': HandicraftIllustration,
  'Agriculture': AgricultureIllustration,
  'Food': FoodIllustration,
  'Textile': TextileIllustration,
  'Natural': NaturalIllustration,
  'Others': OthersIllustration,
};

// Helper function to get illustration component by category
export const getCategoryIllustration = (category: string) => {
  return categoryIllustrations[category as keyof typeof categoryIllustrations] || OthersIllustration;
};
