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
              <IonItem
                    key="1"
                    routerLink={`/BookOneMainPage`}
                    lines="none"
                    detail={false}
                    className="lesson"
                  >
                    <IonAvatar slot="start" className="lesson burgundy">
                      <IonLabel style={{marginTop:5}}>
                        <h4>1</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Prvi dio</h4>
                    </IonNote>
                  </IonItem>
              </IonCol>
              <IonCol size="6">
              <IonItem
                    key="2"
                    routerLink={`/BookTwoMainPage`}
                    lines="none"
                    detail={false}
                    color="light"
                    className="lesson"
                  >
                    <IonAvatar slot="start" className="lesson purple">
                      <IonLabel style={{marginTop:5}}>
                        <h4>2</h4>
                      </IonLabel>
                    </IonAvatar>
                    <IonNote className="ion-padding-start ion-text-center">
                      <h4>Drugi dio</h4>
                    </IonNote>
                  </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
