import React from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';


const UnderConstructionPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border standard">
          <IonToolbar >
            <IonButtons slot="start">
              <IonBackButton color="burgundy"/>
            </IonButtons>
          </IonToolbar>
          
        </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
      <div className="ion-padding">
        <img style={{ height: 350 }} src="/assets/images/under-construction.jpg" alt=""/>
        
      </div>
      </IonContent>
    </IonPage>
  );
};

export default UnderConstructionPage;
