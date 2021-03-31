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
  IonIcon,
  IonItem,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonToolbar,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from "@ionic/react";
import { Howl } from "howler";
import { pauseCircleOutline, volumeHighOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Lesson, LessonSection } from "../../objects/Lesson";
import { dataService } from "../../services/dataService";
import { translationService } from "../../services/TranslationService";

const TasbihPage: React.FC<
  RouteComponentProps<{ bookId: string; lessonId: string }>
> = ({ match }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  

  const toglePlayPause = (audio:string) => {
    const player = new Howl({
      src: `/assets/audio/Lessons/${audio}.mp3`,format:["mp3"]
    });
    
    player.play();
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="purple" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color="purple"
        >
          <IonCardTitle>
            <h1 className="lesson">
              {translationService.getLabel("label-book1-lesson39-title")}
            </h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel("label-book1-lesson39-quote")}
              </h3>
              <p className="quote-reference">
                {translationService.getLabel(
                  "label-book1-lesson39-quote-reference"
                )}
              </p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
        <IonItem className="lesson-note" lines="none">
          <IonButton
            className="no-shadow"
            onClick={() => {
              toglePlayPause("Subhanallah");
            }}
            fill="clear"
            color="light"
            size="default"
            slot="start"
          >
            <IonIcon
              slot="icon-only"
              icon={isPlaying ? pauseCircleOutline : volumeHighOutline}
              color="purple"
            />
          </IonButton>
          <IonText className="ion-text-center">
            <h2 className="lesson-note">
              {translationService.getLabel(
                "label-book1-lesson39_section1-paragraph1"
              )}
            </h2>
          </IonText>
        </IonItem>
        <IonItem className="lesson-note" lines="none">
          <IonButton
            className="no-shadow"
            onClick={() => {
              toglePlayPause("Elhamdulillah");
            }}
            fill="clear"
            color="light"
            size="default"
            slot="start"
          >
            <IonIcon
              slot="icon-only"
              icon={isPlaying ? pauseCircleOutline : volumeHighOutline}
              color="purple"
            />
          </IonButton>
          <IonText className="ion-text-center">
            <h2 className="lesson-note">
              {translationService.getLabel(
                "label-book1-lesson39_section1-paragraph2"
              )}
            </h2>
          </IonText>
        </IonItem>
        <IonItem className="lesson-note" lines="none">
          <IonButton
            className="no-shadow"
            onClick={() => {
              toglePlayPause("AllahuEkber");
            }}
            fill="clear"
            color="light"
            size="default"
            slot="start"
          >
            <IonIcon
              slot="icon-only"
              icon={isPlaying ? pauseCircleOutline : volumeHighOutline}
              color="purple"
            />
          </IonButton>
          <IonText className="ion-text-center">
            <h2 className="lesson-note">
              {translationService.getLabel(
                "label-book1-lesson39_section1-paragraph3"
              )}
            </h2>
          </IonText>
        </IonItem>
      </div>
      </IonContent>
      
    </IonPage>
  );
};

export default TasbihPage;
