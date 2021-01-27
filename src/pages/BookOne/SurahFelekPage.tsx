import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonItem, IonPage, IonSegment, IonSegmentButton, IonText, IonToolbar } from "@ionic/react";
import React, { useState } from "react";

type TranslationSection = "arabic" | "translation";

const SurahFelekPage: React.FC = () => {
    const [currentTranslationSection, setCurrentTranslationSection] = useState<TranslationSection>("arabic");
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
        <IonCard className="lesson-header ion-padding" color="razimic" >
            <IonCardHeader className="ion-text-center">
                
                <IonCardSubtitle><h1 className="lesson-header">Sura El-Felek</h1></IonCardSubtitle>
            </IonCardHeader>
        
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
        <IonItem className="lesson-note" lines="none">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Kul euzu bi rabbil-felek</p>
                    <p className="lesson-note">Min šerri ma halek</p>
                    <p className="lesson-note">Ve min šerri gasikin iza vekab</p>
                    <p className="lesson-note">Ve min šerrin-neffasati fil-ukad</p>
                    <p className="lesson-note">Ve min šerri hasidin iza hased</p>
                                                            
                </IonText>
            </IonItem>
        </div>
        <div className="ion-padding" hidden={currentTranslationSection!=="translation"}>
        <IonItem className="lesson-note" lines="none">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Reci: “Utičem se Gospodaru svitanja</p>
                    <p className="lesson-note">Od zla onoga što On stvara</p>
                    <p className="lesson-note">I od zla mrkle noći kada razastre tmine</p>
                    <p className="lesson-note">I od zla smutljivca kada smutnju sije</p>
                    <p className="lesson-note">I od zla zavidljivca kad zavist ne krije!”</p>
                    
                                        
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default SurahFelekPage;