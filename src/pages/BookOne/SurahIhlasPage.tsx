import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonItem, IonPage, IonSegment, IonSegmentButton, IonText, IonToolbar } from "@ionic/react";
import React, { useState } from "react";

type TranslationSection = "arabic" | "translation";

const SurahIhlasPage: React.FC = () => {
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
                
                <IonCardSubtitle><h1 className="lesson-header">Sura El-Ihlas</h1></IonCardSubtitle>
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
        <IonItem className="lesson-note">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Kul Huvallahu ehad</p>
                    <p className="lesson-note">Allahus-Samed</p>
                    <p className="lesson-note">Lem jelid, ve lem juled</p>
                    <p className="lesson-note">Ve lem jekullehu kufuven ehad.</p>
                                                  
                </IonText>
            </IonItem>
        </div>
        <div className="ion-padding" hidden={currentTranslationSection!=="translation"}>
        <IonItem className="lesson-note">
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