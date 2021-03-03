import React from "react";
import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
  IonText  
} from "@ionic/react";


const ChooseLanguagePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="razimic" fullscreen>
        <div className="center">
          <IonCard color="purple" className="prayer">
            <IonGrid>
              <IonRow>
                <IonCol size="4">
                  <IonImg src="./assets/images/ba.png" />
                </IonCol>
                <IonCol size="8">
                  <IonText>
                    <h1>Bosanski</h1>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          <IonCard color="burgundy" className="prayer">
            <IonGrid>
              <IonRow>
                <IonCol size="4">
                  <IonImg src="./assets/images/no.png" />
                </IonCol>
                <IonCol size="8">
                  <IonText>
                    <h1>Norsk</h1>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>

          <IonButton
            className="ion-padding"
            expand="full"
            color="dark-brown"
          ></IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ChooseLanguagePage;
