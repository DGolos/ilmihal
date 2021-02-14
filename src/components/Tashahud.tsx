import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonNote, IonRow, IonText, useIonViewWillLeave } from "@ionic/react";
import { Howl } from "howler";
import { caretForwardCircleOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";

interface TashashudProps {
  first?: boolean;
}

const Tashashud: React.FC<TashashudProps> = ({ first}) => {

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
                <h2>{first===true?"Prvo sjedenje":"Završetak namaza"}</h2>
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow hidden={first}>
            <IonCol size="12">
              <IonChip color="burgundy" style={{marginLeft:"0px"}}>
                <IonLabel>Kadei-ehire</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={first}>
            <IonCol size="12">
              <IonNote>
                Kadei-ehire je posljednje sjedenje na kraju namaza.Na zadnjem
                sjedenju svih namaza učimo et-tehijatu,salavate i dove.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow hidden={first}>
            <IonCol size="5">
              <IonText className="audio-link">Et-tehijatu</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Ettehijjatu")}}
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
              <IonText className="audio-link">Salavati</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Salavati")}}
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
            <IonCol size="3">
              <IonText className="audio-link">Dove</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Dova")}}
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
          <IonRow hidden={first}>
            <IonCol size="12">
              <IonChip color="burgundy" style={{marginLeft:"0px"}}>
                <IonLabel>Selam</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                Namaz završavamo predajom selema prvo na desnu stranu pa na
                lijevu.Selem se predaje izgovarajući es-selamu alejkum ve
                rahmetullah.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow hidden={!first}>
            <IonCol size="12">
              <IonChip color="burgundy" style={{marginLeft:"0px"}}>
                <IonLabel>Et-tehijatu</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow hidden={!first}>
            <IonCol size="12">
              <IonNote>
                Na prvom sjedenju svih namaza učimo et-tehijatu.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow hidden={!first}>
            <IonCol size="12">
              <IonText className="audio-link">Et-tehijatu</IonText>
              <IonButton
                class="no-shadow"
                onClick={() => {toglePlayPause("Ettehijjatu")}}
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

export default Tashashud;