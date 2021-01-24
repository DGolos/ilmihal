import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const ShahadahPage: React.FC = () => {

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
        <IonCard className="lesson-header ion-padding" color="burgundy" >
            <IonCardHeader className="ion-text-center">
                
                <IonCardSubtitle><h1 className="lesson-header">Kelimei-Šehadet</h1></IonCardSubtitle>
            </IonCardHeader>
        
        </IonCard>
        <div className="ion-padding">
            <IonItem className="lesson-note">
                <IonText>
                    <h2 className="lesson-note">Svoju pripadnost islamu iskazujemo kelimei-šehadetom.</h2>
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
                    <IonChip color="burgundy">
                        <IonLabel>Arapski</IonLabel>
                    </IonChip>
                </IonCol>
            </IonRow>
            <IonRow className="ayah">
            <IonCol size="12">
              <IonNote>
              EŠ-HEDU EN LA-ILAHE ILLELLAH VE EŠ-HEDU ENNE
MUHAMMEDEN ABDUHU VE RESULUHU.
              </IonNote>
            </IonCol>
          </IonRow>
          <IonRow className="ayah">
                <IonCol size="12">
                    <IonChip color="burgundy">
                        <IonLabel>Bosanski</IonLabel>
                    </IonChip>
                </IonCol>
            </IonRow>
            <IonRow >
            <IonCol size="12">
              <IonNote>
              Ja srcem vjerujem i jezikom izjavljujem (da)
nema drugog Boga osim Allaha i da je Muhammed savršeno predan Allahu i Njegov
poslanik.
              </IonNote>
            </IonCol>
          </IonRow>
        </IonGrid>
        </IonItem>
        </IonContent>
      </IonPage>
    );
}

export default ShahadahPage;