import { useState, useMemo } from 'react';
import { SearchBar } from '../components/SearchBar';
import { FilterChips } from '../components/FilterChips';
import { ProductCard } from '../components/ProductCard';
import { IndiaMap } from '../components/IndiaMap';
import { giProducts, categories } from '../data/giProducts';
import { Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigateToState: (state: string) => void;
  onNavigateToProduct: (productId: string) => void;
}

export function HomePage({ onNavigateToState, onNavigateToProduct }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return giProducts.filter(product => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredProducts = filteredProducts.slice(0, 8);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-green-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-gray-900 mb-4">
              Discover India's Geographical Indication Heritage
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore authentic products with geographical indication tags from across India. 
              Each product tells a unique story of culture, tradition, and craftsmanship.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <SearchBar 
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>

          {/* Filter Chips */}
          <div className="max-w-3xl mx-auto">
            <FilterChips 
              options={categories}
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-gray-900 mb-2">
              Explore by State
            </h2>
            <p className="text-gray-600">
              Click on any state to discover its unique GI-tagged products
            </p>
          </div>
          <IndiaMap onStateClick={onNavigateToState} />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="text-[#FF9933]" size={24} />
            <h2 className="text-gray-900">
              {searchQuery || selectedCategory !== 'All' ? 'Matching Products' : 'Featured GI Products'}
            </h2>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-6 py-2 bg-[#FF9933] text-white rounded-lg hover:bg-[#e88a2e] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => onNavigateToProduct(product.id)}
                  />
                ))}
              </div>

              {filteredProducts.length > 8 && (
                <div className="text-center mt-8">
                  <p className="text-gray-600 mb-4">
                    Showing {featuredProducts.length} of {filteredProducts.length} products
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-[#FF9933] mb-2">
                {giProducts.length}+
              </div>
              <p className="text-gray-600">GI Tagged Products</p>
            </div>
            <div>
              <div className="text-[#138808] mb-2">
                {new Set(giProducts.map(p => p.state)).size}+
              </div>
              <p className="text-gray-600">States & UTs</p>
            </div>
            <div>
              <div className="text-[#000080] mb-2">
                {categories.length}
              </div>
              <p className="text-gray-600">Categories</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
