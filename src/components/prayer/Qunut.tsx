import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonNote, IonRow, IonSlide, IonText, useIonViewWillLeave } from "@ionic/react";
import { Howl } from "howler";
import { caretForwardCircleOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
import { translationService } from "../../services/TranslationService";
import { Progress } from "./../common/Progress";

interface QunutProps {
  color?:string;
  prayerLength?: number;
}

const Qunut: React.FC<QunutProps> = ({color,prayerLength}) => {
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
                <h2> {translationService.getLabel('label-third-rakah-header')}</h2>
              </IonNote>
            </IonCol>
            <IonCol className="ion-padding" size="6">
            <Progress currentValue={8} maxValue={prayerLength!} color={color} />
          </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonChip color={color}>
                <IonLabel>{translationService.getLabel('label-prayer-tekbir')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
              {translationService.getLabel('label-prayer-qunut-description')}
              </IonNote>
            </IonCol>
          </IonRow>
          
          <IonRow>
            <IonCol size="12">
              <IonChip color={color}>
                <IonLabel>{translationService.getLabel('label-prayer-qunut-header')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
              {translationService.getLabel('label-prayer-qunut-detail')}
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
              {translationService.getLabel('label-prayer-qunut-note')}
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText className="audio-link">Kunut dova</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("KunutDova")}}
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

export default Qunut;