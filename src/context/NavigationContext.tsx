import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageRoute = 
  | 'home' 
  | 'services' 
  | 'meta-ads' 
  | 'brand-building' 
  | 'website-dev' 
  | 'crm' 
  | 'social-media' 
  | 'custom-tools' 
  | 'work' 
  | 'diagnostic' 
  | 'philosophy' 
  | 'contact';

interface NavigationContextType {
  currentPage: PageRoute;
  navigateTo: (page: PageRoute, contextData?: string) => void;
  pageContext: string | null;
}

const NavigationContext = createContext<NavigationContextType>({
  currentPage: 'home',
  navigateTo: () => {},
  pageContext: null,
});

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [pageContext, setPageContext] = useState<string | null>(null);

  // Sync with browser URL / history for true multi-page experience
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, '');
      const validRoutes: PageRoute[] = [
        'home', 
        'services', 
        'meta-ads', 
        'brand-building', 
        'website-dev', 
        'crm', 
        'social-media', 
        'custom-tools', 
        'work', 
        'diagnostic', 
        'philosophy', 
        'contact'
      ];
      if (validRoutes.includes(path as PageRoute)) {
        setCurrentPage(path as PageRoute);
      } else {
        setCurrentPage('home');
      }
    };

    // Initialize from URL
    handlePopState();

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: PageRoute, contextData?: string) => {
    setCurrentPage(page);
    setPageContext(contextData || null);
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo, pageContext }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
