import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import React from "react";

const ImanMainPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="dark-brown" defaultHref="/BookOneMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen></IonContent>
      </IonPage>
    );
}

export default ImanMainPage;