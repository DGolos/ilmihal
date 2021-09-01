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
  IonList,
  IonPage,
  IonText,
  IonToolbar
} from "@ionic/react";
import React, { useRef, useState } from "react";
import { translationService } from "../../services/TranslationService";

const SupplicationMainPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="dark-brown" defaultHref="/tabs/MainCategoryPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color="dark-brown"
        >
          <IonCardTitle>
            <h1 className="lesson">
              {translationService.getLabel("label-book3-lesson19-title")}
            </h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel("label-book3-lesson19-quote")}
              </h3>
              <p className="quote-reference">
                {translationService.getLabel(
                  "label-book3-lesson19-quote-reference"
                )}
              </p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>

        <div className="ion-padding">
          <IonList className="white">
            <IonItem
              className="lesson-note"
              lines="full"
              routerLink="/tabs/SupplicationValuePage"
            >
              <IonText slot="start">
                <h2 className="black" style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {translationService.getLabel("label-book3-lesson16-title")}
                </h2>
              </IonText>
            </IonItem>

            <IonItem
              className="lesson-note"
              lines="full"
              routerLink="/tabs/MessangersSupplicationsPage"
            >
              <IonText slot="start">
                <h2 className="black" style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {translationService.getLabel("label-book3-lesson17-title")}
                </h2>
              </IonText>
            </IonItem>
            <IonItem
              className="lesson-note"
              lines="full"
              routerLink="/tabs/DailySupplicationsPage"
            >
              <IonText slot="start">
                <h2 className="black" style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {translationService.getLabel("label-book3-lesson18-title")}
                </h2>
              </IonText>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SupplicationMainPage;
