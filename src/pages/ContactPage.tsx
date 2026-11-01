import React from 'react';
import { EnquirySection } from '../components/EnquirySection';
import { useNavigation } from '../context/NavigationContext';

export const ContactPage: React.FC = () => {
  const { pageContext } = useNavigation();

  return (
    <div className="space-y-0">
      <EnquirySection
        initialService={pageContext?.includes('Regarding:') ? undefined : pageContext || undefined}
        initialMessage={pageContext?.includes('Regarding:') ? pageContext : undefined}
      />
    </div>
  );
};
