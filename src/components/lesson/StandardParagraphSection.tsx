import { IonItem, IonText } from "@ionic/react";
import React from "react";
import { LessonSection } from "../../objects/Lesson";
import { ParagraphGroup } from "../../objects/Lesson";
import { translationService } from "../../services/TranslationService";
import { ParagraphSection } from "./Paragraph";

interface StandardParagraphSectionProps {
  section?: LessonSection;
}

export const StandardParagraphSection: React.FC<StandardParagraphSectionProps> = ({
  section,
}) => {
  const sectionParagraphsItems = section?.paragraphGroups.map(
    (paragraphGroup: ParagraphGroup) => (
      <ParagraphSection paragraphs={paragraphGroup.paragraphs} />
    )
  );

  return (
    <div className="ion-padding">
      <IonItem className="lesson-note" lines="none">
        <IonText>{sectionParagraphsItems}</IonText>
      </IonItem>
    </div>
  );
};
