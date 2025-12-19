import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import type { GIProduct } from '../data/giProducts';
import { getCategoryIllustration } from './CategoryIllustrations';
import { getProductWikipediaUrl, openWikipediaLink } from '../utils/wikipediaHelper';

interface ProductCardProps {
  product: GIProduct;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const categoryColors: Record<string, string> = {
    Handicraft: 'bg-purple-100 text-purple-700',
    Agriculture: 'bg-green-100 text-green-700',
    Food: 'bg-orange-100 text-orange-700',
    Textile: 'bg-blue-100 text-blue-700',
    Natural: 'bg-emerald-100 text-emerald-700',
    Others: 'bg-gray-100 text-gray-700',
  };

  // Get the SVG illustration component for this category
  const IllustrationComponent = getCategoryIllustration(product.category);
  
  // Handle Wikipedia link click
  const handleWikipediaClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    const wikiUrl = product.wikipediaUrl || getProductWikipediaUrl(product.name);
    openWikipediaLink(wikiUrl);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-full group">
      <button
        onClick={onClick}
        className="w-full text-left"
      >
        <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <IllustrationComponent className="w-full h-full group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-gray-900 line-clamp-1 group-hover:text-[#FF9933] transition-colors">
              {product.name}
            </h3>
            <span className={`px-2 py-1 rounded text-xs whitespace-nowrap ${categoryColors[product.category]}`}>
              {product.category}
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 text-sm mb-1">
            <MapPin size={14} />
            <span className="line-clamp-1">{product.state}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <Calendar size={14} />
            <span>GI Tagged {product.year}</span>
          </div>
        </div>
      </button>
      
      {/* Know More Button */}
      <div className="px-4 pb-4 pt-0">
        <button
          onClick={handleWikipediaClick}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF9933] to-[#138808] text-white rounded-lg hover:shadow-md transition-all duration-300 group/btn"
        >
          <span className="text-sm font-medium">Know More</span>
          <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}