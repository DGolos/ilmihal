import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonNote, IonRow, IonText, useIonViewWillLeave } from "@ionic/react";
import { Howl } from "howler";
import { caretForwardCircleOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
import { RouteComponentProps } from "react-router";
import { translationService } from "../services/TranslationService";

interface ThirdRakahPropsProps {
  type?: string;
  showSubhaneke?:boolean;
  color?:string;
}

const ThirdRakah:  React.FC<ThirdRakahPropsProps>  = ({ type,showSubhaneke,color}) =>{
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
        key="1"
        detail={false}
        lines="none"
        color="light"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <IonGrid className="ion-text-left">
          <IonRow>
            <IonCol size="12">
              <IonNote>
                <h2>{translationService.getLabel('label-third-rakah-header')}</h2>
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow hidden={!showSubhaneke}>
            <IonCol size="12">
              <IonChip color={color} style={{marginLeft:"0px"}}>
                <IonLabel>{translationService.getLabel('label-prayer-dua-header')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={!showSubhaneke}>
            <IonCol size="12">
              <IonNote>
              {translationService.getLabel('label-prayer-dua-description')}
              </IonNote>
            </IonCol>
          </IonRow>
          
          <IonRow hidden={!showSubhaneke}>
            <IonCol size="6">
              <IonText className={`audio-link-${color}`}>Subhaneke</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Subhaneke")}}
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
            <IonCol size="6">
              <IonText className={`audio-link-${color}`}>{translationService.getLabel('label-prayer-audhu')}</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("EuzaBismilla")}}
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
          <IonRow hidden={showSubhaneke}>
            <IonCol size="12">
              <IonChip color={color} style={{marginLeft:"0px"}}>
                <IonLabel>{translationService.getLabel('label-prayer-bismilla-header')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={showSubhaneke}>
            <IonCol size="12">
              <IonNote>{translationService.getLabel('label-prayer-bismilla-description')}</IonNote>
            </IonCol>
          </IonRow>
          <IonRow hidden={showSubhaneke}>
            <IonCol size="12">
              <IonText className={`audio-link-${color}`}>Bismilla</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Bismilla")}}
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
          <IonRow>
            <IonCol size="12">
              <IonChip color={color} style={{marginLeft:"0px"}}>
                <IonLabel>{translationService.getLabel('label-prayer-fatiha-header')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
              {translationService.getLabel('label-prayer-fatiha-description')}
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow >
            <IonCol size="12">
              <IonText className={`audio-link-${color}`}>El-Fatiha</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Fatiha")}}
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
          <IonRow hidden={type==="fardh"}>
            <IonCol size="12">
              <IonChip color={color} style={{marginLeft:"0px"}}>
                <IonLabel>{translationService.getLabel('label-prayer-surah-header')}</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={type==="fardh"}>
            <IonCol size="12">
              <IonNote>
              {translationService.getLabel('label-prayer-surah-description')}
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow hidden={type==="fardh"}>
            <IonCol size="4">
              <IonText className={`audio-link-${color}`}>En-Nas</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Nas")}}
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
              <IonText className={`audio-link-${color}`}>El-Felek</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Felek")}}
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
              <IonText className={`audio-link-${color}`}>El-Ihlas</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Ihlas")}}
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
    );
}

export default ThirdRakah;