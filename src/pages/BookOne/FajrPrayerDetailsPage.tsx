import {
  IonBackButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonToolbar,
  useIonViewDidLeave,
} from "@ionic/react";
import { Howl } from "howler";
import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Progress } from "../../components/Progress";
import FirstRakah from "../../components/prayer/FirstRakah";
import SecondRakah from "../../components/prayer/SecondRakah";
import Tashashud from "../../components/prayer/Tashahud";
import { translationService } from "../../services/TranslationService";

export const FajrPrayerDetailsPage: React.FC<
  RouteComponentProps<{ type: string }>
> = ({ match }) => {
  const [prayerType, setPrayerType] = useState("");
  const [currentAudio,setCurrentAudio]=useState("");
  const [isPlaying,setIsPlaying]=useState(false);
  const playerRef = useRef(new Howl({ src: [""] }));
  
  useEffect(() => {
    if (match.params.type === "sunnah") {
      setPrayerType(translationService.getLabel("label-fajr-sunnah"));
    }

    if (match.params.type === "fardh") {
      setPrayerType(translationService.getLabel("label-fajr-fardh"));
    }
    
  }, [match.params.type]);

  useIonViewDidLeave(() => {
    playerRef.current.unload();
  });

  const stopPlaying = () => {
    playerRef.current.unload();
    setCurrentAudio("");
  }

  const play=(file:string)=>{
    const onEnd = () => {
      setCurrentAudio("");
    };
    
   playerRef.current = new Howl({
        src: `/assets/audio/Lessons/${file}.mp3`,
        preload: true,
        html5: true,
        format: ["mp3"],
        onend: onEnd
      });
      setCurrentAudio(file);
   
    setIsPlaying(true);
    playerRef.current.play();
  }

  const toglePlayPause = (file: string) => {

    if(isPlaying){
      if(currentAudio===file){
        playerRef.current.pause();
        setIsPlaying(false);
      }
      else{
        playerRef.current.unload();
        play(file);
      }
    }
    else{
      if(currentAudio===file){
        playerRef.current.play();
        setIsPlaying(true);
      }
      else{
        play(file);
      }
      
    }
 
  };
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="prayer">
          <IonButtons slot="start">
            <IonBackButton color="burgundy" defaultHref="/FajrPrayerPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <div style={{ marginTop: 0, marginLeft: 15, marginRight: 15 }}>
          <IonGrid>
            <IonRow style={{ marginTop: 5 }}>
              <IonCol size="7">
                <IonText>
                  <h1 className="prayer-description">{prayerType}</h1>
                </IonText>
              </IonCol>
              <IonCol size="5" className="ion-text-right">
                <IonText>
                  <h2 className="black">
                    2 {translationService.getLabel("label-rakah-cardinal")}
                  </h2>
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div>
          <IonSlides onIonSlideDidChange={() => {stopPlaying();}}>
            <IonSlide>
              <IonItem
                key="1"
                detail={false}
                className="lesson-note"
                lines="none"
                style={{ marginLeft: "15px", marginRight: "15px" }}
                
              >
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel("label-before-prayer")}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={1}
                        maxValue={6}
                        color="burgundy"
                      />
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="black">
                          {translationService.getLabel("label-nijjah-header")}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2 className="lesson-note">
                        {translationService.getLabel("label-nijjah-definition")}
                        </h2>
                        
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText hidden={match.params.type !== "sunnah"}>
                      <h2 className="lesson-note">
                        {translationService.getLabel(
                          "label-fajr-sunnah-nijjah"
                        )}
                        </h2>
                      </IonText>
                      <IonText hidden={match.params.type === "sunnah"}>
                      <h2 className="lesson-note">
                        {translationService.getLabel("label-fajr-fardh-nijjah")}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>

            <FirstRakah color="burgundy" prayerLength={6} currentAudio={currentAudio} togglePlayPause={toglePlayPause} />

            <SecondRakah color="burgundy" prayerLength={6} currentAudio={currentAudio} togglePlayPause={toglePlayPause}/>

            <Tashashud
              first={false}
              color="burgundy"
              prayerLength={6}
              salawat={false}
              currentAudio={currentAudio}
              togglePlayPause={toglePlayPause}
            />
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default FajrPrayerDetailsPage;
