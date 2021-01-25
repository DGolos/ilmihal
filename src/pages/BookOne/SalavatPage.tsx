import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonItem, IonPage, IonSegment, IonSegmentButton, IonText, IonToolbar } from "@ionic/react";
import React, { useState } from "react";

type TranslationSection = "arabic" | "translation";

const SalavatPage: React.FC = () => {
    const [currentTranslationSection, setCurrentTranslationSection] = useState<TranslationSection>("arabic");
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
        <IonCard className="lesson-header ion-padding" color="purple" >
            <IonCardHeader className="ion-text-center">
                
                <IonCardSubtitle><h1 className="lesson-header">Salavati</h1></IonCardSubtitle>
            </IonCardHeader>
        
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note">
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
        <IonItem className="lesson-note">
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
        <IonItem className="lesson-note">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Allah je najveći,Allah je najveći</p>
                    <p className="lesson-note">Allah je najveći,Allah je najveći</p>
                    <p className="lesson-note">Svjedočim da nema boga osim Allaha</p>
                    <p className="lesson-note">Svjedočim da nema boga osim Allaha</p>
                    <p className="lesson-note">Svjedočim da je Muhammed Allahov poslanik</p>
                    <p className="lesson-note">Svjedočim da je Muhammed Allahov poslanik</p>
                    
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default SalavatPage;