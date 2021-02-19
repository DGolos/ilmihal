import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const ParentsObligationsPage: React.FC = () => {

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
        <IonCard className="lesson-header ion-padding ion-text-center" color="brown">
        <IonCardTitle>
              <h1 className="lesson" >Dužnosti roditelja</h1>
             
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
                    <h2 className="lesson-note">Dužnosti roditelja prema djeci su:</h2>
                    <h2 className="lesson-note">Brinuti se za zdravlje i život svoje djece.</h2>
                    <h2 className="lesson-note">Da im daju lijepo islamsko ime.</h2>
                    <h2 className="lesson-note">Brinuti se da ih dobro u vjeri odgoje,</h2>
                    <h2 className="lesson-note">Brinuti se da ih upute na nauku ili zanat i osposobe za život.</h2>
                    
                </IonText>
            </IonItem>
        </div>
        </IonContent>
      </IonPage>
    );
}

export default ParentsObligationsPage;