import React, { useState } from 'react';
import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonModal, IonNote, IonPage, IonRow, useIonViewWillEnter, } from '@ionic/react';

import { timeService } from '../services/TimeService';

const HomePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const[period,setPeriod]=useState("");
  

useIonViewWillEnter(() => {
  setPeriod("bg-image-"+timeService.getCurrentPeriod());
  });

  return (
    <IonPage>
      <IonContent className={period}>
        <div className="center">
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
                    "Allah ce uciniti put do Dzenneta lakim svakome ko trazi
                    znanje"
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
                <IonCard color="burgundy" routerLink={`/BookOneMainPage`}>
                  <IonCardHeader>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonCardTitle>Card Title</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once
                    in awhile, and climb a mountain or spend a week in the
                    woods. Wash your spirit clean.
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard color="purple" routerLink={`/BookTwoMainPage`}>
                  <IonCardHeader>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonCardTitle>Card Title</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once
                    in awhile, and climb a mountain or spend a week in the
                    woods. Wash your spirit clean.
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
