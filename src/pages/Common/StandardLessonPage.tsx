import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  useIonViewWillEnter,
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { Section } from "../../components/lesson/Section";
import { Lesson } from "../../objects/Lesson";
import { dataService } from "../../services/dataService";
import { translationService } from "../../services/TranslationService";

export const StandardLessonPage: React.FC<
  RouteComponentProps<{ bookId: string; lessonId: string }>
> = ({ match }) => {
  const [lesson, setLesson] = useState<Lesson>(new Lesson());

  const loadLesson = () => {
    setLesson(
      dataService.getLesson(match.params.bookId, match.params.lessonId)
    );
  };
  
  useIonViewWillEnter(() => {
    loadLesson();
  });

  const sectionListItems = lesson?.sections.map((section, index) => (
    <Section key={index} section={section} type="0"/>
  ));

  return (
    <IonPage>
      <IonHeader className="ion-no-border standard">
        <IonToolbar className="prayer">
          <IonButtons slot="start">
            <IonBackButton color={lesson?.color} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color={lesson?.color}
        >
          <IonCardTitle>
            <h1 className="lesson">
              {translationService.getLabel(lesson?.title!)}
            </h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel(lesson?.quoteText!)}
              </h3>
              <p className="quote-reference">
                {translationService.getLabel(lesson?.quoteReference!)}
              </p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">{sectionListItems}</div>
      </IonContent>
    </IonPage>
  );
};
