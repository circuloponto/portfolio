import { useEffect } from 'react';

const useIntersectionObserver = (setActiveId) => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: [0.5] }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Perform initial check to set the first active section
    const initialSection = [...sections].find(
      (section) => section.getBoundingClientRect().top >= 0
    );
    if (initialSection) {
      setActiveId(initialSection.id);
    }

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [setActiveId]);
};

export default useIntersectionObserver;
