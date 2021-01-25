import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonItem, IonPage, IonSegment, IonSegmentButton, IonText, IonToolbar } from "@ionic/react";
import React, { useState } from "react";

type TranslationSection = "arabic" | "translation";

const EttehijatuPage: React.FC = () => {
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
                
                <IonCardSubtitle><h1 className="lesson-header">Et-tehijjatu</h1></IonCardSubtitle>
            </IonCardHeader>
        
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note">
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
        <IonItem className="lesson-note">
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
        <IonItem className="lesson-note">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Allah je najveći,Allah je najveći</p>
                    <p className="lesson-note">Allah je najveći,Allah je najveći</p>
                    <p className="lesson-note">Svjedočim da nema boga osim Allaha</p>
                    <p className="lesson-note">Svjedočim da nema boga osim Allaha</p>
                    <p className="lesson-note">Svjedočim da je Muhammed Allahov poslanik</p>
                    
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default EttehijatuPage;