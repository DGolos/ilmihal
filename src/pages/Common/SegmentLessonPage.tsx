import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from "@ionic/react";
import { Howl } from "howler";
import { pauseCircleOutline, volumeHighOutline } from "ionicons/icons";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Section } from "../../components/lesson/Section";
import { Lesson, LessonSection } from "../../objects/Lesson";
import { dataService } from "../../services/dataService";
import { translationService } from "../../services/TranslationService";

type TranslationSection = "arabic" | "translation";

const SegmentLessonPage: React.FC<
RouteComponentProps<{ bookId: string; lessonId: string }>
> = ({ match }) => {
  const [
    currentTranslationSection,
    setCurrentTranslationSection,
  ] = useState<TranslationSection>("arabic");
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(new Howl({ src: [""] }));
  const [isLoaded, setIsLoaded] = useState(false);
  const [lesson, setLesson] = useState<Lesson>(new Lesson);
  const [segmentSections,setSegmentSections]=useState<LessonSection[]>([]);  
  const [standardSections,setStandardSections]=useState<LessonSection[]>([]);

  
  const loadLesson = useCallback(async () => {
    setLesson(
        dataService.getLesson(match.params.bookId, match.params.lessonId)
      );
      
      
}, [match.params.bookId, match.params.lessonId]);


  useEffect(() => {
    setStandardSections(lesson.sections.filter((section)=>{
        return section.type==="0";
    }));

    setSegmentSections(lesson.sections.filter((section)=>{
        return section.type==="1";
    }));

    return ()=>{
      playerRef.current.unload();
    };
  }, [lesson]);

  useIonViewWillEnter(() => {
    loadLesson();
  });

  useIonViewWillLeave(() => {
    if (isPlaying) {
      playerRef.current.stop();
    }
  });

  const toglePlayPause = () => {
    if (isLoaded === false) {
      const onEnd = () => {
        setIsPlaying(false);
      };

      const onLoad = () => {
        setIsLoaded(true);
      };

      const onPlay = () => {};

      playerRef.current = new Howl({
        src: `/assets/audio/lessons/${lesson.audio}.mp3`,
        preload: true,
        html5: true,
        onend: onEnd,
        onload: onLoad,
        onplay: onPlay,
        format: ["m4a"],
      });
    }
    if (isPlaying) {
      playerRef.current.pause();
      setIsPlaying(false);
    } else {
      playerRef.current.play();
      setIsPlaying(true);
    }
  };
  const standardSectionItems=standardSections.map((section,index)=>(
    <Section key={index} section={section} isPlaying={isPlaying} toggleFunction={toglePlayPause} color={lesson.color} type="0"/>
  ));
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color={lesson.color} />
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
              <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel(lesson?.quoteText!)}
              </h3>
              <p className="quote-reference">{translationService.getLabel(lesson?.quoteReference!)}</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          {standardSectionItems}
        </div>
        <div className="ion-padding">
          <IonSegment
            value={currentTranslationSection}
            onIonChange={(e) =>
              setCurrentTranslationSection(e.detail.value as TranslationSection)
            }
            mode="md"
          >
            <IonSegmentButton
              value={"arabic" as TranslationSection}
              className={lesson?.color}
            >
              {translationService.getLabel('label-header-arabic')}
            </IonSegmentButton>
            <IonSegmentButton
              value={"translation" as TranslationSection}
              className={lesson?.color}
            >
              {translationService.getLabel('label-header-bosnian')}
            </IonSegmentButton>
          </IonSegment>
        </div>
        <div
          className="ion-padding ion-text-center"
          hidden={currentTranslationSection !== "arabic"}
        >
          <Section section={segmentSections[0]} type="1"/>
        </div>
        <div
          className="ion-padding"
          hidden={currentTranslationSection !== "translation"}
        >
          <Section section={segmentSections[1]} type="1"/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SegmentLessonPage;
