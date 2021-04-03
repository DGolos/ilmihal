import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonText,
  IonToolbar,
  useIonViewWillLeave,
} from "@ionic/react";
import { Howl } from "howler";
import React, { useRef, useState } from "react";
import { translationService } from "../../services/TranslationService";

const DhikrPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(new Howl({ src: [""] }));
  const [isLoaded, setIsLoaded] = useState(false);

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
        src: `/assets/audio/lessons/EuzaBismilla.m4a`,
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
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="purple" defaultHref="/BookOneMainPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color="purple"
        >
          <IonCardTitle>
            <h1 className="lesson">{translationService.getLabel('label-book1-lesson24-title')}</h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
              {translationService.getLabel('label-book1-lesson24-quote')}
              </h3>
              <p className="quote-reference">{translationService.getLabel('label-book1-lesson24-quote-reference')}</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          <IonItem className="lesson-note" lines="none">
            <IonText>
              <h2 className="lesson-note">
              {translationService.getLabel('label-book1-lesson24_section1-paragraph1')}
              </h2>
            </IonText>
          </IonItem>
        </div>
        <div className="ion-padding">
          <IonList className="white">
            <IonItem color="light" lines="full" routerLink='/SegmentLessonPage/1/35'>
              <IonText slot="start" >
                <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book1-lesson35-title')}</h2>
              </IonText>
              
            </IonItem>

            <IonItem color="light" lines="full" routerLink='/SegmentLessonPage/1/36'>
              <IonText slot="start">
                <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book1-lesson36-title')}</h2>
              </IonText>
             
            </IonItem>
            <IonItem color="light" lines="full" routerLink='/SegmentLessonPage/1/37'>
              <IonText slot="start">
                <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book1-lesson37-title')}</h2>
              </IonText>
             
            </IonItem>
            <IonItem color="light" lines="full" routerLink='/SegmentLessonPage/1/38'>
              <IonText slot="start">
                <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book1-lesson38-title')}</h2>
              </IonText>
              
            </IonItem>
            <IonItem color="light" lines="full" routerLink='/TasbihPage'>
              <IonText slot="start">
                <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book1-lesson39-title')}</h2>
              </IonText>
              
            </IonItem>
            <IonItem color="light" lines="full" routerLink='/SegmentLessonPage/1/40'>
              <IonText slot="start">
                <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book1-lesson40-title')}</h2>
              </IonText>
              
            </IonItem>
            <IonItem color="light" lines="full" routerLink='/SegmentLessonPage/1/41'>
              <IonText slot="start">
                <h2 style={{fontSize:"18px",fontWeight:"bold"}}>{translationService.getLabel('label-book1-lesson41-title')}</h2>
              </IonText>
              
            </IonItem>
          </IonList>
        </div>
         
      </IonContent>
    </IonPage>
  );
};

export default DhikrPage;
