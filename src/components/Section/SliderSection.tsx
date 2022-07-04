import { LessonSection } from "../../data/Lessons";
import useTranslation from "../../hooks/useTranslation";
import React from "react";
import { IonItem, IonText, IonChip, IonCol, IonGrid, IonRow, IonSlide } from "@ionic/react";
import { Progress } from "./../Progress";
import './SliderSection.css';

export interface SegmentSectionProps {
    section?: LessonSection;
    color?:string;
    min:number;
    max:number;
}

  export const SliderSection: React.FC<SegmentSectionProps> = ({ section,color,min,max }) => {
    const {translate}=useTranslation();

    const sectionParagraphsItems = section?.paragraphs.map((paragraph) => (
      <p> {translate(paragraph)}</p>
    ));
  
    return (
        
        <IonItem detail={false} className="sliderSectionItem" lines="none">
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <IonChip color={color} style={{ marginLeft: "0px" }}>
                  {translate(section?.header)}
                </IonChip>
              </IonCol>
              <IonCol size="6">
                <Progress currentValue={min} maxValue={max} color={color} />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="12">
              <IonText className="sliderSectionText">
                {sectionParagraphsItems}
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      
    );
  };