export type SectionId = "about-us" | "form" | "resources" | "questions";

export interface ScrollContextInterface {
  activeSection: SectionId;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionId>>;
}
