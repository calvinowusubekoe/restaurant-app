import { useState, useEffect } from 'react';

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'about', 'testimonials', 'contact'];
      let currentSection = '';
      let maxVisibility = 0;

      // Get current scroll position and document height
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're near the bottom of the page
      const isNearBottom = scrollPosition + windowHeight > documentHeight - 100;
      
      // If we're near the bottom, keep the last active section
      if (isNearBottom) {
        return;
      }

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Only consider elements that are in the top portion of the viewport
          if (rect.top < windowHeight * 0.4 && rect.bottom > 0) {
            const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
            const sectionVisibility = visibleHeight / rect.height;
            
            if (sectionVisibility > maxVisibility) {
              maxVisibility = sectionVisibility;
              currentSection = section;
            }
          }
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return activeSection;
} 