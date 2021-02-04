import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const RelevationsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="burgundy" defaultHref="/ImanMainPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
      <IonCard className="lesson-header ion-padding ion-text-center" color="burgundy">
        <IonCardTitle>
              <h1 className="lesson" >Božiji kitabi</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>“Mi smo svakom narodu poslanika poslali.”</h3>
              <p className="quote-reference">Kur'an en-Nehl,36</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default RelevationsPage;
