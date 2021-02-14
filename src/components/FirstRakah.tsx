import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonNote, IonRow, IonText, useIonViewWillLeave } from "@ionic/react";
import { Howl } from "howler";
import { caretForwardCircleOutline, play } from "ionicons/icons";
import React, { useRef, useState } from "react";

const FirstRakah: React.FC = () => {
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
                <h2>Prvi rekat</h2>
              </IonNote>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonChip color="burgundy" style={{marginLeft:"0px"}}>
                <IonLabel>Tekbir</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                Podignemo ruke do ušiju i izgovorimo "Allahu ekber".To je znak
                da je namaz počeo.Nakon tekbira proučimo subhaneke,euzu i
                bismillu.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonText className="audio-link">Subhaneke</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Subhaneke")}}
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
            <IonCol size="6">
              <IonText className="audio-link">Euza i bismilla</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("EuzaBismilla")}}
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
          <IonRow className="ayah">
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
          <IonRow>
            <IonCol size="12">
              <IonChip color="burgundy" style={{marginLeft:"0px"}}>
                <IonLabel>Sura</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                Nakon sure El-Fatiha proučimo jednu kraću suru ili najmanje 3
                ajeta iz duže sure.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
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

export default FirstRakah;