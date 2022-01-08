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
  
  const ForgivnesPage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="burgundy" defaultHref="/tabs/DhikrMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
          <IonCard
            className="lesson-header ion-padding ion-text-center"
            color="burgundy"
          >
            <IonCardTitle>
              <h1 className="lesson">
                {translationService.getLabel("label-book3-lesson22-title")}
              </h1>
            </IonCardTitle>
            <IonCardContent>
              <IonCardSubtitle>
                <h3 style={{ fontStyle: "italic" }}>
                  {translationService.getLabel("label-book3-lesson22-quote")}
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
            <IonItem detail={false} className="lesson-note" lines="none">
              <IonText>
                <h2 className="lesson-note">
                  {translationService.getLabel(
                    "label-book3-lesson22_section1-paragraph1"
                  )}
                </h2>
                <h2 className="lesson-note">
                  {translationService.getLabel(
                    "label-book3-lesson22_section1-paragraph2"
                  )}
                </h2>
              </IonText>
            </IonItem>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default ForgivnesPage;
  