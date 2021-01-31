import { IonAvatar, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonItem, IonList, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const PrayerDefinitionPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="dark-brown" defaultHref="/IslamMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
        <IonCard className="lesson-header ion-padding" color="dark-brown">
            <IonCardHeader className="ion-text-center">
              <IonCardSubtitle>
                <h1 className="lesson-header">Namaz</h1>
              </IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <div className="ion-padding">
            <IonItem className="lesson-note">
              <IonText>
                <h2 className="lesson-note">
                Namaz je muslimanska obaveza koja se izvršava svaki dan klanjanjem i učenjem na propisani način. Svaki dan treba klanjati pet namaza u vrijeme odredjeno za namaz.
                </h2>
              </IonText>
            </IonItem>
          </div>
          
            <IonCard color="light" className="prayer" routerLink={`/FajrPrayerPage`}>
              <IonCardContent>
                <IonRow className="ion-align-items-center">
                  <IonCol size="3">
                    <div>
                      <img src='assets/images/fajr.jpg'/>
                    </div>
                  </IonCol>
                  <IonCol size="9" className="ion-padding">
                    <IonCardTitle>Sabah</IonCardTitle>
                    <IonCardSubtitle>2 rekata suneta</IonCardSubtitle>
                    <IonCardSubtitle>2 rekata farza</IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
            <IonCard color="light" className="prayer" routerLink={`/DhuhrPrayerPage`}>
              <IonCardContent>
                <IonRow className="ion-align-items-center">
                  <IonCol size="3">
                    <div>
                      <img src='assets/images/fajr.jpg'/>
                    </div>
                  </IonCol>
                  <IonCol size="9" className="ion-padding">
                    <IonCardTitle>Podne</IonCardTitle>
                    <IonCardSubtitle>4 rekata suneta</IonCardSubtitle>
                    <IonCardSubtitle>4 rekata farza</IonCardSubtitle>
                    <IonCardSubtitle>2 rekata sunsuneta</IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
            <IonCard color="light" className="prayer" routerLink={`/AsrPrayerPage`}>
              <IonCardContent style={{ marginTop: "0px", marginBottom: "6px" }}>
                <IonRow className="ion-align-items-center">
                  <IonCol size="3">
                    <div>
                      <img src='assets/images/fajr.jpg'/>
                    </div>
                  </IonCol>
                  <IonCol size="9" className="ion-padding">
                    <IonCardTitle>Ikindija</IonCardTitle>
                    <IonCardSubtitle>4 rekata suneta</IonCardSubtitle>
                    <IonCardSubtitle>4 rekata farza</IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
            <IonCard color="light" className="prayer" routerLink={`/MaghribPrayerPage`}>
              <IonCardContent>
                <IonRow className="ion-align-items-center">
                  <IonCol size="3">
                    <div>
                      <img src='assets/images/maghrib.jpg'/>
                    </div>
                  </IonCol>
                  <IonCol size="9" className="ion-padding">
                    <IonCardTitle>Akšam</IonCardTitle>
                    <IonCardSubtitle>3 rekata farza</IonCardSubtitle>
                    <IonCardSubtitle>2 rekata suneta</IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
            <IonCard color="light" className="prayer" routerLink={`/IshaPrayerPage`}>
              <IonCardContent>
                <IonRow className="ion-align-items-center">
                  <IonCol size="3">
                    <div>
                      <img src='assets/images/isha.jpg'/>
                    </div>
                  </IonCol>
                  <IonCol size="9" className="ion-padding">
                    <IonCardTitle>Jacija</IonCardTitle>
                    <IonCardSubtitle>4 rekata suneta</IonCardSubtitle>
                    <IonCardSubtitle>4 rekata farza</IonCardSubtitle>
                    <IonCardSubtitle>2 rekata sunsuneta</IonCardSubtitle>
                    <IonCardSubtitle>3 rekata vitra</IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
          
        </IonContent>
      </IonPage>
    );
}

export default PrayerDefinitionPage;