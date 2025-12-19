import { ArrowLeft, MapPin, Calendar, Tag, Award, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { getProductById, getRelatedProducts } from '../data/giProducts';
import { ProductCard } from '../components/ProductCard';
import { getCategoryIllustration } from '../components/CategoryIllustrations';
import { getProductWikipediaUrl, openWikipediaLink } from '../utils/wikipediaHelper';

interface ProductDetailsPageProps {
  productId: string;
  onNavigateToProduct: (productId: string) => void;
  onBack: () => void;
}

export function ProductDetailsPage({ productId, onNavigateToProduct, onBack }: ProductDetailsPageProps) {
  const product = getProductById(productId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Product not found</p>
          <button
            onClick={onBack}
            className="px-6 py-2 bg-[#FF9933] text-white rounded-lg hover:bg-[#e88a2e] transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product);
  const categoryColors: Record<string, string> = {
    Handicraft: 'bg-purple-100 text-purple-700 border-purple-200',
    Agriculture: 'bg-green-100 text-green-700 border-green-200',
    Food: 'bg-orange-100 text-orange-700 border-orange-200',
    Textile: 'bg-blue-100 text-blue-700 border-blue-200',
    Natural: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Others: 'bg-gray-100 text-gray-700 border-gray-200',
  };

  // Get the SVG illustration component for this category
  const IllustrationComponent = getCategoryIllustration(product.category);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-[#FF9933] transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Left: Image */}
            <div>
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 mb-4">
                <IllustrationComponent className="w-full h-full" />
              </div>
              <div className={`inline-block px-4 py-2 rounded-lg border ${categoryColors[product.category]}`}>
                {product.category}
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col">
              <h1 className="text-gray-900 mb-4">{product.name}</h1>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={20} className="text-[#FF9933]" />
                  <span>{product.state}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar size={20} className="text-[#FF9933]" />
                  <span>GI Tagged in {product.year}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-700">
                  <Award size={20} className="text-[#FF9933]" />
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    product.status === 'Active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {product.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <Tag size={20} className="text-[#FF9933]" />
                  <span>{product.location}</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                <div>
                  <h3 className="text-gray-900 mb-2">What Makes It Special</h3>
                  <p className="text-gray-600 leading-relaxed">{product.speciality}</p>
                </div>
              </div>

              {/* Manufacturing Location */}
              <div className="mt-8 p-4 bg-gradient-to-br from-orange-50 to-green-50 rounded-lg border border-gray-200">
                <h3 className="text-gray-900 mb-2">Manufacturing Location</h3>
                <p className="text-gray-700 flex items-center gap-2">
                  <MapPin size={16} className="text-[#FF9933]" />
                  {product.location}
                </p>
              </div>

              {/* Wikipedia Link */}
              <div className="mt-4">
                <button
                  onClick={() => openWikipediaLink(getProductWikipediaUrl(product.name))}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#FF9933] transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Learn More on Wikipedia</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-gray-900 mb-6">Related GI Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  onClick={() => onNavigateToProduct(relatedProduct.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}