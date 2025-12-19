import { Menu, X, User, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  currentPage: string;
  onNavigateToHome: () => void;
  onNavigateToExplore: () => void;
  onNavigateToAbout: () => void;
}

export function Header({ currentPage, onNavigateToHome, onNavigateToExplore, onNavigateToAbout }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, signOut, isAuthenticated } = useAuth();

  const navItems = [
    { label: 'Home', onClick: onNavigateToHome, page: 'home' },
    { label: 'Products', onClick: onNavigateToExplore, page: 'explore' },
    { label: 'About', onClick: onNavigateToAbout, page: 'about' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={onNavigateToHome}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="flex flex-col">
              <div className="w-8 h-1 bg-[#FF9933] rounded"></div>
              <div className="w-8 h-1 bg-white my-0.5"></div>
              <div className="w-8 h-1 bg-[#138808] rounded"></div>
            </div>
            <span className="text-xl text-gray-900">GI-Tagged India</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className={`transition-colors ${
                    currentPage === item.page
                      ? 'text-[#FF9933]'
                      : 'text-gray-600 hover:text-[#FF9933]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* User Profile (Desktop) */}
            {isAuthenticated && user && (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#FF9933] to-[#138808] rounded-full flex items-center justify-center text-white">
                    {user.name?.[0]?.toUpperCase() || user.email[0].toUpperCase()}
                  </div>
                  <span className="text-sm text-gray-700">{user.name || user.email}</span>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm text-gray-500">Signed in as</p>
                      <p className="text-sm text-gray-900 truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        signOut();
                        setShowUserMenu(false);
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.onClick();
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 transition-colors ${
                  currentPage === item.page
                    ? 'text-[#FF9933] bg-orange-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* User Profile (Mobile) */}
            {isAuthenticated && user && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="px-4 py-2 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF9933] to-[#138808] rounded-full flex items-center justify-center text-white">
                    {user.name?.[0]?.toUpperCase() || user.email[0].toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{user.name || 'User'}</p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 mt-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={16} />
                  Sign Out
                </button>
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}