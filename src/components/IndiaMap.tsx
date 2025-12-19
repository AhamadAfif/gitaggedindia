import { useState } from 'react';
import { giProducts } from '../data/giProducts';

interface IndiaMapProps {
  onStateClick: (state: string) => void;
}

export function IndiaMap({ onStateClick }: IndiaMapProps) {
  const [hoveredState, setHoveredState] = useState<string>('');

  // Get product count for each state
  const getStateProductCount = (state: string) => {
    return giProducts.filter(p => p.state === state).length;
  };

  // Comprehensive SVG paths for all Indian states and union territories
  const statePaths: Record<string, string> = {
    // NORTHERN STATES
    'Jammu and Kashmir': 'M 245,30 L 285,28 L 310,35 L 328,45 L 338,58 L 342,75 L 340,92 L 332,105 L 318,112 L 302,115 L 285,112 L 270,105 L 258,92 L 250,75 L 246,58 Z',
    
    'Ladakh': 'M 285,28 L 320,22 L 350,25 L 375,35 L 390,50 L 395,68 L 390,85 L 375,95 L 355,100 L 338,98 L 328,88 L 325,75 L 328,58 L 335,45 Z',
    
    'Himachal Pradesh': 'M 270,105 L 285,112 L 302,115 L 318,118 L 330,125 L 335,138 L 332,152 L 322,162 L 308,168 L 292,170 L 278,165 L 268,155 L 262,142 L 262,128 Z',
    
    'Punjab': 'M 255,125 L 268,128 L 280,135 L 288,145 L 292,158 L 288,172 L 278,182 L 265,188 L 252,188 L 242,180 L 238,168 L 238,152 L 242,138 Z',
    
    'Chandigarh': 'M 268,155 L 275,153 L 280,157 L 280,164 L 275,168 L 268,166 Z',
    
    'Uttarakhand': 'M 308,168 L 322,172 L 338,178 L 352,188 L 362,200 L 365,215 L 360,228 L 348,235 L 332,238 L 318,235 L 305,228 L 295,218 L 292,205 L 295,190 L 302,178 Z',
    
    'Haryana': 'M 252,188 L 265,188 L 278,192 L 290,200 L 298,212 L 298,228 L 290,240 L 278,248 L 265,250 L 252,246 L 242,236 L 238,222 L 238,208 Z',
    
    'Delhi': 'M 268,215 L 278,213 L 285,218 L 285,228 L 278,233 L 268,231 Z',
    
    'Uttar Pradesh': 'M 305,228 L 348,235 L 382,242 L 412,248 L 442,252 L 468,258 L 488,265 L 502,275 L 510,290 L 512,308 L 505,325 L 492,338 L 472,348 L 448,352 L 422,352 L 395,348 L 368,342 L 342,335 L 318,325 L 298,312 L 285,295 L 278,278 L 278,260 L 285,245 Z',
    
    // WESTERN STATES
    'Rajasthan': 'M 155,155 L 188,162 L 218,172 L 242,185 L 260,202 L 272,225 L 280,252 L 282,285 L 278,318 L 268,352 L 252,382 L 232,405 L 208,420 L 182,428 L 158,428 L 135,418 L 115,402 L 100,382 L 90,358 L 85,332 L 85,305 L 90,278 L 100,252 L 115,228 L 132,205 L 145,182 Z',
    
    'Gujarat': 'M 85,305 L 105,318 L 128,335 L 148,355 L 165,378 L 178,405 L 185,435 L 185,465 L 178,492 L 165,515 L 148,532 L 128,542 L 105,545 L 85,538 L 68,522 L 55,500 L 48,475 L 45,448 L 48,420 L 55,392 L 68,368 L 80,345 Z',
    
    'Dadra and Nagar Haveli and Daman and Diu': 'M 115,425 L 125,423 L 132,428 L 132,437 L 125,442 L 115,440 Z M 135,470 L 145,468 L 152,473 L 152,482 L 145,487 L 135,485 Z',
    
    'Maharashtra': 'M 185,428 L 218,435 L 252,445 L 282,458 L 308,475 L 328,495 L 340,518 L 345,545 L 342,572 L 332,595 L 315,612 L 292,622 L 265,625 L 238,620 L 212,608 L 188,590 L 168,568 L 155,542 L 148,515 L 148,488 L 155,462 L 168,442 Z',
    
    'Goa': 'M 168,568 L 185,572 L 198,582 L 202,598 L 198,612 L 185,622 L 172,624 L 162,616 L 158,602 L 160,588 Z',
    
    // CENTRAL STATES
    'Madhya Pradesh': 'M 232,405 L 268,415 L 302,428 L 335,445 L 362,465 L 382,488 L 395,512 L 402,538 L 400,565 L 390,588 L 372,605 L 348,615 L 322,618 L 295,615 L 268,605 L 245,588 L 225,565 L 210,538 L 202,512 L 200,485 L 205,458 L 215,432 Z',
    
    'Chhattisgarh': 'M 372,605 L 395,612 L 418,622 L 435,635 L 448,652 L 455,672 L 455,692 L 448,710 L 435,725 L 418,735 L 398,740 L 378,738 L 360,728 L 345,712 L 335,692 L 330,672 L 330,652 L 338,635 L 352,622 Z',
    
    // EASTERN STATES
    'Bihar': 'M 492,290 L 522,295 L 548,302 L 570,312 L 585,325 L 592,342 L 592,360 L 585,378 L 570,392 L 548,402 L 522,408 L 495,408 L 472,400 L 455,388 L 445,372 L 442,355 L 445,338 L 455,322 L 472,308 Z',
    
    'Jharkhand': 'M 495,408 L 522,412 L 545,420 L 562,432 L 572,448 L 575,468 L 570,488 L 558,505 L 540,518 L 518,525 L 495,528 L 475,522 L 458,510 L 448,492 L 445,472 L 448,452 L 458,435 L 475,422 Z',
    
    'West Bengal': 'M 548,402 L 575,408 L 598,418 L 615,432 L 625,450 L 630,472 L 628,495 L 618,515 L 602,528 L 580,535 L 555,535 L 532,528 L 515,515 L 505,495 L 502,472 L 505,450 L 515,432 L 530,418 Z',
    
    'Sikkim': 'M 592,342 L 608,345 L 620,352 L 625,365 L 620,378 L 608,385 L 595,387 L 585,380 L 582,367 L 585,354 Z',
    
    'Odisha': 'M 475,522 L 505,528 L 532,538 L 552,552 L 565,572 L 572,595 L 572,618 L 565,640 L 552,658 L 532,670 L 505,675 L 478,672 L 455,658 L 438,638 L 428,615 L 425,590 L 428,568 L 438,548 L 455,532 Z',
    
    // NORTHEASTERN STATES
    'Assam': 'M 598,355 L 635,362 L 665,375 L 688,392 L 702,412 L 708,435 L 705,458 L 692,475 L 672,485 L 648,488 L 625,482 L 605,468 L 592,448 L 585,425 L 585,400 L 590,378 Z',
    
    'Meghalaya': 'M 625,482 L 648,488 L 665,498 L 675,512 L 675,528 L 665,542 L 648,548 L 628,548 L 612,538 L 605,522 L 608,505 L 618,492 Z',
    
    'Arunachal Pradesh': 'M 635,305 L 675,312 L 708,325 L 735,345 L 752,368 L 760,395 L 755,418 L 740,435 L 718,445 L 692,448 L 668,442 L 648,428 L 632,408 L 625,385 L 625,360 L 630,335 Z',
    
    'Nagaland': 'M 705,458 L 725,465 L 740,478 L 748,495 L 748,515 L 740,532 L 725,542 L 708,545 L 692,538 L 682,522 L 678,502 L 682,482 L 692,468 Z',
    
    'Manipur': 'M 692,538 L 708,545 L 722,555 L 730,572 L 730,592 L 722,610 L 708,620 L 692,622 L 678,615 L 668,598 L 665,578 L 668,558 L 678,545 Z',
    
    'Mizoram': 'M 668,598 L 682,602 L 692,612 L 698,628 L 695,648 L 685,662 L 668,668 L 652,665 L 642,652 L 638,635 L 642,618 L 652,605 Z',
    
    'Tripura': 'M 628,548 L 645,552 L 658,562 L 665,578 L 662,595 L 650,608 L 635,612 L 622,608 L 612,595 L 610,578 L 615,562 Z',
    
    // SOUTHERN STATES
    'Telangana': 'M 322,618 L 350,625 L 375,635 L 392,650 L 402,670 L 405,692 L 398,712 L 382,725 L 360,732 L 338,732 L 320,722 L 308,705 L 302,685 L 302,665 L 308,645 L 318,630 Z',
    
    'Andhra Pradesh': 'M 360,732 L 390,738 L 418,748 L 442,762 L 460,782 L 472,808 L 475,835 L 468,860 L 452,880 L 428,892 L 400,898 L 372,895 L 348,882 L 330,862 L 320,838 L 315,812 L 318,785 L 330,760 L 345,742 Z',
    
    'Karnataka': 'M 238,620 L 270,628 L 300,640 L 325,658 L 345,680 L 358,708 L 365,738 L 365,768 L 358,798 L 342,825 L 318,848 L 288,862 L 258,868 L 230,865 L 208,850 L 192,828 L 182,802 L 178,772 L 178,742 L 185,712 L 198,685 L 215,662 L 228,642 Z',
    
    'Tamil Nadu': 'M 288,862 L 318,870 L 348,882 L 375,900 L 395,922 L 408,948 L 412,978 L 408,1008 L 395,1035 L 372,1055 L 342,1065 L 310,1068 L 280,1060 L 255,1042 L 238,1018 L 228,988 L 225,958 L 228,928 L 238,900 L 255,878 Z',
    
    'Puducherry': 'M 375,900 L 382,898 L 388,903 L 388,910 L 382,915 L 375,913 Z M 285,1025 L 292,1023 L 298,1028 L 298,1035 L 292,1040 L 285,1038 Z',
    
    'Kerala': 'M 230,865 L 252,872 L 270,885 L 282,905 L 288,930 L 288,958 L 282,988 L 270,1018 L 252,1042 L 230,1058 L 208,1062 L 188,1055 L 175,1038 L 168,1015 L 165,988 L 165,960 L 168,932 L 175,908 L 188,888 Z',
    
    'Lakshadweep': 'M 25,750 L 35,748 L 42,753 L 45,763 L 42,773 L 35,778 L 25,776 L 18,771 L 15,761 Z M 32,800 L 40,798 L 46,803 L 48,812 L 46,821 L 40,826 L 32,824 L 26,819 L 24,810 Z',
    
    'Andaman and Nicobar Islands': 'M 740,680 L 752,678 L 762,685 L 768,698 L 768,715 L 762,728 L 752,735 L 740,733 L 732,726 L 728,713 L 728,698 Z M 745,780 L 755,778 L 763,783 L 768,795 L 768,810 L 763,822 L 755,827 L 745,825 L 738,820 L 735,808 L 735,795 Z M 750,870 L 758,868 L 765,873 L 768,883 L 768,895 L 765,905 L 758,910 L 750,908 L 744,903 L 742,893 L 742,883 Z',
  };

  // Label positions for state names/counts
  const stateLabelPositions: Record<string, { x: number; y: number }> = {
    'Jammu and Kashmir': { x: 295, y: 72 },
    'Ladakh': { x: 360, y: 62 },
    'Himachal Pradesh': { x: 295, y: 142 },
    'Punjab': { x: 265, y: 158 },
    'Chandigarh': { x: 273, y: 161 },
    'Uttarakhand': { x: 330, y: 205 },
    'Haryana': { x: 270, y: 218 },
    'Delhi': { x: 276, y: 222 },
    'Uttar Pradesh': { x: 395, y: 295 },
    'Rajasthan': { x: 190, y: 290 },
    'Gujarat': { x: 120, y: 435 },
    'Dadra and Nagar Haveli and Daman and Diu': { x: 122, y: 455 },
    'Madhya Pradesh': { x: 305, y: 510 },
    'Bihar': { x: 518, y: 352 },
    'Jharkhand': { x: 505, y: 468 },
    'West Bengal': { x: 568, y: 468 },
    'Sikkim': { x: 598, y: 365 },
    'Assam': { x: 645, y: 425 },
    'Meghalaya': { x: 642, y: 518 },
    'Arunachal Pradesh': { x: 690, y: 378 },
    'Nagaland': { x: 715, y: 502 },
    'Manipur': { x: 700, y: 582 },
    'Mizoram': { x: 670, y: 635 },
    'Tripura': { x: 635, y: 580 },
    'Odisha': { x: 505, y: 605 },
    'Chhattisgarh': { x: 390, y: 678 },
    'Maharashtra': { x: 250, y: 528 },
    'Goa': { x: 180, y: 598 },
    'Telangana': { x: 355, y: 678 },
    'Andhra Pradesh': { x: 405, y: 822 },
    'Karnataka': { x: 268, y: 758 },
    'Kerala': { x: 220, y: 972 },
    'Tamil Nadu': { x: 325, y: 965 },
    'Puducherry': { x: 380, y: 905 },
    'Lakshadweep': { x: 32, y: 785 },
    'Andaman and Nicobar Islands': { x: 750, y: 785 },
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-orange-50 via-white to-green-50 rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">India - States & Union Territories</h3>
        <p className="text-sm text-gray-600 mt-1">Interactive map of Geographical Indication products across India</p>
      </div>
      
      <div className="relative w-full max-w-5xl mx-auto">
        <svg viewBox="0 0 800 1100" className="w-full h-full drop-shadow-sm">
          <defs>
            {/* Gradient for hover effect */}
            <linearGradient id="hoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FF9933', stopOpacity: 0.95 }} />
              <stop offset="100%" style={{ stopColor: '#e88a2e', stopOpacity: 1 }} />
            </linearGradient>
            
            {/* Gradient for states with products */}
            <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#138808', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#0d6006', stopOpacity: 0.9 }} />
            </linearGradient>

            {/* Shadow filter */}
            <filter id="stateShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodOpacity="0.3"/>
            </filter>
            
            {/* Hover shadow filter */}
            <filter id="hoverShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodOpacity="0.45"/>
            </filter>
          </defs>

          {/* Render all states and UTs */}
          {Object.entries(statePaths).map(([stateName, path]) => {
            const productCount = getStateProductCount(stateName);
            const isHovered = hoveredState === stateName;
            const hasProducts = productCount > 0;
            const labelPos = stateLabelPositions[stateName];
            
            return (
              <g key={stateName}>
                {/* State boundary/fill */}
                <path
                  d={path}
                  fill={isHovered ? 'url(#hoverGradient)' : hasProducts ? 'url(#activeGradient)' : '#f3f4f6'}
                  stroke={isHovered ? '#FF9933' : hasProducts ? '#138808' : '#d1d5db'}
                  strokeWidth={isHovered ? "2.5" : "1.5"}
                  opacity={isHovered ? 1 : hasProducts ? 0.9 : 0.5}
                  className={hasProducts ? 'cursor-pointer transition-all duration-300' : 'cursor-not-allowed transition-all duration-300'}
                  style={{
                    filter: isHovered ? 'url(#hoverShadow)' : hasProducts ? 'url(#stateShadow)' : 'none',
                  }}
                  onMouseEnter={() => hasProducts && setHoveredState(stateName)}
                  onMouseLeave={() => setHoveredState('')}
                  onClick={() => hasProducts && onStateClick(stateName)}
                />
                
                {/* Product count badge */}
                {hasProducts && labelPos && (
                  <g
                    className="pointer-events-none transition-all duration-300"
                    opacity={isHovered ? 1 : 0.9}
                  >
                    {/* Badge background */}
                    <circle
                      cx={labelPos.x}
                      cy={labelPos.y}
                      r={isHovered ? 17 : 15}
                      fill="white"
                      stroke={isHovered ? '#FF9933' : '#138808'}
                      strokeWidth={isHovered ? 3 : 2.5}
                      filter="url(#stateShadow)"
                    />
                    {/* Product count number */}
                    <text
                      x={labelPos.x}
                      y={labelPos.y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={isHovered ? 15 : 13}
                      fontWeight="bold"
                      fill={isHovered ? '#FF9933' : '#138808'}
                    >
                      {productCount}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Island Labels */}
          <text x="32" y="735" textAnchor="middle" fontSize="9" fill="#666" fontWeight="600">
            Lakshadweep
          </text>
          <text x="750" y="655" textAnchor="middle" fontSize="9" fill="#666" fontWeight="600">
            Andaman &
          </text>
          <text x="750" y="665" textAnchor="middle" fontSize="9" fill="#666" fontWeight="600">
            Nicobar Islands
          </text>
        </svg>

        {/* Hover tooltip */}
        {hoveredState && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white px-5 py-3 rounded-xl shadow-2xl border-2 border-[#FF9933] pointer-events-none z-50 animate-scale-in">
            <p className="font-semibold text-gray-900">{hoveredState}</p>
            <p className="text-sm text-gray-600 mt-0.5">
              {getStateProductCount(hoveredState)} GI Product{getStateProductCount(hoveredState) !== 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#138808] to-[#0d6006] opacity-85 shadow-sm"></div>
          <span className="text-gray-700 font-medium">Has GI Products</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-md bg-gray-200 opacity-50 shadow-sm"></div>
          <span className="text-gray-700 font-medium">No Data</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#FF9933] to-[#e88a2e] shadow-sm"></div>
          <span className="text-gray-700 font-medium">Hover/Active</span>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center">
          <p className="text-2xl font-bold text-[#FF9933]">28</p>
          <p className="text-xs text-gray-600 mt-1">States</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center">
          <p className="text-2xl font-bold text-[#138808]">8</p>
          <p className="text-xs text-gray-600 mt-1">Union Territories</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center">
          <p className="text-2xl font-bold text-[#000080]">{giProducts.length}</p>
          <p className="text-xs text-gray-600 mt-1">GI Products</p>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center">
          <p className="text-2xl font-bold text-gray-700">{Object.keys(statePaths).filter(s => getStateProductCount(s) > 0).length}</p>
          <p className="text-xs text-gray-600 mt-1">Regions Active</p>
        </div>
      </div>

      {/* Info text */}
      <p className="text-center text-sm text-gray-600 mt-6">
        <span className="inline-block mr-2">🗺️</span>
        Hover over regions to see details • Click to explore GI products
      </p>
    </div>
  );
}
