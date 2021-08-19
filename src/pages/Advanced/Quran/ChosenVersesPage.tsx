import {
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { translationService } from "../../../services/TranslationService";

export const ChosenVersesPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="light" defaultHref="/tabs/MainCategoryPage"/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-brown" fullscreen>
        <IonCard
          className="lesson-header ion-padding transparent ion-text-center"
          color="dark-brown"
        >
          <IonCardTitle>
            <h1 className="lesson">{translationService.getLabel('label-chosen-verses-header')}</h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
              {translationService.getLabel('label-chosen-verses-quote')}
              </h3>
              <p className="quote-reference">{translationService.getLabel('label-chosen-verses-quote-reference')}</p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        
        <IonList className="ion-padding transparent">
          <IonItem
              key="1"
              routerLink={`/tabs/RubiesAyahPage`}
              lines="none"
              detail={false}
              className="welcome"
              color="burgundy"
            >
             
              <IonText className="ion-text-center" color="light">
              <h4 style={{fontSize:"22px",fontWeight:"bold"}}> {translationService.getLabel('label-ruby-header')}</h4>
              <p style={{fontSize:"16px"}}> {translationService.getLabel('label-ruby-description')}</p>
              </IonText>
            </IonItem>
            <IonItem
              key="2"
              routerLink={`/tabs/PearlsAyahPage`}
              lines="none"
              detail={false}
              className="welcome"
              color="purple"
            >
             <IonText className="ion-text-center" color="light">
              <h4 style={{fontSize:"22px",fontWeight:"bold"}}> {translationService.getLabel('label-pearls-header')}</h4>
              <p style={{fontSize:"16px"}}> {translationService.getLabel('label-pearls-description')}</p>
              </IonText>
            </IonItem>
            
            
            
            
            
          </IonList>
      </IonContent>
    </IonPage>
  );
};
