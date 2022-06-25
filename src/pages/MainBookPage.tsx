import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";
import React from "react";
import './MainBookPage.css';

const MainBookPage: React.FC = () => {
  

  return (
    <IonPage>
      <IonContent className="bg-image-standard">
       
      <IonCard className='bookCard' routerLink={`/tabs/BookOneMainPage`}>
        <IonCardHeader>
            
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
        </IonCard>

        <IonCard className='bookCard' routerLink={`/tabs/BookTwoMainPage`}>
        <IonCardHeader>
            
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
        </IonCard>

        
        
      </IonContent>
    </IonPage>
  );
};

export default MainBookPage;
