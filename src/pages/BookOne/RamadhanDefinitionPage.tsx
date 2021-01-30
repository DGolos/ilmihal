import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const RamadhanDefinitionPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/IslamMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard className="lesson-header ion-padding" color="burgundy">
            <IonCardHeader className="ion-text-center">
              <IonCardSubtitle>
                <h1 className="lesson-header">Ramazan</h1>
              </IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <div className="ion-padding">
            <IonItem className="lesson-note">
              <IonText>
                <h2 className="lesson-note">
                Ramazanski post znači uz ramazan se ustegnuti od jela, pića, pušenja i spolnog uživanja od prije zore do zalaska sunca, u svrhu odanosti Allahu dž.š.
                </h2>
              </IonText>
            </IonItem>
            <IonItem className="lesson-note">
              <IonText>
                <h2 className="lesson-note">
                Nijjet za početak posta glasi: NEVEJTU EN ESUME LILLAHI TE&#39;ALA MIN
ŠEHRI RAMADANE, što u prijevodu znači: Odlučih, Allaha radi, postiti
ramazanski post.
                </h2>
              </IonText>
            </IonItem>
            <IonItem className="lesson-note">
              <IonText>
                <h2 className="lesson-note">
                Dova za iftar (prekid posta) glasi: ALLAHUMME INNI LEKE SUMTU VE BIHE
(BIKE) AMNETU (AMENTU) VE ALEJKE TEVEKELTU VE BI RIZKIKE
EFTARTU, što u prijevodu znači: Allahu moj, u ime Tvoje sam postio/la, Tebe
vjerujem, na Tebe se oslanjam i Tvojom se hranom iftarim.
                </h2>
              </IonText>
            </IonItem>
          </div>
         
        </IonContent>
      </IonPage>
    );
}

export default RamadhanDefinitionPage;