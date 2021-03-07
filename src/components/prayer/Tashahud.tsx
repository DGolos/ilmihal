import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonNote, IonRow, IonSlide, IonText, useIonViewWillLeave } from "@ionic/react";
import { Howl } from "howler";
import { caretForwardCircleOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
import { translationService } from "../../services/TranslationService";
import { Progress } from "./../common/Progress";

interface TashashudProps {
  first?: boolean;
  color?:string;
  prayerLength?: number;
}

const Tashashud: React.FC<TashashudProps> = ({ first,color,prayerLength}) => {

  const playerRef = useRef(new Howl({ src: [""] }));
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentAudio,setCurrnetAudio]=useState("");
  useIonViewWillLeave(() => {
    if (isLoaded) {
      playerRef.current.stop();
    }
  });

  const toglePlayPause = (file:string) => {
    
    playerRef.current.stop();
    setIsLoaded(false);
   
    if (file !== currentAudio) {
      
      const onLoad = () => {
        setIsLoaded(true);
      };

      playerRef.current = new Howl({
        src: `/assets/audio/Lessons/${file}.mp3`,
        preload: true,
        html5: true,
        onload: onLoad,
        format: ["mp3"],
      });
      setCurrnetAudio(file);
    }
    
      playerRef.current.play();
      
    
  };
    return (
      <IonSlide>
        <IonItem
        key="1"
        detail={false}
        lines="none"
        color="light"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <IonGrid className="ion-text-left">
          <IonRow>
            <IonCol size="6">
              <IonNote>
                <h2>{first===true?translationService.getLabel('label-prayer-first-tashahud-header'):translationService.getLabel('label-prayer-last-tashahud-header')}</h2>
              </IonNote>
            </IonCol>
            <IonCol className="ion-padding" size="6">
            <Progress currentValue={first===true?6:prayerLength!} maxValue={prayerLength!} color={color} />
          </IonCol>
          </IonRow>
          <IonRow hidden={first}>
            <IonCol size="12">
              <IonChip color={color} style={{marginLeft:"0px"}}>
                <IonLabel>{translationService.getLabel('label-prayer-kade-ehire-header')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={first}>
            <IonCol size="12">
              <IonNote>
              {translationService.getLabel('label-prayer-kade-ehire-description')}
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow hidden={first}>
            <IonCol size="5">
              <IonText className={`audio-link-${color}`}>{translationService.getLabel('label-prayer-ettehijjatu')}</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Ettehijjatu")}}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={caretForwardCircleOutline}
                  color={color}
                />
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonText className={`audio-link-${color}`}>{translationService.getLabel('label-prayer-salawat')}</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Salavati")}}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={caretForwardCircleOutline}
                  color={color}
                />
              </IonButton>
            </IonCol>
            <IonCol size="3">
              <IonText className={`audio-link-${color}`}>{translationService.getLabel('label-prayer-dua-header')}</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Dova")}}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={caretForwardCircleOutline}
                  color={color}
                />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow hidden={first}>
            <IonCol size="12">
              <IonChip color={color} style={{marginLeft:"0px"}}>
                <IonLabel>{translationService.getLabel('label-prayer-selam-header')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={first}>
            <IonCol size="12">
              <IonNote>
              {translationService.getLabel('label-prayer-selam-description')}
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow hidden={!first}>
            <IonCol size="12">
              <IonChip color={color} style={{marginLeft:"0px"}}>
                <IonLabel>{translationService.getLabel('label-prayer-ettehijjatu')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={!first}>
            <IonCol size="12">
              <IonNote>
              {translationService.getLabel('label-prayer-ettehijjatu-description')}
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow hidden={!first}>
            <IonCol size="12">
              <IonText className={`audio-link-${color}`}>{translationService.getLabel('label-prayer-ettehijjatu')}</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Ettehijjatu")}}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={caretForwardCircleOutline}
                  color={color}
                />
              </IonButton>
            </IonCol>
            </IonRow>
        </IonGrid>
      </IonItem>
      </IonSlide>
      
    );
}

export default Tashashud;