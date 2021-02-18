import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const WashingPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/BookTwoMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard className="lesson-header ion-padding ion-text-center" color="burgundy">
        <IonCardTitle>
              <h1 className="lesson" >Gusul</h1>
             
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
                <h2 className="lesson-note">Gusul je posebno vjersko kupanje koje je propisano u određenim prilikama spolno zrelim
muškarcima i ženama.</h2>
                <h2 className="lesson-note">Gusul se uzima na ovaj način:</h2>
                <h2 className="lesson-note">-usta i grlo vodom dobro isplakati;</h2>
                <h2 className="lesson-note">-nos izaprati;</h2>
                <h2 className="lesson-note">-zatim cijelo tijelo oprati da nigdje suho ne ostane ni koliko se vrhom igle može
dotaći</h2>
                    
                    
                </IonText>
            </IonItem>
            
        </div>
        </IonContent>
      </IonPage>
    );
}

export default WashingPage;