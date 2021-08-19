import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { translationService } from "../../services/TranslationService";

export const CompanionsPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="bg-image-standard" fullscreen>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/tabs/MainCategoryPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color="razimic"
        >
          <IonCardTitle>
            <h1 className="lesson">
              {translationService.getLabel("label-book3-lesson3-title")}
            </h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel("label-book3-lesson3-quote")}
              </h3>
              <p className="quote-reference">
                {translationService.getLabel(
                  "label-book3-lesson3-quote-reference"
                )}
              </p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
        <IonItem lines="none" color="purple"  routerLink={`/tabs/CaliphsPage`} key="1">
              <IonText className="ion-text-center">
                <h3>
                {translationService.getLabel('label-book3-lesson4-title')}
                </h3>
                <h2 className="lesson-note">
                {translationService.getLabel('label-book3-lesson4-title-description')}

                </h2>
              </IonText>
            </IonItem>
            <IonItem lines="none" color="burgundy" routerLink={`/tabs/ChosenCompanionsPage`} key="2">
              <IonText className="ion-text-center">
                <h2>
                {translationService.getLabel('label-book3-lesson5-title')}
                </h2>
                <h2 className="lesson-note">
                {translationService.getLabel('label-book3-lesson5-title-description')}

                </h2>
              </IonText>
            </IonItem>
            <IonItem lines="none" color="dark-brown" routerLink={`/tabs/WomensPage`} key="3">
              <IonText className="ion-text-center">
                <h2>
                {translationService.getLabel('label-book3-lesson6-title')}
                </h2>
                <h2 className="lesson-note">
                {translationService.getLabel('label-book3-lesson6-title-description')}

                </h2>
              </IonText>
            </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};
