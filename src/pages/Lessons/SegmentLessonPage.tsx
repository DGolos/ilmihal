import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonToolbar,
  useIonViewDidLeave
  
} from "@ionic/react";
import { Howl } from "howler";
import React, { useRef, useState } from "react";
import { RouteComponentProps } from "react-router";
import { StandardSection } from "../../components/Section/StandardSection";
import { SegmentSection } from "../../components";
import { LessonHeader } from "../../components/LessonHeader";
import useLesson from "../../hooks/useLesson";
import useTranslation from "../../hooks/useTranslation";
import './SegmentLessonPage.css';
import { StandardHeader } from "../../components/StandardHeader/StandardHeader";

type TranslationSection = "arabic" | "translation";

export const SegmentLessonPage: React.FC<
  RouteComponentProps<{ bookId: string; lessonId: string }>
> = ({ match }) => {
  const [currentTranslationSection, setCurrentTranslationSection] =
    useState<TranslationSection>("arabic");
    
  const lesson = useLesson(match.params.bookId, match.params.lessonId);
  const { translate } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(new Howl({ src: [""] }));
  const [isLoaded, setIsLoaded] = useState(false);
   
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
        src: `/assets/audio/Lessons/${lesson?.audio}.mp3`,
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
  const standardSectionItems = lesson?.sections.filter((section) => {
    return section.type === "0";
  }).map((section, index) => (
    <StandardSection key={index} section={section}/>
  ));

    const segmentSections=lesson?.sections.filter((section) => {
      return section.type === "1";
    })

  return (
    <IonPage>
      <StandardHeader />
      <IonContent className="bg-image-standard" fullscreen>
        <LessonHeader title={translate(lesson?.title!)} quoteText={translate(lesson?.quoteText!)} quoteReference={translate(lesson?.quoteReference!)}/>
        
        <div style={{marginLeft:"10px",marginRight:"10px",marginTop:"30px"}}>{standardSectionItems}</div>
        <div style={{marginLeft:"10px",marginRight:"10px",marginTop:"30px"}}>
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
              <IonText
                className={
                  currentTranslationSection === "arabic" ? "white" : "black"
                }
              >
                {translate("label-header-arabic")}
              </IonText>
            </IonSegmentButton>
            <IonSegmentButton
              value={"translation" as TranslationSection}
              className={lesson?.color}
            >
              <IonText
                className={
                  currentTranslationSection === "translation"
                    ? "white"
                    : "black"
                }
              >
                {translate("label-header-native-language")}
              </IonText>
            </IonSegmentButton>
          </IonSegment>
        </div>
        <div
          className="ion-text-center"
          hidden={currentTranslationSection !== "arabic"}
          style={{marginLeft:"10px",marginRight:"10px",marginTop:"30px"}}
        >
          <SegmentSection
            section={segmentSections?.[0]}
            isPlaying={isPlaying}
            toggleFunction={toglePlayPause}
            color={lesson?.color}
          />
        </div>
        <div
          style={{marginLeft:"10px",marginRight:"10px",marginTop:"30px"}}
          hidden={currentTranslationSection !== "translation"}
        >
          <SegmentSection
            section={segmentSections?.[1]}
            isPlaying={isPlaying}
            toggleFunction={toglePlayPause}
            color={lesson?.color}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};


