import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonPage, IonSegment, IonSegmentButton, IonText, IonToolbar, useIonViewWillLeave } from "@ionic/react";
import { Howl } from "howler";
import { pauseCircleOutline, volumeHighOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";

type TranslationSection = "arabic" | "translation";

const SalavatPage: React.FC = () => {
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
            src:`/assets/audio/lessons/Salavati.m4a`,
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
              <IonBackButton color="purple" defaultHref="/BookOneMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard className="lesson-header ion-padding ion-text-center" color="purple">
        <IonCardTitle>
              <h1 className="lesson" >Salavati</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>"Allah i meleki Njegovi blagosilju Vjerovjesnika"</h3>
              <p className="quote-reference">Kur'an 33:56</p>
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
                    <h2 className="lesson-note">Salavati su pohvala Poslaniku Muhammedu, a.s., od Uzvišenog Allaha.Salavate učimo na sjedenju nakon et-ehijjatu.</h2>
                </IonText>
            </IonItem>
        </div>
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
            <IonSegmentButton value={"arabic" as TranslationSection} className="purple">
              
                Arapski
               
            </IonSegmentButton>
            <IonSegmentButton value={"translation" as TranslationSection} className="purple">
              
                Bosanski
              
            </IonSegmentButton>
          </IonSegment>
        </div>
        <div className="ion-padding" hidden={currentTranslationSection!=="arabic"}>
        <IonItem className="lesson-note" lines="none">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Allahumme salli ala Muhammedin ve ́ala ali Muhammed</p>
                    <p className="lesson-note">Kema sallejte ́ala Ibrahime ve ́ala ali Ibrahim</p>
                    <p className="lesson-note">Inneke hamidum- medžid</p>
                    <p className="lesson-note">Allahumme barik ala Muhammedin ve ́ala ali Muhammed</p>
                    <p className="lesson-note">Kema barekte ́ala Ibrahime ve ́ala ali Ibrahim</p>
                    <p className="lesson-note">Inneke hamidum-medžid</p>
                                        
                </IonText>
            </IonItem>
        </div>
        <div className="ion-padding" hidden={currentTranslationSection!=="translation"}>
        <IonItem className="lesson-note" lines="none">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Allahu, blagoslovi Muhammeda i njegovu porodicu</p>
                    <p className="lesson-note">Kao što Si blagoslovio Ibrahima i njegovu porodicu</p>
                    <p className="lesson-note">Zaista si ti hvaljen i slavljen</p>
                    <p className="lesson-note">Allahu, obdari Muhammeda i njegovu porodicu</p>
                    <p className="lesson-note">Kao što Si obdario Ibrahima i njegovu porodicu</p>
                    <p className="lesson-note">Zaista si ti hvaljen i slavljen</p>
                    
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default SalavatPage;