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
  
  export const MessangersSupplicationsPage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton color="purple" defaultHref="/tabs/SupplicationMainPage" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="bg-image-standard" fullscreen>
          <IonCard
            className="lesson-header ion-padding ion-text-center"
            color="purple"
          >
            <IonCardTitle>
              <h1 className="lesson">
                {translationService.getLabel("label-book3-lesson17-title")}
              </h1>
            </IonCardTitle>
            <IonCardContent>
              <IonCardSubtitle>
                <h3 style={{ fontStyle: "italic" }}>
                  {translationService.getLabel("label-book3-lesson17-quote")}
                </h3>
                <p className="quote-reference">
                  {translationService.getLabel(
                    "label-book3-lesson17-quote-reference"
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
                  "label-book3-lesson17_section1-paragraph1"
                )}
                </h2>
                <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson17_section1-paragraph2"
                )}
                </h2>
              </IonText>
            </IonItem>
            <IonItem detail={false} color="light" lines="none">
              <IonText>
              <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson17_section2-paragraph1"
                )}
                </h2>
                <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson17_section2-paragraph2"
                )}
                </h2>
              </IonText>
            </IonItem>
            <IonItem detail={false} color="light" lines="none">
              <IonText>
              <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson17_section3-paragraph1"
                )}
                </h2>
                <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson17_section3-paragraph2"
                )}
                </h2>
              </IonText>
            </IonItem>
            <IonItem detail={false} color="light" lines="none">
              <IonText>
              <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson17_section4-paragraph1"
                )}
                </h2>
                <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson17_section4-paragraph2"
                )}
                </h2>
              </IonText>
            </IonItem>
            <IonItem detail={false} color="light" lines="none">
              <IonText>
              <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson17_section5-paragraph1"
                )}
                </h2>
                <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson17_section5-paragraph2"
                )}
                </h2>
              </IonText>
            </IonItem>
            <IonItem detail={false} color="light" lines="none">
              <IonText>
              <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson17_section6-paragraph1"
                )}
                </h2>
                <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson17_section6-paragraph2"
                )}
                </h2>
              </IonText>
            </IonItem>
            <IonItem detail={false} color="light" lines="none">
              <IonText>
              <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson17_section7-paragraph1"
                )}
                </h2>
                <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson17_section7-paragraph2"
                )}
                </h2>
              </IonText>
            </IonItem>
            <IonItem detail={false} color="light" lines="none">
              <IonText>
              <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson17_section8-paragraph1"
                )}
                </h2>
                <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book3-lesson17_section8-paragraph2"
                )}
                </h2>
              </IonText>
            </IonItem>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  