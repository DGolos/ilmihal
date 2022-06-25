import { IonItem, IonText } from "@ionic/react";
import React from "react";
import useTranslation from "../../hooks/useTranslation";
import { LessonSection } from "../../data/Lessons";
import './StandardSection.css'

interface SectionProps {
  section?: LessonSection;
   
}

export const StandardSection: React.FC<SectionProps> = ({ section}) => {
  const {translate}=useTranslation();
  const sectionParagraphsItems = section?.paragraphs.map((paragraph) => (
    <p >{translate(paragraph)}</p>
  ));

  return (
    <IonItem className="standardSectionItem" lines="none">
      
      <IonText className="standardSectionText">{sectionParagraphsItems}</IonText>
    </IonItem>
  );
};


