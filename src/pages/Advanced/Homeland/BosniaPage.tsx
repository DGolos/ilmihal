import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonGrid,
  IonItem,
  IonNote,
  IonRow,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import React from "react";
import { Progress } from "../../../components/common/Progress";
import { translationService } from "../../../services/TranslationService";

export const BosniaPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="purple" defaultHref="/MainCategoryPage" />
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
              {translationService.getLabel("label-book3-lesson13-title")}
            </h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel("label-book3-lesson13-quote")}
              </h3>
              <p className="quote-reference">
                {translationService.getLabel(
                  "label-book3-lesson13-quote-reference"
                )}
              </p>
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        <div className="ion-padding">
        <IonSlides>
          <IonSlide>
            <IonItem detail={false} color="light" lines="none">
              <IonGrid className="ion-text-left">
                <IonRow>
                  <IonCol size="6">
                    <IonChip color="purple" style={{ marginLeft: "0px" }}>
                      {translationService.getLabel(
                        "label-book3-lesson12_section1-header"
                      )}
                    </IonChip>
                  </IonCol>
                  <IonCol size="6">
                    <Progress currentValue={1} maxValue={3} color="purple" />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12">
                    <IonNote>
                      {translationService.getLabel(
                        "label-book3-lesson13_section1-paragraph1"
                      )}
                    </IonNote>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </IonSlide>
          <IonSlide>
            <IonItem detail={false} color="light" lines="none">
              <IonGrid className="ion-text-left">
                <IonRow>
                  <IonCol size="6">
                    <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                      {translationService.getLabel(
                        "label-book3-lesson13_section2-header"
                      )}
                    </IonChip>
                  </IonCol>
                  <IonCol size="6">
                    <Progress currentValue={2} maxValue={3} color="burgundy" />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12">
                    <IonNote>
                      {translationService.getLabel(
                        "label-book3-lesson13_section2-paragraph1"
                      )}
                    </IonNote>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </IonSlide>
          <IonSlide>
            <IonItem detail={false} color="light" lines="none">
              <IonGrid className="ion-text-left">
                <IonRow>
                  <IonCol size="6">
                    <IonChip color="burgundy" style={{ marginLeft: "0px" }}>
                      {translationService.getLabel(
                        "label-book3-lesson13_section1-header"
                      )}
                    </IonChip>
                  </IonCol>
                  <IonCol size="6">
                    <Progress currentValue={3} maxValue={3} color="burgundy" />
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12">
                    <IonNote>
                      {translationService.getLabel(
                        "label-book3-lesson13_section3-paragraph1"
                      )}
                    </IonNote>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </IonSlide>
        </IonSlides>
        </div>
        
      </IonContent>
    </IonPage>
  );
};
