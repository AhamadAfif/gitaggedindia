import { Award, Target, Database, Shield } from 'lucide-react';

export function AboutPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FF9933] to-[#138808] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">About GI-Tagged India</h1>
          <p className="text-white/90 text-xl max-w-3xl">
            Celebrating and preserving India's cultural heritage through Geographical Indication tagged products
          </p>
        </div>
      </div>

      {/* What is GI Tag Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-[#FF9933]" size={32} />
            <h2 className="text-gray-900">What is a Geographical Indication (GI) Tag?</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              A Geographical Indication (GI) is a sign used on products that have a specific geographical origin 
              and possess qualities or a reputation that are due to that origin. In order to function as a GI, 
              a sign must identify a product as originating in a given place.
            </p>
            
            <p>
              GI tags are covered as an element of intellectual property rights (IPRs) under the Paris Convention 
              for the Protection of Industrial Property. In India, Geographical Indications registration is 
              administered by the Geographical Indications of Goods (Registration and Protection) Act, 1999.
            </p>

            <p>
              The GI tag ensures that none other than those registered as authorized users are allowed to use 
              the popular product name. It provides legal protection to Indian geographical indications which 
              boosts exports and promotes economic prosperity of producers.
            </p>
          </div>
        </div>
      </div>

      {/* Why GI Tags Matter */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-12">Why GI Tags Matter</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-[#FF9933]" size={32} />
              </div>
              <h3 className="text-gray-900 mb-2">Legal Protection</h3>
              <p className="text-gray-600 text-sm">
                Prevents unauthorized use of registered geographical indications
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-[#138808]" size={32} />
              </div>
              <h3 className="text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">
                Guarantees specific quality, reputation, or characteristics
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-[#000080]" size={32} />
              </div>
              <h3 className="text-gray-900 mb-2">Cultural Heritage</h3>
              <p className="text-gray-600 text-sm">
                Preserves traditional knowledge and cultural identity
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-purple-600" size={32} />
              </div>
              <h3 className="text-gray-900 mb-2">Economic Benefits</h3>
              <p className="text-gray-600 text-sm">
                Promotes exports and economic prosperity for producers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Purpose */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-xl p-8 md:p-12 border border-gray-200">
          <h2 className="text-gray-900 mb-6">Purpose of This Platform</h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              GI-Tagged India is a comprehensive digital platform designed to showcase and celebrate India's 
              rich heritage of Geographical Indication tagged products. Our mission is to:
            </p>
            
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[#FF9933] mt-1">•</span>
                <span>Create awareness about India's diverse GI-tagged products among consumers and businesses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#138808] mt-1">•</span>
                <span>Provide an easy-to-use interface for exploring products by state, category, and other filters</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#000080] mt-1">•</span>
                <span>Educate people about the cultural significance and uniqueness of each GI product</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF9933] mt-1">•</span>
                <span>Support local artisans, farmers, and producers by promoting their authentic products</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#138808] mt-1">•</span>
                <span>Preserve and promote traditional Indian crafts, agriculture, and manufacturing practices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Data Sources & Credits */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-8">Data Sources & Credits</h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-gray-600">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-gray-900 mb-3">Primary Data Source</h3>
              <p>
                All product information is sourced from the <strong>Controller General of Patents, Designs 
                and Trademarks (CGPDTM)</strong>, Government of India, which maintains the official registry 
                of Geographical Indications in India.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-gray-900 mb-3">Image Credits</h3>
              <p>
                Product images are sourced from Unsplash and are used for illustrative purposes. Actual 
                products may vary in appearance.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-gray-900 mb-3">Disclaimer</h3>
              <p>
                This platform is created for educational and informational purposes. While we strive to 
                maintain accurate and up-to-date information, please refer to official government sources 
                for legal and commercial purposes.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#FF9933] to-[#138808] text-white rounded-lg p-6 text-center">
              <p className="text-lg">
                Proudly showcasing India's cultural diversity and heritage
              </p>
              <p className="text-sm text-white/90 mt-2">
                © {new Date().getFullYear()} GI-Tagged India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-white mb-4">Explore India's GI Heritage</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Discover authentic products with rich histories and unique characteristics from every corner of India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              Browse All Products
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors">
              Explore by State
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}