import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent,
    IonPage,
    IonSlides,
    IonSlide
    
  } from "@ionic/react";
  import React from "react";
  import { RouteComponentProps } from "react-router";
  import { LessonHeader } from "../../components/LessonHeader";
  
import { SliderSection } from "../../components";
  import useLesson from "../../hooks/useLesson";
  import useTranslation from "../../hooks/useTranslation";
import { StandardHeader } from "../../components/StandardHeader/StandardHeader";

  
  
  
  export const SliderLessonPage: React.FC<
    RouteComponentProps<{ bookId: string; lessonId: string }>
  > = ({ match }) => {
    const lesson = useLesson(match.params.bookId,match.params.lessonId);
    const{translate}=useTranslation();
    
    const sliderSectionItems = lesson?.sections.filter((section) => {
        return section.type === "2";
      }).map((section, index) => (
        <IonSlide key={index}>
          <SliderSection key={index} section={section} color={lesson?.color} min={index+1} max={lesson.sections.length}/>
        </IonSlide>
        
      ));
  
    return (
        <IonPage>
        <StandardHeader />
        <IonContent className="bg-image-standard" fullscreen>
        <LessonHeader title={translate(lesson?.title!)} quoteText={translate(lesson?.quoteText!)} quoteReference={translate(lesson?.quoteReference!)} color={lesson?.color} />
          <div>
            <IonSlides options={{pagination:true}}>
              
            {sliderSectionItems}
              
            </IonSlides>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  