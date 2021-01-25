import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const OurFaithPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="brown" defaultHref="/BookOneMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard className="lesson-header ion-padding" color="brown" >
            <IonCardHeader className="ion-text-center">
                
                <IonCardSubtitle><h1 className="lesson-header">Naša vjera</h1></IonCardSubtitle>
            </IonCardHeader>
        
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note">
                <IonText>
                    <h2 className="lesson-note">Naša vjera se zove ISLAM.Mi smo po vjeri MUSLIMANI I MUSLIMANKE.</h2>
                    <h2 className="lesson-note">Islam je vjera koju je objavio Allah dželle šanuhu preko Svoga posljednjeg poslanika
Muhammeda cijelom čovječanstvu.</h2>
                    <h2 className="lesson-note">Islam vodi napretku i sreći čovječanstva, a njegovi propisi i načela važe za sve prostore,
vremena i prilike.</h2>
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default OurFaithPage;