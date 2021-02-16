import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const OverduePrayerPage: React.FC = () => {

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
              <h1 className="lesson" >Propušteni namazi</h1>
             
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
                <h2 className="lesson-note">Ako izostavimo neki od pet propisanih (farz) namaza dužni smo ih naklanjati.</h2>
                <h2 className="lesson-note">Naklanjavanje se vrši isto kao i redovno klanjanje a u nijjetu se kaže koji se namaz
naklanjava, npr: sabahski, podnevski, ikindijski, akšamski ili jacijski farz, i.ovako se
zanijjeti: »Ja odlučih da naklanjam, u ime Allaha, sabahski farz-namaz koji mi je prošao.</h2>
                    
                    
                </IonText>
            </IonItem>
            
        </div>
        </IonContent>
      </IonPage>
    );
}

export default OverduePrayerPage;