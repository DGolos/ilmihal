import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonItem,
    IonPage,
    IonRow,
    IonSegment,
    IonSegmentButton,
    IonText,
    IonToolbar,
    useIonViewWillLeave,
  } from "@ionic/react";
  import { Howl } from "howler";
  import { pauseCircleOutline, volumeHighOutline } from "ionicons/icons";
  import React, { useRef, useState } from "react";
  
  type TranslationSection = "arabic" | "translation";
  
  const SurahLehebPage: React.FC = () => {
    const [
      currentTranslationSection,
      setCurrentTranslationSection,
    ] = useState<TranslationSection>("arabic");
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef(new Howl({ src: [""] }));
    const [isLoaded, setIsLoaded] = useState(false);
  
    useIonViewWillLeave(() => {
      if (isPlaying) {
        playerRef.current.stop();
      }
    });
  
    const toglePlayPause = () => {
      if (isLoaded === false) {
        const onEnd = () => {
          setIsPlaying(false);
        };
  
        const onLoad = () => {
          setIsLoaded(true);
        };
  
        const onPlay = () => {};
  
        playerRef.current = new Howl({
          src: `/assets/audio/lessons/Leheb.m4a`,
          preload: true,
          html5: true,
          onend: onEnd,
          onload: onLoad,
          onplay: onPlay,
          format: ["m4a"],
        });
      }
      if (isPlaying) {
        playerRef.current.pause();
        setIsPlaying(false);
      } else {
        playerRef.current.play();
        setIsPlaying(true);
      }
    };
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="razimic" defaultHref="/BookTwoMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
          <IonCard
            className="lesson-header ion-padding ion-text-center"
            color="razimic"
          >
            <IonCardTitle>
              <h1 className="lesson">Sura Leheb</h1>
            </IonCardTitle>
            <IonCardContent>
              <IonCardSubtitle>
                <h3 style={{ fontStyle: "italic" }}>
                  "Suha El-Ihlas je trećina Kur'ana."
                </h3>
                <p className="quote-reference">Hadis</p>
              </IonCardSubtitle>
            </IonCardContent>
          </IonCard>
          <div className="ion-padding">
              <IonItem className="lesson-note" lines="none">
                  <IonButton
                    className="no-shadow"
                    onClick={() => {toglePlayPause()}}
                    fill="clear"
                    color="light"
                    size="default"
                    slot="start"
                    
                  >
                    <IonIcon
                      slot="icon-only"
                      icon={isPlaying ? pauseCircleOutline: volumeHighOutline}
                      color="purple"
                    />
                  </IonButton>
                  <IonText>
                      <h2 className="lesson-note">Ovu suru nauči i tri puta je prouči pa ćeš biti kao Kur'an zaštićen i sačuvan.</h2>
                      
                  </IonText>
              </IonItem>
          </div>
          <div className="ion-padding">
            <IonSegment
              value={currentTranslationSection}
              onIonChange={(e) =>
                setCurrentTranslationSection(e.detail.value as TranslationSection)
              }
              
            >
              <IonSegmentButton
                value={"arabic" as TranslationSection}
                color="razimic"
              >
                Arapski
              </IonSegmentButton>
              <IonSegmentButton
                value={"translation" as TranslationSection}
                color="razimic"
              >
                Bosanski
              </IonSegmentButton>
            </IonSegment>
          </div>
          <div
            className="ion-padding"
            hidden={currentTranslationSection !== "arabic"}
          >
            
                <IonItem className="lesson-note" lines="none">
              <IonText className="ion-text-center">
                <p>Tebbet jeda Ebi-Lehebin ve tebbe</p>
                <p>Ma agna &#39;anhu maluhu ve ma keseb</p>
                <p>Sejasla naren zate-Leheb</p>
                <p>Vemre-etuhu hamma-letel - hatab</p>
                <p>Fi džidiha hablun mim-mesed</p>
              </IonText>
            </IonItem>
               
          </div>
          <div
            className="ion-padding"
            hidden={currentTranslationSection !== "translation"}
          >
            <IonItem className="lesson-note" lines="none">
              <IonText className="ion-text-center">
                <p>Proklete neka su ruke Ebu Lehebove, proklet neka je on sam</p>
                <p>Njegova imovina i sve što je stekao neće mu pomoći</p>
                <p>On će biti pržen na plamenu džehennemskom</p>
                <p>Isto tako biće kažnjena i njegova žena koja spletkari!</p>
                <p>Za njezin vrat biće privezano uže od vlakna palminog</p>
              </IonText>
            </IonItem>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default SurahLehebPage;
  