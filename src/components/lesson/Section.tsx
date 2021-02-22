import { IonItem, IonText } from "@ionic/react";
import React from "react";
import { TranspileOutput } from "typescript";
import { LessonSection } from "../../objects/Lesson";
import { translationService } from "../../services/TranslationService";


interface SectionProps {
    section?: LessonSection;
    visible?:boolean
 }

 export const Section: React.FC<SectionProps> = ({ section,visible}) => {
   const sectionParagraphsItems = section?.paragraphs.map((paragraph)=>
      <h2 className="lesson-note">{translationService.getLabel(paragraph)}</h2>
    );
    if(visible===true){
      return(
         <div className="ion-padding">
         <IonItem className="lesson-note" lines="none">
           <IonText>{sectionParagraphsItems}</IonText>
         </IonItem>
       </div>
       )
    }
  
        return <></>     

 }