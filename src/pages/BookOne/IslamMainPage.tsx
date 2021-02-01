import { IonAvatar, IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonItem, IonList, IonPage, IonText, IonToolbar } from "@ionic/react";
import React from "react";

const IslamMainPage: React.FC = () => {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton
                color="light"
                defaultHref="/BookOneMainPage"
              />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-burgundy-purple" fullscreen>
          <IonCard className="lesson-header transparent ion-padding">
            <IonCardHeader className="ion-text-center">
              <IonCardSubtitle>
                <h1 className="lesson-header">Islamski šarti</h1>
              </IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
          <div className="ion-padding">
            <IonItem className="lesson-note">
              <IonText>
                <h2 className="lesson-note">
                  Islamskim šartima nazivamo islamske dužnosti. Islam se zasniva
                  na pet glavnih dužnosti:
                </h2>
              </IonText>
            </IonItem>
          </div>
          <IonList className="ion-padding transparent" style={{marginTop:0}}>
            <IonItem
              key="1"
              routerLink={`/ShahadahPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/Shahadah.png"
                  
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
                <h3> Kelime-i Šehadet</h3>
              </IonText>
            </IonItem>
            <IonItem
              key="2"
              routerLink={`/PrayerDefinitionPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/muhammad.svg"
                 
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
                <h3> Namaz</h3>
              </IonText>
            </IonItem>
            <IonItem
              key="3"
              routerLink={`/RamadhanDefinitionPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/Fasting.png"
                 
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
                <h3> Ramazan</h3>
              </IonText>
            </IonItem>
            <IonItem
              key="4"
              routerLink={`/CharityDefinitionPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/Charity.png"
                  
                />
              </IonAvatar>
              <IonText className="ion-padding-start " color="light">
                <h3> Zekat</h3>
              </IonText>
            </IonItem>
            <IonItem
              key="5"
              routerLink={`/HajjDefinitionPage`}
              lines="none"
              detail={false}
              className="welcome"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/Kaba.png"
                  
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
                <h3> Hadž</h3>
              </IonText>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
}

export default IslamMainPage;