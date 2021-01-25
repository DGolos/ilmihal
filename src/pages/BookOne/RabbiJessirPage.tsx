import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const RabbiJessirPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="purple" defaultHref="/BookOneMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard className="lesson-header ion-padding" color="purple" >
            <IonCardHeader className="ion-text-center">
                
                <IonCardSubtitle><h1 className="lesson-header">Rabbi jessir</h1></IonCardSubtitle>
            </IonCardHeader>
        
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note">
                <IonText>
                    <h2 className="lesson-note">Allah, dž.š., nam da je uspjeh i pomoć u svim našim poslovima.Učeći Rabbi jessir molimo Allaha, dž.š., da nam učini lahkim i korisnim svaki posao koji želimo
da radimo.</h2>
                </IonText>
            </IonItem>
        </div>
        <IonItem
        key="1"
        detail={false}
        color="light"
        lines="none"
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <IonGrid className="ion-text-center">
            <IonRow className="ayah">
                <IonCol size="12">
                    <IonChip color="purple">
                        <IonLabel>Arapski</IonLabel>
                    </IonChip>
                </IonCol>
            </IonRow>
            <IonRow className="ayah">
            <IonCol size="12">
              <IonNote>
              Rabbi jessir ve la tu'assir,rabbi temmim bil hajr-Amin.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow className="ayah">
                <IonCol size="12">
                    <IonChip color="purple">
                        <IonLabel>Bosanski</IonLabel>
                    </IonChip>
                </IonCol>
            </IonRow>
            <IonRow >
            <IonCol size="12">
              <IonNote>
              Bože olakšaj, a ne otežaj, Bože daj da se završi s dobrim! Amin
              </IonNote>
            </IonCol>
          </IonRow>
        </IonGrid>
        </IonItem>
        </IonContent>
      </IonPage>
    );
}

export default RabbiJessirPage;