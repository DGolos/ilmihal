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

export const BosnianCulturePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="razimic" defaultHref="/MainCategoryPage" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-image-standard" fullscreen>
        <IonCard
          className="lesson-header ion-padding ion-text-center"
          color="razimic"
        >
          <IonCardTitle>
            <h1 className="lesson">
              {translationService.getLabel("label-book3-lesson15-title")}
            </h1>
          </IonCardTitle>
          <IonCardContent>
            <IonCardSubtitle>
              <h3 style={{ fontStyle: "italic" }}>
                {translationService.getLabel("label-book3-lesson15-quote")}
              </h3>
              <p className="quote-reference">
                {translationService.getLabel(
                  "label-book3-lesson15-quote-reference"
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
                      <IonChip color="razimic" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson15_section1-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress currentValue={1} maxValue={5} color="razimic" />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson15_section1-paragraph1"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson15_section1-paragraph2"
                          )}
                        </h2>
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
                      <IonChip color="razimic" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson15_section2-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress currentValue={2} maxValue={5} color="razimic" />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson15_section2-paragraph1"
                          )}
                        </h2>
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
                      <IonChip color="razimic" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson15_section3-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress currentValue={3} maxValue={5} color="razimic" />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson15_section3-paragraph1"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson15_section3-paragraph2"
                          )}
                        </h2>
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
                      <IonChip color="razimic" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson15_section4-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress currentValue={4} maxValue={5} color="razimic" />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson15_section4-paragraph1"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson15_section4-paragraph2"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson15_section4-paragraph3"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson15_section4-paragraph4"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson15_section5-paragraph4"
                          )}
                        </h2>
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
                      <IonChip color="razimic" style={{ marginLeft: "0px" }}>
                        {translationService.getLabel(
                          "label-book3-lesson15_section5-header"
                        )}
                      </IonChip>
                    </IonCol>
                    <IonCol size="6">
                      <Progress currentValue={5} maxValue={5} color="razimic" />
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol size="12">
                      <IonNote>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson15_section5-paragraph1"
                          )}
                        </h2>
                        <h2 className="lesson-note">
                          {translationService.getLabel(
                            "label-book3-lesson15_section5-paragraph2"
                          )}
                        </h2>
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
