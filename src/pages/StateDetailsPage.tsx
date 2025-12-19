import { useState, useMemo } from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { FilterChips } from '../components/FilterChips';
import { getProductsByState, categories } from '../data/giProducts';

interface StateDetailsPageProps {
  state: string;
  onNavigateToProduct: (productId: string) => void;
  onBack: () => void;
}

export function StateDetailsPage({ state, onNavigateToProduct, onBack }: StateDetailsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const stateProducts = getProductsByState(state);
  
  const years = useMemo(() => {
    const yearSet = new Set(stateProducts.map(p => p.year.toString()));
    return Array.from(yearSet).sort((a, b) => parseInt(b) - parseInt(a));
  }, [stateProducts]);

  const filteredProducts = useMemo(() => {
    return stateProducts.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesYear = selectedYear === 'All' || product.year.toString() === selectedYear;
      const matchesStatus = selectedStatus === 'All' || product.status === selectedStatus;
      
      return matchesCategory && matchesYear && matchesStatus;
    });
  }, [stateProducts, selectedCategory, selectedYear, selectedStatus]);

  const stateInfo: Record<string, string> = {
    'Karnataka': 'Karnataka is renowned for its silk sarees, sandalwood products, and aromatic coffee. The state has a rich tradition of handicrafts and agricultural excellence.',
    'West Bengal': 'West Bengal is famous for Darjeeling tea, terracotta work, and traditional textiles. The state has a strong cultural heritage reflected in its GI products.',
    'Tamil Nadu': 'Tamil Nadu is known for its exquisite Kanchipuram silk, temple jewelry, and agricultural products. The state preserves ancient crafts and traditions.',
    'Uttar Pradesh': 'Uttar Pradesh boasts of Banarasi silk, chikankari embroidery, and traditional crafts. The state is a treasure trove of cultural and artistic heritage.',
    'Maharashtra': 'Maharashtra is celebrated for its Alphonso mangoes, Warli art, and Kolhapuri chappals. The state combines agricultural excellence with traditional crafts.',
    'Rajasthan': 'Rajasthan is famous for its blue pottery, bandhani textiles, and traditional crafts. The state showcases vibrant colors and rich cultural traditions.',
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF9933] to-[#138808] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-gray-100 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={32} />
            <h1 className="text-white">{state}</h1>
          </div>
          
          {stateInfo[state] && (
            <p className="text-white/90 max-w-3xl">
              {stateInfo[state]}
            </p>
          )}
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">Category</label>
              <FilterChips 
                options={categories}
                selected={selectedCategory}
                onChange={setSelectedCategory}
              />
            </div>

            {/* Year & Status Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Year of GI Tag</label>
                <FilterChips 
                  options={years}
                  selected={selectedYear}
                  onChange={setSelectedYear}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Status</label>
                <FilterChips 
                  options={['Active', 'Inactive']}
                  selected={selectedStatus}
                  onChange={setSelectedStatus}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <h2 className="text-gray-900">
            GI Products from {state}
          </h2>
          <p className="text-gray-600 mt-1">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600">No products found with the selected filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedYear('All');
                setSelectedStatus('All');
              }}
              className="mt-4 px-6 py-2 bg-[#FF9933] text-white rounded-lg hover:bg-[#e88a2e] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => onNavigateToProduct(product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
