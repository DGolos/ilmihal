import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonPage, IonRow, IonSegment, IonSegmentButton, IonText, IonToolbar, useIonViewWillLeave } from "@ionic/react";
import { Howl } from "howler";
import { pauseCircleOutline, volumeHighOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";

type TranslationSection = "arabic" | "translation";

const SurahFatihaPage: React.FC = () => {
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
            src:`/assets/audio/lessons/Fatiha.m4a`,
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
              <h1 className="lesson" >Sura El-Fatiha</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>"Fatiha je lijek, umirujuće sredstvo za svaku bolest."</h3>
              <p className="quote-reference">Hadis</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
                <IonText>
                    <h2 className="lesson-note">Fatiha je prva kur&#39;anska sura. Često se naziva Elham. Sastoji se od sedam ajeta, u kojima se
iskazuje molba Allahu, dž.š., za upućivanje na Pravi put i zaštita od zla.</h2>
                    
                </IonText>
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
            <IonSegmentButton value={"arabic" as TranslationSection} color="razimic">
              
                Arapski
               
            </IonSegmentButton>
            <IonSegmentButton value={"translation" as TranslationSection} color="razimic">
              
                Bosanski
              
            </IonSegmentButton>
          </IonSegment>
        </div>
        
                 
        <div className="ion-padding" hidden={currentTranslationSection!=="arabic"}>
          
            <IonItem className="lesson-note ion-text-center" lines="none">
                <IonText>
                    <p>El-hamdu-lillahi Rabbil-'alemin</p>
                    <p>Errahmanir-rahim</p>
                    <p>Maliki jev-middin</p>
                    <p>Ijjake na'budu ve ijjake nestein</p>
                    <p>Ihdi-nessiratal mustekim</p>
                    <p>Siratallezine en'amte 'alejhim</p>
                    <p>Gajril magubi'alejhim ve leddallin</p>
                    <p>Amin!</p>
                   
                    
                </IonText>
            </IonItem>
            
        </div>
        <div className="ion-padding" hidden={currentTranslationSection!=="translation"}>
        <IonItem className="lesson-note" lines="none">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Hvala Allahu Gosposdaru svjetova</p>
                    <p className="lesson-note">Svemu Dobročinitelja, Milostivom</p>
                    <p className="lesson-note">Vladaru Sudnjeg dana</p>
                    <p className="lesson-note">Samo Tebe obožavamo, i samo od Tebe pomoć molimo</p>
                    <p className="lesson-note">Uputi nas na pravi put</p>
                    <p className="lesson-note">Na put onih kojima si darovao Svoje blagodati</p>
                    <p className="lesson-note">A ne na put onih na koje si se rasrdio i koji su zalutali</p>
                    <p className="lesson-note">Amin!</p>
                    
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default SurahFatihaPage;