import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonPage, IonSegment, IonSegmentButton, IonText, IonToolbar, useIonViewWillLeave } from "@ionic/react";
import { Howl } from "howler";
import { pauseCircleOutline, volumeHighOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";

type TranslationSection = "arabic" | "translation";

const IqamahPage: React.FC = () => {
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
            src:`/assets/audio/lessons/Ikamet.m4a`,
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
              <IonBackButton color="burgundy" defaultHref="/BookOneMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard className="lesson-header ion-padding ion-text-center" color="burgundy">
        <IonCardTitle>
              <h1 className="lesson" >Ikamet</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>"Hvaljen je Allah, stvoritelj nebesa i Zemlje"</h3>
              <p className="quote-reference">Kur'an 35:1</p>
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
                    color="burgundy"
                  />
                </IonButton>
                <IonText>
                    <h2 className="lesson-note">Prije nijjeta farz namaza muškarci uče Ikamet.</h2>
                    <h2 className="lesson-note">Mujezin uči Ikamet kada klanjamo namaz u džematu.Ikamet se uči malo brže od ezana.</h2>
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
            <IonSegmentButton value={"arabic" as TranslationSection} className="burgundy">
              
                Arapski
               
            </IonSegmentButton>
            <IonSegmentButton value={"translation" as TranslationSection} className="burgundy">
              
                Bosanski
              
            </IonSegmentButton>
          </IonSegment>
        </div>
        <div className="ion-padding" hidden={currentTranslationSection!=="arabic"}>
        <IonItem className="lesson-note" lines="none">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Allahu ekber, Allahu ekber</p>
                    <p className="lesson-note">Allahu ekber, Allahu ekber</p>
                    <p className="lesson-note">Ešhedu en la illahe illellah</p>
                    <p className="lesson-note">Ešhedu en la illahe illellah</p>
                    <p className="lesson-note">Ešhedu enne Muhammeden resulullah</p>
                    <p className="lesson-note">Ešhedu enne Muhammeden resulullah</p>
                    <p className="lesson-note">Hajje ales-salah, Hajje ales-salah.</p>
                    <p className="lesson-note">Hajje alel-felah, Hajje alel-felah.</p>
                    <p className="lesson-note">Kad kametis-salatu, kad kametis-salah.</p>
                    <p className="lesson-note">Allahu ekber, Allahu ekber.</p>
                    <p className="lesson-note">La illahe illellah.</p>
                                        
                </IonText>
            </IonItem>
        </div>
        <div className="ion-padding" hidden={currentTranslationSection!=="translation"}>
        <IonItem className="lesson-note" lines="none">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Allah je najveći,Allah je najveći</p>
                    <p className="lesson-note">Allah je najveći,Allah je najveći</p>
                    <p className="lesson-note">Svjedočim da nema boga osim Allaha</p>
                    <p className="lesson-note">Svjedočim da nema boga osim Allaha</p>
                    <p className="lesson-note">Svjedočim da je Muhammed Allahov poslanik</p>
                    <p className="lesson-note">Svjedočim da je Muhammed Allahov poslanik</p>
                    <p className="lesson-note">Dodjite na namaz!Dodjite na namaz!</p>
                    <p className="lesson-note">Dodjite na spas!Dodjite na spas!</p>
                    <p className="lesson-note">Namaz već počinje!Namaz već počinje!</p>
                    <p className="lesson-note">Allah je najveći,Allah je najveći</p>
                    <p className="lesson-note">Nema boga osim Allaha</p>
                                        
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default IqamahPage;