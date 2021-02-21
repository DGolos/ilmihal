import { IonItem, IonText } from "@ionic/react";
import React from "react";
import { LessonSection } from "../../objects/Lesson";
import { ParagraphGroup } from "../../objects/Lesson";
import { translationService } from "../../services/TranslationService";
import { ExtendedParagraphSection } from "./ExtendedParagraphSection";
import { SegmentParagraphSection } from "./SegmentParagraphSection";
import { StandardParagraphSection } from "./StandardParagraphSection";

interface SectionProps {
    section?: LessonSection;
    
 }

 export const Section: React.FC<SectionProps> = ({ section}) => {
    
    return(
            <>
            {section?.type===0 &&
            <StandardParagraphSection section={section}/>}
            {section?.type===1 && 
            <ExtendedParagraphSection section={section}/>}
             {section?.type===2 && 
            <SegmentParagraphSection section={section}/>}
            </>
        
            

        
        
    )
 }