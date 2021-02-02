import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
  useIonViewWillLeave
  
} from "@ionic/react";
import { Howl } from "howler";
import { caretForwardCircleOutline, pauseCircleOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";



const EuzaPage: React.FC = () => {
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
            src:`/assets/audio/Ezan.m4a`,
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
              <h1 className="lesson" style={{fontFamily:"Roboto"} }>Euzubilla i bismilla</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic",fontFamily:"Roboto"} }>"Poslan sam da bih upotpunio moral."</h3>
              <p className="hadeeth-reference">Sahih Muslim vol. 2</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          <IonItem className="lesson-note">
            <IonText>
              <h2 className="lesson-note" style={{fontFamily:"Roboto"} }>
                U svim poslovima Bismillom spominjemo Boga i molimo Ga da nam
                dadne snagu i razum da započeti posao sretno završimo, jer naš
                život, snaga i razum zavise od Njega, Allaha dželle šānuhu.
              </h2>
            </IonText>
          </IonItem>
        </div>
        <IonItem
          key="1"
          detail={false}
          color="light"
          lines="none"
          style={{ marginLeft: "15px", marginRight: "15px" }}
          className="ion-text-center"
        >
          <IonGrid >
            <IonRow className="border-bottom">
              <IonCol size="12">
                <IonChip color="purple">
                  <IonText>Arapski</IonText>
                 
                </IonChip>
                <IonButton
                  className="no-shadow ion-float-right"
                  onClick={() => {toglePlayPause()}}
                  fill="clear"
                  color="light"
                  size="default"
                  style={{position:"fixed"}}
                >
                  <IonIcon
                    slot="icon-only"
                    icon={isPlaying ? pauseCircleOutline: caretForwardCircleOutline}
                    color="purple"
                  />
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow className="ayah">
              <IonCol size="12">
                <IonNote style={{fontFamily:"Roboto"} }>
                  Euzu billahi mineššejta-nirradžim Bismillahir-rahmanir-rahim.
                </IonNote>
              </IonCol>
            </IonRow>
            <IonRow className="ayah">
              <IonCol size="12">
                <IonChip color="purple">
                  <IonLabel>Bosanski</IonLabel>
                </IonChip>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonNote style={{fontFamily:"Roboto"} }>
                  Euzu billahi mineššejta-nirradžim Bismillahir-rahmanir-rahim.
                </IonNote>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default EuzaPage;
