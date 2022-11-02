import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
   IonText,
  IonToolbar,
  useIonViewDidLeave
  
} from "@ionic/react";
import { Howl } from "howler";
import { pauseCircleOutline, volumeHighOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
import { RouteComponentProps } from "react-router";
import { LessonHeader } from "../../components/LessonHeader";
import { StandardHeader } from "../../components/StandardHeader/StandardHeader";
import useTranslation from "../../hooks/useTranslation";


export const TasbihPage: React.FC<
  RouteComponentProps<{ bookId: string; lessonId: string }>
> = ({ match }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(new Howl({ src: [""] }));
  const [currentAudio,setCurrentAudio]=useState("");
  const{translate}=useTranslation();
  useIonViewDidLeave(() => {
    playerRef.current.unload();
  });
  const toglePlayPause = (audio: string) => {
    const onEnd=()=>{
      setIsPlaying(false);
      setCurrentAudio("");
    }
    if(isPlaying){
      playerRef.current.pause();
      setIsPlaying(false);
    }
    else{
      if(isPlaying===false){
        playerRef.current = new Howl({
          src: `/assets/audio/Lessons/${audio}.mp3`,
          format: ["mp3"],
          onend:onEnd
        });
        setCurrentAudio(audio);
      }
     
  
      playerRef.current.play();
      setIsPlaying(true);
      
    }
    
  };

  return (
    <IonPage>
      <StandardHeader />
      <IonContent className="bg-image-standard" fullscreen>
      <LessonHeader title={translate("label-book1-lesson39-title")} quoteText={translate("label-book1-lesson39-quote")} quoteReference={translate("label-book1-lesson39-quote-reference")}/>
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
                icon={isPlaying && currentAudio==="Subhanallah" ? pauseCircleOutline : volumeHighOutline}
                color="purple"
              />
            </IonButton>
            <IonText className="ion-text-center">
              <h2 className="lesson-note">
                {translate(
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
                icon={isPlaying && currentAudio==="Elhamdulillah"? pauseCircleOutline : volumeHighOutline}
                color="purple"
              />
            </IonButton>
            <IonText className="ion-text-center">
              <h2 className="lesson-note">
                {translate(
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
                icon={isPlaying && currentAudio==="AllahuEkber"? pauseCircleOutline : volumeHighOutline}
                color="purple"
              />
            </IonButton>
            <IonText className="ion-text-center">
              <h2 className="lesson-note">
                {translate(
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


