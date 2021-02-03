import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const SelamPage: React.FC = () => {

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
              <h1 className="lesson" >Selam</h1>
             
            </IonCardTitle>
          <IonCardContent>
            
            <IonCardSubtitle>
              <h3 style={{fontStyle:"italic"} }>“Mi smo naredili čovjeku da sluša roditelje svoje.”</h3>
              <p className="quote-reference">Kur'an Lukman,14</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note">
                <IonText>
                    <h2 className="lesson-note">Selam je islamski pozdrav.Selam je pozdrav obavezan za sve muslimane i muslimanke na cijelom svijetu pri
njihovim međusobnim susretima.</h2>
                    <h2 className="lesson-note">Islamski pozdrav glasi: <b>Es-selamu alejkum,</b>što znači: Mir i spas Božiji želim vama!</h2>
                    <h2 className="lesson-note">Odgovara se slijedećim riječima: <b>Ve alejkumus-selam,</b>Ve alejkumus-selam, što znači: I ja vama mir i
spas Božiji želim.</h2>
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default SelamPage;