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
import React, { useRef, useState } from "react";
import { translationService } from "../../services/TranslationService";

const RepetancePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="dark-brown" defaultHref="/DhikrMainPage" />
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
              {translationService.getLabel("label-book3-lesson21-title")}
            </h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel("label-book3-lesson21-quote")}
              </h3>
              <p className="quote-reference">
                {translationService.getLabel(
                  "label-book3-lesson21-quote-reference"
                )}
              </p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          <IonItem detail={false} color="light" lines="none">
            <IonText>
              <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson21_section1-paragraph1"
                )}
              </h2>
              <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson21_section1-paragraph2"
                )}
              </h2>
            </IonText>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RepetancePage;
