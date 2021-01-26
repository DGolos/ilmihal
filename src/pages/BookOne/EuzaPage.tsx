import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const EuzaPage: React.FC = () => {

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
                
                <IonCardSubtitle><h1 className="lesson-header">Euzubilla i bismilla</h1></IonCardSubtitle>
            </IonCardHeader>
        
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note">
                <IonText>
                    <h2 className="lesson-note">U svim poslovima Bismillom spominjemo Boga i molimo Ga da nam dadne snagu i
razum da započeti posao sretno završimo, jer naš život, snaga i razum zavise od Njega,
Allaha dželle šānuhu.</h2>
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
              Euzu billahi mineššejta-nirradžim Bismillahir-rahmanir-rahim.
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
              Euzu billahi mineššejta-nirradžim Bismillahir-rahmanir-rahim.
              </IonNote>
            </IonCol>
          </IonRow>
        </IonGrid>
        </IonItem>
        </IonContent>
      </IonPage>
    );
}

export default EuzaPage;