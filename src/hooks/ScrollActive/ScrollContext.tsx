import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { SectionId, ScrollContextInterface } from "./interfaces";

const ScrollContext = createContext<ScrollContextInterface | undefined>(
  undefined
);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionId>("about-us");
  useEffect(() => {
    const sections: SectionId[] = [
      "about-us",
      "form",
      "resources",
      "questions",
    ];
    const observer = new IntersectionObserver(
      (elements) => {
        elements.forEach((element) => {
          if (element.isIntersecting) {
            setActiveSection(element.target.id as SectionId);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useScroll = (): ScrollContextInterface => {
  const context = useContext(ScrollContext);

  if (context === undefined) {
    throw new Error("useScroll is being used outside of a ScrollProvider.");
  }

  return context;
};
