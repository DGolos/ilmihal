import React from 'react';
import { IonAvatar, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="bg-image">
      <IonItem className="reciter">
              <IonGrid className="list-grid ">
                <IonRow className="ion-no-padding">
                  <IonCol size="3">
                    <IonAvatar>
                      <img
                        src="/assets/images/1.svg"
                        
                      />
                    </IonAvatar>
                  </IonCol>
                  <IonCol size="9">
                    <IonRow>
                      <h6 className="list-item-header">
                        <IonLabel>
                            Ilmihal 1
                        </IonLabel>
                      </h6>
                    </IonRow>

                    <IonRow>
                      <IonNote className="list-item-note">
                        Ovo je ilmihal jedan
                      </IonNote>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
        
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
