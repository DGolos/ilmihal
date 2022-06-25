import { IonButton, IonIcon, IonItem, IonText } from "@ionic/react";
import { pauseCircleOutline, volumeHighOutline } from "ionicons/icons";
import React from "react";
import { LessonSection } from "../../data/Lessons";
import useTranslation from "../../hooks/useTranslation";
import './SegmentSection.css';

interface SegmentSectionProps {
  section?: LessonSection;
  isPlaying?:boolean;
  toggleFunction?:any;
  color?:string;
 
}

export const SegmentSection: React.FC<SegmentSectionProps> = ({ section,isPlaying,toggleFunction,color }) => {
  const {translate}=useTranslation();
  const sectionParagraphsItems = section?.paragraphs.map((paragraph,index) => (
    <p key={index}>{translate(paragraph)}</p>
  ));

  return (
    <IonItem className="segmentedSectionItem" lines="none">
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
      <IonText className="segmentedSectionText">{sectionParagraphsItems}</IonText>
    </IonItem>
  );
};


