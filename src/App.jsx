import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

// Pages
import Home from './pages/Home';
import DesignPortfolio from './pages/DesignPortfolio';
import ThreeDPortfolio from './pages/ThreeDPortfolio';
import InteriorDesign from './pages/InteriorDesign';
import ArchViz from './pages/ArchViz';
import VisualDevelopment from './pages/VisualDevelopment';
import ThreeDEnvironmentArt from './pages/ThreeDEnvironmentArt';
import Demoreel from './pages/Demoreel';
import About from './pages/About';
import Contact from './pages/Contact';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center" style={{ background: '#050505' }}>
        <div className="w-6 h-6 border-2 border-neutral-700 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (authError?.type === 'user_not_registered') {
    return <UserNotRegisteredError />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio/design" element={<DesignPortfolio />} />
      <Route path="/portfolio/3d" element={<ThreeDPortfolio />} />
      <Route path="/portfolio/interior-design" element={<InteriorDesign />} />
      <Route path="/portfolio/arch-viz" element={<ArchViz />} />
      <Route path="/portfolio/visual-development" element={<VisualDevelopment />} />
      <Route path="/portfolio/3d-environment-art" element={<ThreeDEnvironmentArt />} />
      <Route path="/demoreel" element={<Demoreel />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <CustomCursor />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;