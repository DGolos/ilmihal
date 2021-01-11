import React from 'react';
import { IonAvatar, IonCard, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonNote, IonPage, IonRow, } from '@ionic/react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="bg-image">
        <IonItem className="welcome">
          <IonGrid>
            <IonRow className="ion-no-padding">
              <IonCol size="12">
              
                <h6 className="welcome ion-no-padding ion-text-center">
                  Esselamu alejkum
                </h6>
              
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
              
            <h3 className="welcome ion-no-padding ion-text-center">
              "Allah ce uciniti put do Dzenneta lakim svakome ko trazi znanje"
            </h3>
          
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
              
            <h2 className="welcome ion-no-padding ion-text-center">
              -Resulallah Muhammed
            </h2>
         
              </IonCol>
            </IonRow>
          </IonGrid>
          
         
        </IonItem>
        <IonGrid>
          <IonRow>
            <IonCol size="6">

            </IonCol>
            <IonCol size="6">

            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
