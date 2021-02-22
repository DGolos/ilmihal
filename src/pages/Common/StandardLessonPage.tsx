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
  IonItem,
  IonSegment,
  IonSegmentButton,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { Section } from "../../components/lesson/Section";
import { Lesson, LessonSection } from "../../objects/Lesson";
import { dataService } from "../../services/dataService";
import { translationService } from "../../services/TranslationService";

type TranslationSection = "arabic" | "translation";

export const StandardLessonPage: React.FC<
  RouteComponentProps<{ bookId: string; lessonId: string }>
> = ({ match }) => {
  const [lesson, setLesson] = useState<Lesson>(new Lesson);
  const [segmentSections,setSegmentSections]=useState<LessonSection[]>([]);
  const [
    currentTranslationSection,
    setCurrentTranslationSection,
  ] = useState<TranslationSection>("arabic");

  const loadLesson = () => {
    setLesson(
      dataService.getLesson(match.params.bookId, match.params.lessonId)
    );
    setSegmentSections(
        lesson.sections?.filter(
              lessonSection=>{
                  return lessonSection.type==="1";
                  
              }
          )
      );
  };

  useIonViewWillEnter(() => {
    loadLesson();
  });

  const sectionListItems = lesson?.sections.map((section,index) => (
      
    <Section key={index} section={section} visible={section.type==="0"}/>
  ));   
  

  return (
    <IonPage>
      <IonHeader className="ion-no-border standard">
        <IonToolbar className="prayer">
          <IonButtons slot="start">
            <IonBackButton
              color={lesson?.color}
              defaultHref="//BookOneMainPage"
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color={lesson?.color}
        >
          <IonCardTitle>
            <h1 className="lesson">{translationService.getLabel(lesson?.title!)}</h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>{translationService.getLabel(lesson?.quoteText!)}</h3>
              <p className="quote-reference">{translationService.getLabel(lesson?.quoteReference!)}</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        {sectionListItems}
        {segmentSections.length!==0 &&
        <>
            <div className="ion-padding">
            <IonSegment
              value={currentTranslationSection}
              onIonChange={(e) =>
                setCurrentTranslationSection(e.detail.value as TranslationSection)
              }
              
            >
              <IonSegmentButton
                value={"arabic" as TranslationSection}
                color={lesson?.color}
              >
                Arapski
              </IonSegmentButton>
              <IonSegmentButton
                value={"translation" as TranslationSection}
                color={lesson?.color}
              >
                Bosanski
              </IonSegmentButton>
            </IonSegment>
          </div>
          <div
            className="ion-padding"
            hidden={currentTranslationSection !== "arabic"}
          >
            
                <IonItem className="lesson-note" lines="none">
              <IonText className="ion-text-center">
                <p>Tebbet jeda Ebi-Lehebin ve tebbe</p>
                <p>Ma agna &#39;anhu maluhu ve ma keseb</p>
                <p>Sejasla naren zate-Leheb</p>
                <p>Vemre-etuhu hamma-letel - hatab</p>
                <p>Fi džidiha hablun mim-mesed</p>
              </IonText>
            </IonItem>
               
          </div>
          <div
            className="ion-padding"
            hidden={currentTranslationSection !== "translation"}
          >
            <IonItem className="lesson-note" lines="none">
              <IonText className="ion-text-center">
                <p>Proklete neka su ruke Ebu Lehebove, proklet neka je on sam</p>
                <p>Njegova imovina i sve što je stekao neće mu pomoći</p>
                <p>On će biti pržen na plamenu džehennemskom</p>
                <p>Isto tako biće kažnjena i njegova žena koja spletkari!</p>
                <p>Za njezin vrat biće privezano uže od vlakna palminog</p>
              </IonText>
            </IonItem>
          </div>
          </>
        }
      </IonContent>
    </IonPage>
  );
};
