import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const OurFaithPage: React.FC = () => {

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
        <IonCard className="lesson-header ion-padding ion-text-center" color="burgundy">
        <IonCardTitle>
              <h1 className="lesson" >Naša vjera</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>"Allahu je prava vjera jedino islam."</h3>
              <p className="quote-reference">Kur'an 3:19</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note" lines="none">
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