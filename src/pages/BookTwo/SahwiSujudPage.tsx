import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const SahwiSujudPage: React.FC = () => {

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
              <h1 className="lesson" >Sehvi sedžda</h1>
             
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
                <h2 className="lesson-note">Kad čovjek nehotice u namazu učini nešto drukčije nego što zahtijeva propis (izostavi Fatihu,
suru ili prvo sjedenje), treba da izvrši dvije sedžde, što zovemo sehv-i sedždom.</h2>
                <h2 className="lesson-note">Poslije predaje selama na desnu stranu učine se dvije sedžde, a onda se ponovo prouči
Ettehijjatu, salavati i dove, pa se preda selam.</h2>
                    
                    
                </IonText>
            </IonItem>
            
        </div>
        </IonContent>
      </IonPage>
    );
}

export default SahwiSujudPage;