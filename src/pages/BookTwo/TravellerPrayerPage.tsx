import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const TravellerPrayerPage: React.FC = () => {

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
              <h1 className="lesson" >Namaz putnika</h1>
             
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
                <h2 className="lesson-note"><b>Musafir</b> (putnik) je osoba koja pođe na put iz svog mjesta stanovanja u drugo mjesto
udaljeno najmanje 18 sati pješačenja (90 kilometara puta). <b>Mukim</b> je osoba „kod kuće”.
Osoba koja otputuje u mjesto bliže od 18 časova pješačenja od mjesta stanovanja smatra se
mukimom, a ne musafirom.</h2>
                <h2 className="lesson-note">Musafir ima pravo i obavezu da farz-namaze od četiri rekata, tj. podnevski, ikindijski i
jacijski farz, skrati na dva rekata. Sabahski i akšamski farz kao i vitr-namaz ne mogu se
skraćivati. Sunnete i sunsunnete musafir će posve izostaviti osim ako naročito za to bude
imao dovoljno vremena. Ako ih odlući klanjali, neće ih skraćivati.</h2>
                    
                    
                </IonText>
            </IonItem>
            
        </div>
        </IonContent>
      </IonPage>
    );
}

export default TravellerPrayerPage;