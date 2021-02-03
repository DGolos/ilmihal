import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonRow, IonText, IonToolbar, useIonViewWillLeave } from "@ionic/react";
import React,{ useRef, useState }  from "react";
import { Howl } from "howler";
import { pauseCircleOutline, volumeHighOutline } from "ionicons/icons";

const RabbiJessirPage: React.FC = () => {
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
            src:`/assets/audio/lessons/RabbiJessir.m4a`,
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
              <h1 className="lesson" >Rabbi jessir</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>“Vjera je iskren savjet.”</h3>
              <p className="quote-reference">Muslim</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note">
                <IonText>
                    <h2 className="lesson-note">Allah, dž.š., nam da je uspjeh i pomoć u svim našim poslovima.Učeći Rabbi jessir molimo Allaha, dž.š., da nam učini lahkim i korisnim svaki posao koji želimo
da radimo.</h2>
                </IonText>
            </IonItem>
        </div>
        <IonItem
        key="1"
        detail={false}
        color="light"
        lines="none"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <IonGrid className="ion-text-center">
            <IonRow className="ayah">
                <IonCol size="12">
                    <IonChip color="purple">
                        <IonLabel>Arapski</IonLabel>
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
                    icon={isPlaying ? pauseCircleOutline: volumeHighOutline}
                    color="purple"
                  />
                </IonButton>
                </IonCol>
            </IonRow>
            <IonRow className="ayah">
            <IonCol size="12">
              <IonNote>
              Rabbi jessir ve la tu'assir,rabbi temmim bil hajr-Amin.
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
            <IonRow >
            <IonCol size="12">
              <IonNote>
              Bože olakšaj, a ne otežaj, Bože daj da se završi s dobrim! Amin
              </IonNote>
            </IonCol>
          </IonRow>
        </IonGrid>
        </IonItem>
        </IonContent>
      </IonPage>
    );
}

export default RabbiJessirPage;