import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonItem, IonPage, IonSegment, IonSegmentButton, IonText, IonToolbar } from "@ionic/react";
import React, { useState } from "react";

type TranslationSection = "arabic" | "translation";

const SurahFatihaPage: React.FC = () => {
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
                
                <IonCardSubtitle><h1 className="lesson-header">Sura El-Fatiha</h1></IonCardSubtitle>
            </IonCardHeader>
        
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note">
                <IonText>
                    <h2 className="lesson-note">Fatiha je prva kur&#39;anska sura. Često se naziva Elham. Sastoji se od sedam ajeta, u kojima se
iskazuje molba Allahu, dž.š., za upućivanje na Pravi put i zaštita od zla.</h2>
                    
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
                    <p className="lesson-note">El-hamdu-lillahi Rabbil-'alemin</p>
                    <p className="lesson-note">Errahmanir-rahim</p>
                    <p className="lesson-note">Maliki jev-middin</p>
                    <p className="lesson-note">Ijjake na'budu ve ijjake nestein</p>
                    <p className="lesson-note">Ihdi-nessiratal mustekim</p>
                    <p className="lesson-note">Siratallezine en'amte 'alejhim</p>
                    <p className="lesson-note">Gajril magubi'alejhim ve leddallin</p>
                    <p className="lesson-note">Amin!</p>
                    
                </IonText>
            </IonItem>
        </div>
        <div className="ion-padding" hidden={currentTranslationSection!=="translation"}>
        <IonItem className="lesson-note" lines="none">
                <IonText className="ion-text-center">
                    <p className="lesson-note">Hvala Allahu Gosposdaru svjetova</p>
                    <p className="lesson-note">Svemu Dobročinitelja, Milostivom</p>
                    <p className="lesson-note">Vladaru Sudnjeg dana</p>
                    <p className="lesson-note">Samo Tebe obožavamo, i samo od Tebe pomoć molimo</p>
                    <p className="lesson-note">Uputi nas na pravi put</p>
                    <p className="lesson-note">Na put onih kojima si darovao Svoje blagodati</p>
                    <p className="lesson-note">A ne na put onih na koje si se rasrdio i koji su zalutali</p>
                    <p className="lesson-note">Amin!</p>
                    
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default SurahFatihaPage;