import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonNote, IonRow, IonText, useIonViewWillLeave } from "@ionic/react";
import { Howl } from "howler";
import { caretForwardCircleOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";

const FirstRakahPartTwo: React.FC = () => {
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
                <h2>Prvi rekat</h2>
              </IonNote>
            </IonCol>
          </IonRow>
      <IonRow>
            <IonCol size="12">
              <IonChip color="burgundy" style={{marginLeft:"0px"}}>
                <IonLabel>Ruk'u</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
              Na ruku'u (pregibanju) učimo tri puta: Subhane rabbijel-azim. Dižući se s ruku'a izgovaramo:Semiallahu limen hamideh, zatim malo zastanemo i reknemo: Rabbena lekel-hamd.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow className="ayah">
            <IonCol size="12">
              <IonText className="audio-link">Ruk'u</IonText>
              <IonButton class="no-shadow" onClick={() => {toglePlayPause("Ruku")}} fill="solid" color="light">
                <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
              </IonButton>
            </IonCol>
            
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonChip color="burgundy" style={{marginLeft:"0px"}}>
                <IonLabel>Sedžda</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
              Na sedždi (spuštanje lica na tlo) učimo tri puta: Subhane rabbijel-e ́ala.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow >
            <IonCol size="12">
              <IonText className="audio-link">Sedžda</IonText>
              <IonButton class="no-shadow" onClick={() => {toglePlayPause("Sedzda")}} fill="solid" color="light">
                <IonIcon  slot="icon-only" icon={caretForwardCircleOutline} color="burgundy"/>
              </IonButton>
            </IonCol>
            
          </IonRow>
      </IonGrid>
      </IonItem>
    );
}

export default FirstRakahPartTwo;