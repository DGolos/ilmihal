import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonNote, IonRow, IonText, useIonViewWillLeave } from "@ionic/react";
import { Howl } from "howler";
import { caretForwardCircleOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
import { translationService } from "../services/TranslationService";

interface FirstRakahPartTwoProps{
  color?:string;
}

const FirstRakahPartTwo: React.FC<FirstRakahPartTwoProps> = ({color}) => {
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
        src: `/assets/audio/lessons/${file}.m4a`,
        preload: true,
        html5: true,
        onload: onLoad,
        format: ["m4a"],
      });
      setCurrnetAudio(file);
    }
    
      playerRef.current.play();
      
    
  };
    return (
        <IonItem
        key="2"
        detail={false}
        lines="none"
        color="light"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <IonGrid className="ion-text-left">
      <IonRow>
            <IonCol size="12">
              <IonNote>
                <h2>{translationService.getLabel('label-first-rakah-header')}</h2>
              </IonNote>
            </IonCol>
          </IonRow>
      <IonRow>
            <IonCol size="12">
              <IonChip color={color} style={{marginLeft:"0px"}}>
                <IonLabel>{translationService.getLabel('label-prayer-ruku-header')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
              {translationService.getLabel('label-prayer-ruku-description')}
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow className="ayah">
            <IonCol size="12">
              <IonText className={`audio-link-${color}`}>{translationService.getLabel('label-prayer-ruku-header')}</IonText>
              <IonButton class="no-shadow" onClick={() => {toglePlayPause("Ruku")}} fill="solid" color="light">
                <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color={color}/>
              </IonButton>
            </IonCol>
            
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonChip color={color} style={{marginLeft:"0px"}}>
                <IonLabel>{translationService.getLabel('label-prayer-sujud-header')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
              {translationService.getLabel('label-prayer-sujud-description')}
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow >
            <IonCol size="12">
              <IonText className={`audio-link-${color}`}>{translationService.getLabel('label-prayer-sujud-header')}</IonText>
              <IonButton class="no-shadow" onClick={() => {toglePlayPause("Sedzda")}} fill="solid" color="light">
                <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color={color}/>
              </IonButton>
            </IonCol>
            
          </IonRow>
      </IonGrid>
      </IonItem>
    );
}

export default FirstRakahPartTwo;