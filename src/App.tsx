/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { CrmPage } from './pages/CrmPage';
import { DiagnosticPage } from './pages/DiagnosticPage';
import { PhilosophyPage } from './pages/PhilosophyPage';
import { ContactPage } from './pages/ContactPage';
import { MetaAdsPage } from './pages/MetaAdsPage';
import { BrandBuildingPage } from './pages/BrandBuildingPage';
import { WebsiteDevPage } from './pages/WebsiteDevPage';
import { SocialMediaPage } from './pages/SocialMediaPage';
import { CustomToolsPage } from './pages/CustomToolsPage';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { PROJECTS } from './data/projectsData';
import { ProjectItem } from './types';

function MainAppContent() {
  const { currentPage, navigateTo } = useNavigation();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenProjectById = (projectId: string) => {
    const found = PROJECTS.find(p => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#191919] selection:bg-[#3155FF] selection:text-white flex flex-col font-sans-ui">
      {/* Contextual Desktop Cursor */}
      <CustomCursor />

      {/* Persistent Multi-Page Navigation Bar */}
      <Navigation />

      {/* Active Page View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onSelectProject={handleOpenProjectById} />
        )}
        {currentPage === 'services' && (
          <ServicesPage onSelectProject={handleOpenProjectById} />
        )}
        {currentPage === 'meta-ads' && (
          <MetaAdsPage />
        )}
        {currentPage === 'brand-building' && (
          <BrandBuildingPage />
        )}
        {currentPage === 'website-dev' && (
          <WebsiteDevPage />
        )}
        {currentPage === 'crm' && (
          <CrmPage />
        )}
        {currentPage === 'social-media' && (
          <SocialMediaPage />
        )}
        {currentPage === 'custom-tools' && (
          <CustomToolsPage />
        )}
        {currentPage === 'work' && (
          <WorkPage onSelectProject={(project) => setSelectedProject(project)} />
        )}
        {currentPage === 'diagnostic' && (
          <DiagnosticPage />
        )}
        {currentPage === 'philosophy' && (
          <PhilosophyPage />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Case Study Deep-Dive Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onStartProject={(projectTitle) => navigateTo('contact', `Regarding Case Study: ${projectTitle}`)}
        />
      )}

      {/* Floating Persistent WhatsApp & Direct Call Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <MainAppContent />
    </NavigationProvider>
  );
}
