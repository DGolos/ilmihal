import {
  IonBackButton,
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
  IonText,
  IonToolbar,
  useIonViewDidLeave,
  useIonViewWillEnter,
  
} from "@ionic/react";
import { Howl } from "howler";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Section } from "../../components/lesson/Section";
import { SegmentSection } from "../../components/lesson/SegmentSection";
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

    
  }, [lesson]);

  useIonViewWillEnter(() => {
    loadLesson();
  });

  useIonViewDidLeave(() => {
    setIsPlaying(false);
    playerRef.current.unload();
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
        src: `/assets/audio/Lessons/${lesson.audio}.mp3`,
        preload: true,
        html5: true,
        onend: onEnd,
        onload: onLoad,
        onplay: onPlay,
        format: ["mp3"],
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
    <Section key={index} section={section}  color={lesson.color}/>
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
              <IonText className={currentTranslationSection === "arabic"?"white":"black"}>{translationService.getLabel('label-header-arabic')}</IonText>
            </IonSegmentButton>
            <IonSegmentButton
              value={"translation" as TranslationSection}
              className={lesson?.color}
            >
              <IonText className={currentTranslationSection === "translation"?"white":"black"}>{translationService.getLabel('label-header-native-language')}</IonText>
            </IonSegmentButton>
          </IonSegment>
        </div>
        <div
          className="ion-padding ion-text-center"
          hidden={currentTranslationSection !== "arabic"}
        >
          <SegmentSection section={segmentSections[0]} isPlaying={isPlaying} toggleFunction={toglePlayPause} color={lesson.color}/>
        </div>
        <div
          className="ion-padding"
          hidden={currentTranslationSection !== "translation"}
        >
          <SegmentSection section={segmentSections[1]} isPlaying={isPlaying} toggleFunction={toglePlayPause} color={lesson.color}/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SegmentLessonPage;
