import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonItem, IonPage, IonSegment, IonSegmentButton, IonText, IonToolbar } from "@ionic/react";
import React, { useState } from "react";

type TranslationSection = "arabic" | "translation";

const AdhanPage: React.FC = () => {
    const [currentTranslationSection, setCurrentTranslationSection] = useState<TranslationSection>("arabic");
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
        <IonCard className="lesson-header ion-padding" color="burgundy" >
            <IonCardHeader className="ion-text-center">
                
                <IonCardSubtitle><h1 className="lesson-header">Ezan</h1></IonCardSubtitle>
            </IonCardHeader>
        
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note">
                <IonText>
                    <h2 className="lesson-note">Početak namaskog vremena oglašava se učenjem ezana.</h2>
                    <h2 className="lesson-note">Čovjek koji (uči) ezan zove se mujezin. Ezan uče samo muškarci. Ezan se uči na munari,a može i na nekom drugom mjestu. On se uči usporeno i glasno.</h2>
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
        <IonItem className="lesson-note">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Allahu ekber, Allahu ekber</p>
                    <p className="lesson-note">Allahu ekber, Allahu ekber</p>
                    <p className="lesson-note">Ešhedu en la illahe illellah</p>
                    <p className="lesson-note">Ešhedu en la illahe illellah</p>
                    <p className="lesson-note">Ešhedu enne Muhammeden resulullah</p>
                    <p className="lesson-note">Ešhedu enne Muhammeden resulullah</p>
                    <p className="lesson-note">Hajje ales-salah, Hajje ales-salah.</p>
                    <p className="lesson-note">Hajje alel-felah, Hajje alel-felah.</p>
                    <p className="lesson-note">Allahu ekber, Allahu ekber.</p>
                    <p className="lesson-note">La illahe illellah.</p>
                    <p className="lesson-note">U sabahskog ezana poslije »Hajje alel-felah« uči se:</p>
                    <p className="lesson-note">Essalatu hajrun minen-nevm</p>
                    <p className="lesson-note">Essalatu hajrun minen-nevm</p>
                    
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
                    <p className="lesson-note">Dodjite na namaz!Dodjite na namaz!</p>
                    <p className="lesson-note">Dodjite na spas!Dodjite na spas!</p>
                    <p className="lesson-note">Allah je najveći,Allah je najveći</p>
                    <p className="lesson-note">Nema boga osim Allaha</p>
                                        
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default AdhanPage;