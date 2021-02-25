import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonNote,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { translationService } from "../../services/TranslationService";

const BeliefPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="burgundy" defaultHref="/ImanMainPage" />
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
              {translationService.getLabel("label-book1-lesson32-title")}
            </h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel("label-book1-lesson32-quote")}
              </h3>
              <p className="quote-reference">
                {translationService.getLabel("label-book1-quote-reference")}
              </p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
          <IonItem className="lesson-note" lines="none">
            <IonText>
              <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book1-lesson32_section1-paragraph1"
                )}
              </h2>
              <h2 className="lesson-note">
                {translationService.getLabel(
                  "label-book1-lesson32_section1-paragraph2"
                )}
              </h2>
            </IonText>
          </IonItem>
          <IonItem key="1" detail={false} lines="none" color="light">
            <IonGrid className="ion-text-left">
              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h4>
                      {translationService.getLabel(
                        "label-book1-lesson32_section2-header"
                      )}
                    </h4>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section2-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section2-paragraph2"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section2-paragraph3"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section2-paragraph4"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section2-paragraph5"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section2-paragraph6"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section2-paragraph"
                      )}
                    </h2>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem key="1" detail={false} lines="none" color="light">
            <IonGrid className="ion-text-left">
              <IonRow>
                <IonCol size="12">
                  <IonText>
                    <h4>
                      {translationService.getLabel(
                        "label-book1-lesson32_section3-header"
                      )}
                    </h4>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section3-paragraph1"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section3-paragraph2"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section3-paragraph3"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section3-paragraph4"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section3-paragraph5"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section3-paragraph6"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section3-paragraph7"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section3-paragraph8"
                      )}
                    </h2>
                    <h2 className="lesson-note">
                      {translationService.getLabel(
                        "label-book1-lesson32_section3-paragraph9"
                      )}
                    </h2>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default BeliefPage;
