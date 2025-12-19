import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex flex-col">
                <div className="w-6 h-0.5 bg-[#FF9933] rounded"></div>
                <div className="w-6 h-0.5 bg-white my-0.5"></div>
                <div className="w-6 h-0.5 bg-[#138808] rounded"></div>
              </div>
              <span className="text-gray-900">GI-Tagged India</span>
            </div>
            <p className="text-gray-600 text-sm">
              Celebrating India's rich heritage through Geographical Indication tagged products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-[#FF9933] transition-colors">About GI Tags</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF9933] transition-colors">Browse Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF9933] transition-colors">Explore States</a></li>
            </ul>
          </div>

          {/* Credits */}
          <div>
            <h3 className="text-gray-900 mb-3">Data Sources</h3>
            <p className="text-gray-600 text-sm mb-2">
              Information sourced from Controller General of Patents, Designs and Trademarks (CGPDTM)
            </p>
            <p className="text-gray-600 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> for India
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} GI-Tagged India. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
