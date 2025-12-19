import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { HomePage } from './pages/HomePage';
import { StateDetailsPage } from './pages/StateDetailsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { ExploreProductsPage } from './pages/ExploreProductsPage';
import { AboutPage } from './pages/AboutPage';
import { LoginPage } from './pages/LoginPage';

type Page = 'home' | 'state' | 'product' | 'explore' | 'about';

function AppContent() {
  const { isAuthenticated, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedProductId, setSelectedProductId] = useState<string>('');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigateToHome = () => setCurrentPage('home');
  const navigateToExplore = () => setCurrentPage('explore');
  const navigateToAbout = () => setCurrentPage('about');
  
  const navigateToState = (state: string) => {
    setSelectedState(state);
    setCurrentPage('state');
  };

  const navigateToProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product');
  };

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#FF9933] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={navigateToHome} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            onNavigateToState={navigateToState}
            onNavigateToProduct={navigateToProduct}
          />
        );
      case 'state':
        return (
          <StateDetailsPage 
            state={selectedState}
            onNavigateToProduct={navigateToProduct}
            onBack={navigateToHome}
          />
        );
      case 'product':
        return (
          <ProductDetailsPage 
            productId={selectedProductId}
            onNavigateToProduct={navigateToProduct}
            onBack={navigateToHome}
          />
        );
      case 'explore':
        return (
          <ExploreProductsPage 
            onNavigateToProduct={navigateToProduct}
          />
        );
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage onNavigateToState={navigateToState} onNavigateToProduct={navigateToProduct} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header 
        currentPage={currentPage}
        onNavigateToHome={navigateToHome}
        onNavigateToExplore={navigateToExplore}
        onNavigateToAbout={navigateToAbout}
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}