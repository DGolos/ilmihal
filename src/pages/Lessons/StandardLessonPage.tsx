import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonPage,
  
} from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router";
import { LessonHeader } from "../../components/LessonHeader";
import { StandardSection } from "../../components/Section/StandardSection";
import { StandardHeader } from "../../components/StandardHeader/StandardHeader";
import useLesson from "../../hooks/useLesson";
import useTranslation from "../../hooks/useTranslation";



export const StandardLessonPage: React.FC<
  RouteComponentProps<{ bookId: string; lessonId: string }>
> = ({ match }) => {
  const lesson = useLesson(match.params.bookId,match.params.lessonId);
  const{translate}=useTranslation();
  
  const sectionListItems = lesson?.sections.map((section, index) => (
    <StandardSection key={index} section={section}/>
  ));

  return (
    <IonPage>
      <StandardHeader />
      <IonContent className="bg-image-standard" fullscreen>
      <LessonHeader title={translate(lesson?.title!)} quoteText={translate(lesson?.quoteText!)} quoteReference={translate(lesson?.quoteReference!)} color={lesson?.color} />
        <div style={{marginLeft:"10px",marginRight:"10px",marginTop:"30px"}}>{sectionListItems}</div>
      </IonContent>
    </IonPage>
  );
};
