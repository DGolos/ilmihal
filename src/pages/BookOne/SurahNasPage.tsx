import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonItem, IonPage, IonSegment, IonSegmentButton, IonText, IonToolbar } from "@ionic/react";
import React, { useState } from "react";

type TranslationSection = "arabic" | "translation";

const SurahNasPage: React.FC = () => {
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
                
                <IonCardSubtitle><h1 className="lesson-header">Sura En-Nas</h1></IonCardSubtitle>
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
                    <p className="lesson-note">Kul euzu bi rabbin-nas</p>
                    <p className="lesson-note">Melikin-nas</p>
                    <p className="lesson-note">Ilahin-nas</p>
                    <p className="lesson-note">Min šerril-vesvasil-hannas</p>
                    <p className="lesson-note">Ellezi juvesvisu fi sudurin-nas</p>
                    <p className="lesson-note">Minel-džinneti ven-nas</p>
                                        
                </IonText>
            </IonItem>
        </div>
        <div className="ion-padding" hidden={currentTranslationSection!=="translation"}>
        <IonItem className="lesson-note" lines="none">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Reci:"Tražim zaštitu Gospodara ljudi</p>
                    <p className="lesson-note">Vladara ljudi</p>
                    <p className="lesson-note">Boga ljudi</p>
                    <p className="lesson-note">Od zla šejtana-napasnika</p>
                    <p className="lesson-note">Koji zle misli unosi u srca ljudi</p>
                    <p className="lesson-note">Od džinova i od ljudi!“</p>
                                        
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default SurahNasPage;