import {
  IonBackButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonNote,
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
import { Progress } from "../../components/common/Progress";
import FirstRakah from "../../components/prayer/FirstRakah";
import FourthRakah from "../../components/prayer/FourthRakah";
import Qunut from "../../components/prayer/Qunut";
import SecondRakah from "../../components/prayer/SecondRakah";
import Tashashud from "../../components/prayer/Tashahud";
import ThirdRakah from "../../components/prayer/ThirdRakah";
import { translationService } from "../../services/TranslationService";

export const IshaPrayerDetailsPage: React.FC<
  RouteComponentProps<{ type: string }>
> = ({ match }) => {
  const [prayerType, setPrayerType] = useState("");
  const [numberOfRakah, setNumberOfRakah] = useState(0);
  const [prayerLength, setPrayerLength] = useState(0);
  const [isPlaying,setIsPlaying]=useState(false);
  const [currentAudio,setCurrentAudio]=useState("");
  const playerRef = useRef(new Howl({ src: [""] }));


  useEffect(() => {
    if (match.params.type === "sunnah") {
      setPrayerType(translationService.getLabel("label-isha-sunnah"));
      setNumberOfRakah(4);
      setPrayerLength(11);
    }

    if (match.params.type === "fardh") {
      setPrayerType(translationService.getLabel("label-isha-fardh"));
      setNumberOfRakah(4);
      setPrayerLength(11);
    }

    if (match.params.type === "sunsunnah") {
      setPrayerType(translationService.getLabel("label-isha-sunsunnah"));
      setNumberOfRakah(2);
      setPrayerLength(6);
    }

    if (match.params.type === "witr") {
      setPrayerType(translationService.getLabel("label-witr"));
      setNumberOfRakah(3);
      setPrayerLength(10);
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
            <IonBackButton color="purple" defaultHref="/IshaPrayerPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <div style={{ marginTop: 0, marginLeft: 15, marginRight: 15 }}>
          <IonGrid>
            <IonRow style={{ marginTop: 5 }}>
              <IonCol size="7">
                <IonText hidden={match.params.type === "witr"}>
                  <h1 className="prayer-description">{prayerType}</h1>
                </IonText>
                <IonText hidden={match.params.type !== "witr"}>
                  <h1 className="prayer-description">
                    {translationService.getLabel("label-witr")}
                  </h1>
                </IonText>
              </IonCol>
              <IonCol size="5" className="ion-text-right">
                <IonText>
                  <h2>
                    {numberOfRakah}{" "}
                    {translationService.getLabel("label-rakah-cardinal")}
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
                color="light"
                lines="none"
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                <IonGrid className="ion-text-left">
                  <IonRow>
                    <IonCol size="6">
                      <IonChip color="purple" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel("label-before-prayer")}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress
                        currentValue={1}
                        maxValue={prayerLength}
                        color="purple"
                      />
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonText>
                        <h2>
                          {translationService.getLabel("label-nijjah-header")}
                        </h2>
                      </IonText>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel("label-nijjah-definition")}
                      </IonNote>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="12">
                      <IonNote hidden={match.params.type !== "sunnah"}>
                        {translationService.getLabel(
                          "label-isha-sunnah-nijjah"
                        )}
                      </IonNote>
                      <IonNote hidden={match.params.type !== "fardh"}>
                        {translationService.getLabel("label-isha-fardh-nijjah")}
                      </IonNote>
                      <IonNote hidden={match.params.type !== "sunsunnah"}>
                        {translationService.getLabel(
                          "label-isha-sunsunnah-nijjah"
                        )}
                      </IonNote>
                      <IonNote hidden={match.params.type !== "witr"}>
                        {translationService.getLabel("label-witr-nijjah")}
                      </IonNote>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonSlide>

            <FirstRakah color="purple" prayerLength={prayerLength} currentAudio={currentAudio} togglePlayPause={toglePlayPause}/>

            <SecondRakah color="purple" prayerLength={prayerLength} currentAudio={currentAudio} togglePlayPause={toglePlayPause}/>

            <Tashashud
              first={match.params.type !== "sunsunnah" ? true : false}
              color="purple"
              prayerLength={prayerLength}
              salawat={match.params.type === "sunnah" || match.params.type === "witr"? true : false}
              currentAudio={currentAudio} 
              togglePlayPause={toglePlayPause}
            />

            {match.params.type === "witr" && (
              <>
                <ThirdRakah
                  type={match.params.type}
                  showSubhaneke={true}
                  color="purple"
                  prayerLength={prayerLength}
                  currentAudio={currentAudio} togglePlayPause={toglePlayPause}
                />

                <Qunut color="purple" prayerLength={prayerLength} currentAudio={currentAudio} togglePlayPause={toglePlayPause}/>

                <Tashashud
                  first={false}
                  color="purple"
                  prayerLength={prayerLength}
                  salawat={false}
                  currentAudio={currentAudio} 
                  togglePlayPause={toglePlayPause}
                />
              </>
            )}

            {(match.params.type === "sunnah" ||
              match.params.type === "fardh") && (
              <>
                <ThirdRakah
                  type={match.params.type}
                  showSubhaneke={match.params.type === "sunnah"}
                  color="purple"
                  prayerLength={prayerLength}
                  currentAudio={currentAudio} togglePlayPause={toglePlayPause}
                />

                <FourthRakah
                  type={match.params.type}
                  color="purple"
                  prayerLength={prayerLength}
                  currentAudio={currentAudio} togglePlayPause={toglePlayPause}
                />

                <Tashashud
                  first={false}
                  color="purple"
                  prayerLength={prayerLength}
                  salawat={false}
                  currentAudio={currentAudio} togglePlayPause={toglePlayPause}
                />
              </>
            )}
          </IonSlides>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default IshaPrayerDetailsPage;
