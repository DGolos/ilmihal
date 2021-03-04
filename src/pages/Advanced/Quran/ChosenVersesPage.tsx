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
            <IonBackButton color="light"/>
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
              routerLink={`/RubiesAyahPage`}
              lines="none"
              detail={false}
              className="welcome"
              color="burgundy"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/ruby.svg"
                  
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
              <h4> {translationService.getLabel('label-ruby-header')}</h4>
              <p> {translationService.getLabel('label-ruby-description')}</p>
              </IonText>
            </IonItem>
            <IonItem
              key="2"
              routerLink={`/PearlsAyahPage`}
              lines="none"
              detail={false}
              className="welcome"
              color="purple"
            >
              <IonAvatar className="white lesson">
                <img
                  src="/assets/images/pearls.svg"
                  
                />
              </IonAvatar>
              <IonText className="ion-padding-start" color="light">
              <h4> {translationService.getLabel('label-pearls-header')}</h4>
              <p> {translationService.getLabel('label-pearls-description')}</p>
              </IonText>
            </IonItem>
            
            
            
            
            
          </IonList>
      </IonContent>
    </IonPage>
  );
};
