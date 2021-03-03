import { RouteComponentProps } from "react-router";
import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonCard,
  IonChip,
  IonCol,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonRange,
  IonRow,
  IonText,
  IonToolbar,
  useIonViewWillEnter
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { pause, play } from "ionicons/icons";
import { Surah } from "../../../objects/surah";
import { dataService } from "../../../services/dataService";
import { Howl } from "howler";
import { translationService } from "../../../services/TranslationService";

export const QuranPlayerPage: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSurah, setCurrentSurah] = useState<Surah>();
  const [isLoaded, setIsLoaded] = useState(false);
  const playerRef = useRef(new Howl({ src: [""] }));
  const [elapsedTime, setElapsedTime] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const loadSurah = function () {
    setCurrentSurah(dataService.getSurahById(+match.params.id));
  };

  useIonViewWillEnter(() => {
    loadSurah();
  });

  
  useEffect(() => {
    const timer = setInterval(() => {
      
      if(playerRef.current.state()==='loaded'){
        setElapsedTime((elapsedTime) => elapsedTime + 1);
        setProgress(
          (+playerRef.current.seek() / playerRef.current.duration()) * 100
        );
      }
    }, 1000);

    return () => {
      playerRef.current.unload();
      clearInterval(timer);
    };
  }, [match.params.id]);

  const toglePlayPause = () => {
    if (isLoaded === false) {
      const onEnd = () => {
        setIsPlaying(false);
        playerRef.current.unload();
        
      };

      const onLoad = () => {
        
        setIsLoaded(true);
      };

      playerRef.current = new Howl({
        src: `/assets/audio/Mishary/${currentSurah?.id}.mp3`,
        preload: true,
        html5: true,
        onend: onEnd,
        onload: onLoad,
        format: ["mp3"],
      });
    }
    if (isPlaying) {
      playerRef.current.pause();
      setIsPlaying(false);
    } else {
      setElapsedTime(0);
      playerRef.current.play();
      setIsPlaying(true);
      
    }
  };

  const formatTime = (duration: number): string => {
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor(duration / 3600 / 60);
    let seconds = Math.floor(duration % 3600);

    let ret = "";

    if (hours > 0) {
      ret += "" + hours + ":" + (minutes < 10 ? "0" : "");
    }

    ret += "" + minutes + ":" + (seconds < 10 ? "0" : "");
    ret += "" + seconds;

    return ret;
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="light" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color="burgundy" fullscreen>
        <IonCard className="surah" color="burgundy">
          <div className="overlay">
            <img className="mask" src="./assets/images/quran-page.jpg" />
          </div>

          <div>
            <h6 className="note ion-no-padding ion-text-center">
              {currentSurah?.name}
            </h6>
          </div>
          <div>
            <h6 className="arabic ion-no-padding ion-text-center">
              {currentSurah?.arabic}
            </h6>
          </div>
        </IonCard>
        <div className="ion-padding">
          <IonItem color="light">
            <IonText style={{ fontSize: "12px" }}>
            <IonChip color="burgundy">Info</IonChip>
              <p>
                {translationService.getLabel(
                  `label-surah${currentSurah?.id}-description`
                )}
              </p>
              
              <p>
                {translationService.getLabel(
                  `label-surah${currentSurah?.id}-note`
                )}
              </p>
            </IonText>
          </IonItem>
          
        </div>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonToolbar color="burgundy" className="ion-text-center">
          <IonRow>
            <IonRange
              value={progress}
              min={0}
              max={100}
              color="light"
              className="ion-padding"
            >
              <IonText
                slot="start"
                style={{ fontSize: "12px" }}
                className="ion-no-padding"
              >
                {formatTime(elapsedTime)}
              </IonText>
              <IonText slot="end" className="progress">
                {formatTime(playerRef.current.duration())}
              </IonText>
            </IonRange>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonAvatar
                className="play ion-text-center"
                onClick={() => {
                  toglePlayPause();
                }}
              >
                <IonIcon
                  className="ion-padding-top"
                  size="large"
                  icon={isPlaying ? pause : play}
                />
              </IonAvatar>
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
