import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonNote, IonRow, IonText, useIonViewWillLeave } from "@ionic/react";
import { Howl } from "howler";
import { caretForwardCircleOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";

const Qunut: React.FC = () => {
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
                <h2> Treći rekat</h2>
              </IonNote>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonChip color="burgundy">
                <IonLabel>Tekbir</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
                Podignemo ruke do ušiju i izgovorimo "Allahu ekber".
              </IonNote>
            </IonCol>
          </IonRow>
          
          <IonRow>
            <IonCol size="12">
              <IonChip color="burgundy">
                <IonLabel>Kunut dova</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
              Nakon tekbira se sastave ruke(svežu), a zatim se uči Kunut-dova.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonNote>
              Allahumme inna neste-inuke ve nestag-firuke, ve nesteh-dike ve nu&#39;minu bike, ve netubu ilejke ve
netevekkelu &#39;alejke, ve nusni &#39;alejkel-hajre kullehu. Neškuruke va la nekfuruke. Ve nahle&#39;u ve
netruku men jefdžuruke. Allahumme ijjake na&#39;budu ve leke nusalli ve nesdžudu, ve ilejke nes&#39;ā ve
nahfidu. Nerdžu rahmeteke ve nahša &#39;azabeke. Inne &#39;azabeke bil-kuffari mulhik.
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
                  color="burgundy"
                />
              </IonButton>
            </IonCol>
          </IonRow>
          
          
        </IonGrid>
      </IonItem>
    );
}

export default Qunut;