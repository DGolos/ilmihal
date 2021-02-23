import { IonItem, IonText } from "@ionic/react";
import React from "react";
import { LessonSection } from "../../objects/Lesson";
import { translationService } from "../../services/TranslationService";

interface SectionProps {
  section?: LessonSection;
}

export const Section: React.FC<SectionProps> = ({ section }) => {
  const sectionParagraphsItems = section?.paragraphs.map((paragraph) => (
    <h2 className="lesson-note">{translationService.getLabel(paragraph)}</h2>
  ));

  return (
    <IonItem className="lesson-note" lines="none">
      <IonText className={"ion-text-left"}>{sectionParagraphsItems}</IonText>
    </IonItem>
  );
};

export const SegmentSection: React.FC<SectionProps> = ({ section }) => {
  const sectionParagraphsItems = section?.paragraphs.map((paragraph) => (
    <h2 className="lesson-note">{translationService.getLabel(paragraph)}</h2>
  ));

  return (
    <IonItem className="lesson-note" lines="none">
      <IonText className="ion-text-center">{sectionParagraphsItems}</IonText>
    </IonItem>
  );
};
