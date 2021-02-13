import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonPage, IonSegment, IonSegmentButton, IonText, IonToolbar, useIonViewWillLeave } from "@ionic/react";
import { Howl } from "howler";
import { pauseCircleOutline, volumeHighOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";

type TranslationSection = "arabic" | "translation";

const EttehijatuPage: React.FC = () => {
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
            src:`/assets/audio/lessons/Ettehijjatu.m4a`,
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
              <h1 className="lesson" >Et-tehijatu</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>"A vaš Bog - jedan je Bog!"</h3>
              <p className="quote-reference">Kur'an 2:163</p>
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
                    <h2 className="lesson-note">Et-tehijatu učimo na sjedenju poslije svakog drugog rekata i na završetku namaza.</h2>
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
                    <p className="lesson-note">Ettehijjatu lillahi ves-salavatu vet-tajjibat</p>
                    <p className="lesson-note">Esselamu alejke ejjuhen-nebijju ve rametullahi ve berekatuh</p>
                    <p className="lesson-note">Esselamu alejna ve ala ibadillahis-salihin</p>
                    <p className="lesson-note">Ešhedu en la illahe illellah</p>
                    <p className="lesson-note">Ve ešhedu enne Muhammeden abduhu ve resuluhu</p>
                                        
                </IonText>
            </IonItem>
        </div>
        <div className="ion-padding" hidden={currentTranslationSection!=="translation"}>
        <IonItem className="lesson-note" lines="none">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Pozdravi, blagoslovi i lijepe riječi pripadaju Allahu</p>
                    <p className="lesson-note">Neka je selam, Allahova milost i Njegov blagoslov na tebe, Vjerovjesniče</p>
                    <p className="lesson-note">Neka je selam na nas i sve dobre Allahove robove!</p>
                    <p className="lesson-note">Svjedočim da nema Boga osim Allaha</p>
                    <p className="lesson-note">I svjedočim da je Muhammed Allahov rob i Allahov poslanik</p>
                    
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default EttehijatuPage;