import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const SelamPage: React.FC = () => {

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
                
                <IonCardSubtitle><h1 className="lesson-header">Selam</h1></IonCardSubtitle>
            </IonCardHeader>
        
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