import React from "react";
import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";

const OptionsPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="bg-image-purple" fullscreen>
        <div className="ion-padding">
          <IonCard className="lesson-header" color="dark-brown">
            <IonItem className="dark-brown">
              <IonLabel>Pokémon Yellow</IonLabel>
            </IonItem>
            <IonItem className="dark-brown">
              <IonLabel>Mega Man X</IonLabel>
            </IonItem>
            <IonItem className="dark-brown">
              <IonLabel>The Legend of Zelda</IonLabel>
            </IonItem>
            <IonItem className="dark-brown">
              <IonLabel>Pac-Man</IonLabel>
            </IonItem>
            <IonItem className="dark-brown">
              <IonLabel>Super Mario World</IonLabel>
            </IonItem>
          </IonCard>
        </div>
        <div className="ion-padding">
          <IonItem lines="none" color="burgundy" >
            <IonGrid>
              <IonRow>
                <IonCol size="12">
                  <IonText style={{fontSize:"20px",fontWeight:"bold"}}>
                    Budite u vezi
                  </IonText>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="4"></IonCol>
                <IonCol size="4"></IonCol>
                <IonCol size="4"></IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default OptionsPage;
