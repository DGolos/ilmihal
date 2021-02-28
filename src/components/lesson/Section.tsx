import { IonButton, IonIcon, IonItem, IonText } from "@ionic/react";
import { pauseCircleOutline, volumeHighOutline } from "ionicons/icons";
import React from "react";
import { LessonSection } from "../../objects/Lesson";
import { translationService } from "../../services/TranslationService";

interface SectionProps {
  section?: LessonSection;
  isPlaying?:boolean;
  toggleFunction?:any;
  color?:string;
  type:string;
}

export const Section: React.FC<SectionProps> = ({ section,isPlaying,toggleFunction,color,type }) => {
  const sectionParagraphsItems = section?.paragraphs.map((paragraph) => (
    <h2 className="lesson-note">{translationService.getLabel(paragraph)}</h2>
  ));

  return (
    <IonItem className="lesson-note" lines="none">
      <IonButton hidden={isPlaying===undefined}
                  className="no-shadow"
                  onClick={() => {toggleFunction()}}
                  fill="clear"
                  color="light"
                  size="default"
                  slot="start"
                  
                >
                  <IonIcon
                    slot="icon-only"
                    icon={isPlaying ? pauseCircleOutline: volumeHighOutline}
                    color={color}
                  />
                </IonButton>
      <IonText className={type==="0"?"ion-text-left":"ion-text-center"}>{sectionParagraphsItems}</IonText>
    </IonItem>
  );
};


