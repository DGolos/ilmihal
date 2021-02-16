import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const PrayerRequirementsPage: React.FC = () => {

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
        <IonCard className="lesson-header ion-padding ion-text-center" color="dark-brown">
        <IonCardTitle>
              <h1 className="lesson" >Uvjeti za namaz</h1>
             
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
                <h2 className="lesson-note">Prije stupanja u namaz treba ispuniti šest uvjeta ili priprema za namaz. Uvjeti za namaz su:</h2>
                    <h2 className="lesson-note">1. da bude čisto tijelo, odijelo i mjesto gdje če se klanjati,</h2>
                    <h2 className="lesson-note">2. uzeti abdest ili, ako je potrebno, okupati se,</h2>
                    <h2 className="lesson-note">3. biti pristojno obučen,</h2>
                    <h2 className="lesson-note">4. na vrijeme klanjati,</h2>
                    <h2 className="lesson-note">5. okrenuti se prema Kibli,</h2>
                    <h2 className="lesson-note">6. odlučiti klanjati (nijjet).</h2>
                    
                    
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default PrayerRequirementsPage;