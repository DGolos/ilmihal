import { IonButton, IonIcon, IonItem, IonText } from "@ionic/react";
import { pauseCircleOutline, volumeHighOutline } from "ionicons/icons";
import React from "react";
import { LessonSection } from "../../objects/Lesson";
import { translationService } from "../../services/TranslationService";

interface SectionProps {
  section?: LessonSection;
  color?:string;
 
}

export const Section: React.FC<SectionProps> = ({ section,color }) => {
  const sectionParagraphsItems = section?.paragraphs.map((paragraph) => (
    <h2 className="lesson-note">{translationService.getLabel(paragraph)}</h2>
  ));

  return (
    <IonItem className="lesson-note" lines="none">
      
      <IonText className="ion-text-left">{sectionParagraphsItems}</IonText>
    </IonItem>
  );
};


