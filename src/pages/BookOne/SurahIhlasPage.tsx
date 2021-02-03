import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonPage, IonRow, IonSegment, IonSegmentButton, IonText, IonToolbar, useIonViewWillLeave } from "@ionic/react";
import { Howl } from "howler";
import { pauseCircleOutline, volumeHighOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";

type TranslationSection = "arabic" | "translation";

const SurahIhlasPage: React.FC = () => {
    const [currentTranslationSection, setCurrentTranslationSection] = useState<TranslationSection>("arabic");
    const [isPlaying,setIsPlaying]=useState(false);
  const playerRef=useRef(new Howl({src:[""]}));
  const [isLoaded,setIsLoaded]=useState(false);

  useIonViewWillLeave(() => {
    if(isPlaying){
      
      playerRef.current.stop();
    }
 });

  const toglePlayPause=()=>{
      
    if(isLoaded===false){
  
      const onEnd=()=>{
        setIsPlaying(false);
       
      }
  
      const onLoad=()=>{
        setIsLoaded(true);
        
      }
  
      const onPlay=()=>{
        
      }
       
        playerRef.current=new Howl({
            src:`/assets/audio/lessons/Ihlas.m4a`,
            preload:true,
            html5:true,
            onend:onEnd,
            onload:onLoad,
            onplay:onPlay,
            format:["m4a"]
            }
        )
        
  
    }
    if(isPlaying){
        playerRef.current.pause();
        setIsPlaying(false);
    }
    else{
        playerRef.current.play();
        setIsPlaying(true);
    }
  
  }
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="razimic" defaultHref="/BookOneMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard className="lesson-header ion-padding ion-text-center" color="razimic">
        <IonCardTitle>
              <h1 className="lesson" >Sura El-Ihlas</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>"Suha El-Ihlas je trećina Kur'ana."</h3>
              <p className="quote-reference">Muslim</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        
        <div className="ion-padding">
        <IonSegment
            value={currentTranslationSection}
            onIonChange={(e) =>
                setCurrentTranslationSection(
                e.detail.value as TranslationSection
              )
            }
            mode="md"
          >
            <IonSegmentButton value={"arabic" as TranslationSection} color="razimic">
              
                Arapski
               
            </IonSegmentButton>
            <IonSegmentButton value={"translation" as TranslationSection} color="razimic">
              
                Bosanski
              
            </IonSegmentButton>
          </IonSegment>
        </div>
        <div className="ion-padding" hidden={currentTranslationSection!=="arabic"}>
          <IonGrid>
            <IonRow className="ion-text-center">
              <IonCol size="12">
              <IonButton
                  className="no-shadow"
                  onClick={() => {toglePlayPause()}}
                  fill="clear"
                  color="light"
                  size="default"
                  
                >
                  <IonIcon
                    slot="icon-only"
                    icon={isPlaying ? pauseCircleOutline: volumeHighOutline}
                    color="purple"
                  />
                </IonButton>
              </IonCol>
              <IonCol size="12">
              <IonItem className="lesson-note" lines="none">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Kul Huvallahu ehad</p>
                    <p className="lesson-note">Allahus-Samed</p>
                    <p className="lesson-note">Lem jelid, ve lem juled</p>
                    <p className="lesson-note">Ve lem jekullehu kufuven ehad.</p>
                                                  
                </IonText>
            </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        
        </div>
        <div className="ion-padding" hidden={currentTranslationSection!=="translation"}>
        <IonItem className="lesson-note" lines="none">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Reci: On, Allah, - jedan je.</p>
                    <p className="lesson-note">On je Neograničeni Gospodar koga svako treba moliti za pomoć i milost</p>
                    <p className="lesson-note">Nije nikog rodio, niti je rođen</p>
                    <p className="lesson-note">Njemu niko nije ravan</p>
                                       
                                        
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default SurahIhlasPage;