import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonNote, IonRow, IonText } from "@ionic/react";
import { pauseCircleOutline, volumeHighOutline } from "ionicons/icons";
import React, { useState } from "react";
import { Lesson, LessonSection } from "../../objects/Lesson";
import { ParagraphGroup } from "../../objects/Lesson";
import { translationService } from "../../services/TranslationService";
import { StandardParagraphSection } from "./StandardParagraphSection";

interface ExtendedParagraphSectionProps {
    section?: LessonSection;
    
 }

 export const ExtendedParagraphSection: React.FC<ExtendedParagraphSectionProps> = ({ section}) => {
    const [isPlaying,setIsPlaying]=useState(false);
    return(
        <IonItem
          key="1"
          detail={false}
          color="light"
          lines="none"
          style={{ marginLeft: "15px", marginRight: "15px" }}
          className="ion-text-center"
        >
          <IonGrid >
            <IonRow>
              <IonCol size="12">
                <IonChip color="purple">
                  <IonText>{translationService.getLabel("label-header-arabic")}</IonText>
                 
                </IonChip>
                <IonButton
                  className="no-shadow ion-float-right"
                  onClick={() => {}}
                  fill="clear"
                  color="light"
                  size="default"
                  style={{position:"fixed"}}
                >
                  <IonIcon
                    slot="icon-only"
                    icon={isPlaying ? pauseCircleOutline: volumeHighOutline}
                    color="purple"
                  />
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow >
              <IonCol size="12">
                <IonNote >
                  <StandardParagraphSection section={section}/>
                </IonNote>
              </IonCol>
            </IonRow>
            <IonRow >
              <IonCol size="12">
                <IonChip color="purple">
                  <IonLabel>{translationService.getLabel("label-header-bosnian")}</IonLabel>
                </IonChip>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonNote >
                  Euzu billahi mineššejta-nirradžim Bismillahir-rahmanir-rahim.
                </IonNote>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
    )
 }