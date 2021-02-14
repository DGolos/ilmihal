import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonNote, IonRow, IonText, useIonViewWillLeave } from "@ionic/react";
import { Howl } from "howler";
import { caretForwardCircleOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";

interface FourthRakahProps {
  type?: string;
}

const FourthRakah:  React.FC<FourthRakahProps>  = ({ type}) =>{
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
                <h2>Četvrti rekat</h2>
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonChip color="burgundy" style={{marginLeft:"0px"}}>
                <IonLabel>Bismilla</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>Bismillahir-rahmanir-rahim.</IonNote>
            </IonCol>
          </IonRow>
          <IonRow >
            <IonCol size="12">
              <IonText className="audio-link">Bismilla</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Bismilla")}}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={caretForwardCircleOutline}
                  color="burgundy"
                />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonChip color="burgundy" style={{marginLeft:"0px"}}>
                <IonLabel>Fatiha</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                Suru El-Fatiha je obavezno učiti na svakom rekatu.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonText className="audio-link">El-Fatiha</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Fatiha")}}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={caretForwardCircleOutline}
                  color="burgundy"
                />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow hidden={type==="fardh"}>
            <IonCol size="12">
              <IonChip color="burgundy" style={{marginLeft:"0px"}}>
                <IonLabel>Sura</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={type==="fardh"}>
            <IonCol size="12">
              <IonNote>
                Nakon sure El-Fatiha proučimo jednu kraću suru ili najmanje 3
                ajeta iz duže sure.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow hidden={type==="fardh"}>
            <IonCol size="4">
              <IonText className="audio-link">En-Nas</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Nas")}}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={caretForwardCircleOutline}
                  color="burgundy"
                />
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonText className="audio-link">El-Felek</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Felek")}}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={caretForwardCircleOutline}
                  color="burgundy"
                />
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonText className="audio-link">El-Ihlas</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Ihlas")}}
                fill="solid"
                color="light"
              >
                <IonIcon
                  slot="icon-only"
                  icon={caretForwardCircleOutline}
                  color="burgundy"
                />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
    );
}

export default FourthRakah;