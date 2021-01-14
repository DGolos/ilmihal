import { IonAvatar, IonBackButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRow, IonToolbar } from "@ionic/react"
import React from "react"
import './PrayerTimesPage.css';

const PrayerTimesPage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader className="ion-no-border standard">
           <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="light" defaultHref="/MainCategoryPage" />
            </IonButtons>
          </IonToolbar> 
        </IonHeader>
        <IonContent className="bg-image-isha" fullscreen>
          <IonItem className="prayer-header">
            <IonGrid>
              <IonRow className="ion-no-padding">
                <IonCol size="12" className="ion-no-padding">
                  <h2 className="prayer-header ion-no-padding ion-text-center">
                    Slijedeci namaz
                  </h2>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" className="ion-no-padding">
                  <h6 className="welcome ion-no-padding ion-text-center">
                    Jacija
                  </h6>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" className="ion-no-padding">
                  <h2 className="prayer-header ion-no-padding ion-text-center">
                    za 52 minute
                  </h2>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>

          <IonList className="prayer-details">
            <IonItem>
              <IonLabel slot="start">
                <h1 slot="start" className="prayer-details">
                  Danasnja vaktija
                </h1>
              </IonLabel>
            </IonItem>
            
            <IonItem>
              <IonLabel slot="start">
                <h2 className="prayer-details">Sabah</h2>
              </IonLabel>
              <IonLabel slot="end">
                <h2 className="prayer-details">05:22</h2>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel slot="start">
                <h2 className="prayer-details">Podne</h2>
              </IonLabel>
              <IonLabel slot="end">
                <h2 className="prayer-details">12:06</h2>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel slot="start">
                <h2 className="prayer-details">Ikindija</h2>
              </IonLabel>
              <IonLabel slot="end">
                <h2 className="prayer-details">14:19</h2>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel slot="start">
                <h2 className="prayer-details">Aksam</h2>
              </IonLabel>
              <IonLabel slot="end">
                <h2 className="prayer-details">16:45</h2>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel slot="start">
                <h2 className="prayer-details">Jacija</h2>
              </IonLabel>
              <IonLabel slot="end">
                <h2 className="prayer-details">18:15</h2>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
}

export default PrayerTimesPage;