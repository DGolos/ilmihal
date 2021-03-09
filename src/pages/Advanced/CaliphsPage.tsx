import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonNote,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Progress } from "../../components/common/Progress";
import { translationService } from "../../services/TranslationService";

export const CaliphsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="purple" />
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
              {translationService.getLabel("label-book3-lesson4-title")}
            </h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel("label-book3-lesson4-quote")}
              </h3>
              <p className="quote-reference">
                {translationService.getLabel(
                  "label-book3-lesson4-quote-reference"
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
                          "label-book3-lesson4-header1"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress currentValue={1} maxValue={5} color="purple" />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson4_section1-paragraph1"
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
                      <IonChip color="purple" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson4-header2"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress currentValue={2} maxValue={5} color="purple" />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson4_section2-paragraph1"
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
                      <IonChip color="purple" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson4-header3"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress currentValue={3} maxValue={5} color="purple" />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson4_section3-paragraph1"
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
                      <IonChip color="purple" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson4-header4"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress currentValue={4} maxValue={5} color="purple" />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson4_section4-paragraph1"
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
                      <IonChip color="purple" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson4-header5"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress currentValue={5} maxValue={5} color="purple" />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        {translationService.getLabel(
                          "label-book3-lesson4_section5-paragraph1"
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
